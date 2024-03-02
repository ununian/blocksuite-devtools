import type { InlineEditor, InlineRange } from '@blocksuite/inline'
import type { Flavour } from '@blocksuite/blocks'
import type { BlockElement, EditorHost } from '@blocksuite/lit'
import { assertExists } from './util'

export const FORMAT_TEXT_SUPPORT_FLAVOURS: Flavour[] = ['affine:paragraph', 'affine:list']
export const FORMAT_BLOCK_SUPPORT_FLAVOURS: Flavour[] = ['affine:paragraph', 'affine:list']
export const FORMAT_NATIVE_SUPPORT_FLAVOURS: Flavour[] = ['affine:database']
export const BLOCK_ID_ATTR = 'data-block-id'

export const INLINE_ROOT_ATTR = 'data-v-root'

export interface AffineTextAttributes {
  bold?: true | null
  italic?: true | null
  underline?: true | null
  strike?: true | null
  code?: true | null
  link?: string | null
  reference?: {
    type: 'Subpage' | 'LinkedPage'
    pageId: string
  } | null
  background?: string | null
  color?: string | null
}

export type InlineRootElement<T extends AffineTextAttributes = AffineTextAttributes> = HTMLElement & {
  inlineEditor: InlineEditor<T>
}

type AffineInlineEditor = InlineEditor<AffineTextAttributes>

export function getCombinedFormatFromInlineEditors(
  inlineEditors: [AffineInlineEditor, InlineRange | null][],
): AffineTextAttributes {
  const formatArr: AffineTextAttributes[] = []
  inlineEditors.forEach(([inlineEditor, inlineRange]) => {
    if (!inlineRange)
      return

    const format = inlineEditor.getFormat(inlineRange)
    formatArr.push(format)
  })

  if (formatArr.length === 0)
    return {}

  // format will be active only when all inline editors have the same format.
  return formatArr.reduce((acc, cur) => {
    const newFormat: AffineTextAttributes = {}
    for (const key in acc) {
      const typedKey = key as keyof AffineTextAttributes
      if (acc[typedKey] === cur[typedKey]) {
        // This cast is secure because we have checked that the value of the key is the same.
        newFormat[typedKey] = acc[typedKey] as any
      }
    }
    return newFormat
  })
}

export function getCombinedFormat(host: EditorHost): AffineTextAttributes {
  let result: AffineTextAttributes = {}

  host.std.command
    .pipe()
    .withHost()
    .try(chain => [
      // text selection, corresponding to `formatText` command
      chain
        .getTextSelection()
        .getSelectedBlocks({
          types: ['text'],
          filter: el => FORMAT_TEXT_SUPPORT_FLAVOURS.includes(el.model.flavour as Flavour),
        })
        .inline((ctx, next) => {
          const { selectedBlocks } = ctx
          assertExists(selectedBlocks)

          const selectedInlineEditors = selectedBlocks.flatMap((el) => {
            const inlineRoot = el.querySelector<InlineRootElement<AffineTextAttributes>>(`[${INLINE_ROOT_ATTR}]`)
            if (inlineRoot) {
              const inlineRange = inlineRoot.inlineEditor.getInlineRange()
              if (!inlineRange || inlineRange.length === 0)
                return []
              return inlineRoot.inlineEditor
            }
            return []
          })

          result = getCombinedFormatFromInlineEditors(selectedInlineEditors.map(e => [e, e.getInlineRange()]))

          next()
        }),
      // block selection, corresponding to `formatBlock` command
      chain
        .getBlockSelections()
        .getSelectedBlocks({
          types: ['block'],
          filter: el => FORMAT_BLOCK_SUPPORT_FLAVOURS.includes(el.model.flavour as Flavour),
        })
        .inline((ctx, next) => {
          const { selectedBlocks } = ctx
          assertExists(selectedBlocks)

          const selectedInlineEditors = selectedBlocks.flatMap((el) => {
            const inlineRoot = el.querySelector<InlineRootElement<AffineTextAttributes>>(`[${INLINE_ROOT_ATTR}]`)
            if (inlineRoot && inlineRoot.inlineEditor.yTextLength > 0)
              return inlineRoot.inlineEditor

            return []
          })

          result = getCombinedFormatFromInlineEditors(
            selectedInlineEditors.map(e => [
              e,
              {
                index: 0,
                length: e.yTextLength,
              },
            ]),
          )

          next()
        }),
      // native selection, corresponding to `formatNative` command
      chain.inline(() => {
        const selectedInlineEditors = Array.from<InlineRootElement>(host.querySelectorAll(`[${INLINE_ROOT_ATTR}]`))
          .filter((el) => {
            const selection = document.getSelection()
            if (!selection || selection.rangeCount === 0)
              return false
            const range = selection.getRangeAt(0)

            return range.intersectsNode(el)
          })
          .filter((el) => {
            const blockElement = el.closest<BlockElement>(`[${BLOCK_ID_ATTR}]`)
            if (blockElement)
              return FORMAT_NATIVE_SUPPORT_FLAVOURS.includes(blockElement.model.flavour as Flavour)

            return false
          })
          .map(el => el.inlineEditor)

        result = getCombinedFormatFromInlineEditors(selectedInlineEditors.map(e => [e, e.getInlineRange()]))
      }),
    ])
    .run()

  return result
}
