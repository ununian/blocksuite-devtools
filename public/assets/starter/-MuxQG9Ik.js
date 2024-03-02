import{D as Re,g as Ne,h as He,c as F,i as je,j as ze,k as We,l as qe,m as Ve,n as Ye,f as h,W as v,s as Ge,e as ue,a as fe,o as Je,S as Ke,G as U,p as Qe,d as Xe,q as Ze,t as et,u as he,B as tt,x as k,T as at,b as ot,_ as xe,J as st}from"../static-yoecXErL.js";import{A as nt,W as it,L as rt,P as lt}from"../index-UxVMN9Je.js";import{g as ct,n as dt,s as pt,t as ut,h as ge,r as me,j as ye,l as be,p as we,k as ke,m as _e,o as ft,q as ht,d as Ce,_ as gt,f as Ee,u as mt,v as yt,w as bt,x as wt,e as kt,C as Me,S as _t,y as $e,F as Ie,B as Oe,a as vt,b as Pt,c as Bt,i as St,T as xt,z as Ct}from"../affine-C_E42r0n.js";import"../chunk.HB3GBEX5-lSR1dUyD.js";import{s as Et}from"../chunk.JHR6CYJZ-gvDggAGd.js";import{i as I,s as De,c as Mt,t as O,r as B,n as b,W as Te,S as ee,e as $t,l as ve}from"../ref-ehjBZcli.js";const It=Object.freeze(Object.defineProperty({__proto__:null,DisposableGroup:Re,Slot:Ne,assertEquals:He,assertExists:F,assertInstanceOf:je,assertNotExists:ze,assertType:We,debounce:ct,flattenDisposables:qe,isEqual:Ve,isPrimitive:Ye,noop:dt,sleep:pt,throttle:ut},Symbol.toStringTag,{value:"Module"})),L=async(e,a)=>{const t=e.createPage({id:a});t.awarenessStore.setFlag("enable_expand_database_block",!0),await t.load(async()=>{const s=t.addBlock("affine:page",{title:new h("BlockSuite Playground")});t.addBlock("affine:surface",{},s);const o=t.addBlock("affine:note",{},s),i=t.addBlock("affine:paragraph",{},o),n=t.getBlockById(i);F(n);const l=t.addBlock("affine:database",{columns:[],cells:{}},o);await new Promise(y=>requestAnimationFrame(y)),window.host.std.spec.getService("affine:database").initDatabaseBlock(t,n,l,"table",!0);const d=t.getBlockById(l);d.addColumn("end",ge.create(ge.name)),d.addColumn("end",me.create(me.name)),d.addColumn("end",ye.create(ye.name)),d.addColumn("end",be.create(be.name)),d.addColumn("end",we.create(we.name)),d.addColumn("end",ke.create(ke.name)),d.addColumn("end",_e.create(_e.name)),d.updateView(d.views[0].id,()=>({groupBy:{columnId:d.columns[1].id,type:"groupBy",name:"select"}})),["text","quote","h1","h2","h3","h4","h5","h6"].forEach(y=>{t.addBlock("affine:paragraph",{type:y,text:new h(`Paragraph type ${y}`)},l)}),["numbered","bulleted","todo","toggle"].forEach(y=>{t.addBlock("affine:list",{type:y,text:new h(`List type ${y}`)},l)}),t.addBlock("affine:paragraph",{},o),t.addBlock("affine:paragraph",{},o),t.addBlock("affine:paragraph",{},o),t.addBlock("affine:paragraph",{},o),t.addBlock("affine:paragraph",{},o),d.addView("kanban")}),t.resetHistory()};L.id="database";L.displayName="Database Example";L.description="Database block basic example";const R=async(e,a)=>{const t=e.getPage(a)??e.createPage({id:a});t.clear(),await t.load(()=>{const s=t.addBlock("affine:page",{title:new h}),o=t.addBlock("affine:surface",{},s),i=t.addBlock("affine:note",{},s);t.addBlock("affine:paragraph",{},i),t.addBlock("affine:embed-github",{url:"https://github.com/toeverything/AFFiNE/pull/5453"},i),t.addBlock("affine:embed-github",{url:"https://www.github.com/toeverything/blocksuite/pull/5927",style:"vertical",xywh:"[0, 400, 364, 390]"},o),t.addBlock("affine:embed-github",{url:"https://github.com/Milkdown/milkdown/pull/1215",xywh:"[500, 400, 752, 116]"},o),t.addBlock("affine:paragraph",{},i)}),t.resetHistory()};R.id="embed";R.displayName="Example for embed blocks";R.description="Example for embed blocks";const N=async(e,a)=>{const t=e.getPage(a)??e.createPage({id:a});t.clear(),await t.load(()=>{const s=t.addBlock("affine:page",{title:new h});t.addBlock("affine:surface",{},s);const o=t.addBlock("affine:note",{},s);t.addBlock("affine:paragraph",{},o)}),t.resetHistory()};N.id="empty";N.displayName="Empty Editor";N.description="Start from empty editor";const C=v.Y,Ot=(e,a,t)=>(s,o,i)=>{const n=i.awareness,l=new Map,c=new Map,w=nt({queryDocState:async(r,u)=>{const p=l.get(r);return!p||u&&u!==p.clientID?!1:C.encodeStateAsUpdate(p)},sendDocUpdate:async(r,u)=>{const p=l.get(r);if(!p){c.has(r)?c.get(r).push(u):c.set(r,[u]);return}if(c.has(r)&&(c.get(r).forEach(_=>C.applyUpdate(p,_,a)),c.delete(r)),C.applyUpdate(p,u,a),p.store.pendingStructs)for(const m of p.store.pendingStructs.missing.keys()){const _=await w.queryDocState(p.guid,m);_&&C.applyUpdate(p,_,a)}},queryAwareness:async()=>ue(n,[n.clientID]),sendAwareness:async r=>{fe(n,r,a)}},{channel:a,...Ge.merge(!0,{log:{beCalled:!1,localError:!0,remoteError:!0}},t.asyncCallOptions??{})}),P=new WeakMap,y=new WeakMap,x=new WeakMap,J=r=>{if(P.has(r))return P.get(r);const u=(p,m)=>{m!==a&&w.sendDocUpdate(r.guid,p).catch(console.error)};return P.set(r,u),u},ne=r=>{if(y.has(r))return y.get(r);const u=p=>{p.added.forEach(m=>l.set(m.guid,m)),p.added.forEach(m=>{w.queryDocState(m.guid).then(_=>{_&&(C.applyUpdate(m,_,a),m.emit("load",[]))}).catch(console.error),m.on("update",J(m))}),p.removed.forEach(D)};return y.set(r,u),u},ie=r=>{if(x.has(r))return x.get(r);const u=()=>{D(r)};return x.set(r,u),u},re=(r,u)=>{if(u===a)return;const p=Object.values(r).reduce((_,Le)=>[..._,...Le]),m=ue(n,p);w.sendAwareness(m).catch(console.error)};function le(r){de(r),r.on("subdocs",ne(r)),r.subdocs.forEach(le),r.on("update",J(r)),r.on("destroy",ie(r))}async function ce(r){const u=await w.queryDocState(r.guid);T&&(u!==!1&&C.applyUpdate(r,u,a),r.subdocs.forEach(p=>{ce(p).catch(console.error)}))}function D(r){l.delete(r.guid),r.subdocs.forEach(D),r.off("update",J(r)),r.off("subdocs",ne(r)),r.off("destroy",ie(r))}function de(r){l.set(r.guid,r),r.subdocs.forEach(de)}let T=!1;const pe={flavour:e,passive:!0,connect(){T=!0,le(o),ce(o).catch(console.error),w.queryAwareness().then(r=>fe(n,r,a)).catch(console.error),n.on("update",re)},disconnect(){D(o),n.off("update",re),T=!1},get connected(){return T},cleanup:()=>{pe.disconnect(),c.clear(),t.cleanup()}};return pe},Dt=(...e)=>{class a extends BroadcastChannel{on(i){const n=l=>i(l.data);return this.addEventListener("message",n),()=>this.removeEventListener("message",n)}send(i){super.postMessage(i)}}const t=e[0],s=new a(t);return Ot("broadcast-channel",s,{cleanup:()=>{s.close()}})(...e)},S=new URLSearchParams(location.search),Ue=S.get("room")??Math.random().toString(16).slice(2,8),Pe=(S.get("providers")??"bc").split(","),K=(S.get("blobStorage")??"memory").split(","),Tt=(S.get("features")??"").split(",");class Ut{constructor(a){this.flavour="blocksuite-indexeddb",this.passive=!0,this._connected=!1,this._provider=it(a)}connect(){this._provider.connect(),this._connected=!0}disconnect(){this._provider.disconnect(),this._connected=!1}get connected(){return this._connected}}const Ft=S.get("mode")==="edgeless"?"edgeless":"page",Be=S.get("init"),te=Ue.startsWith("playwright"),Fe=e=>e(S);te&&Object.defineProperty(window,"$blocksuite",{value:Object.freeze({store:Je,blocks:ft,global:{utils:It},editor:ht})});function At(){const e=[],a=[],t=new Ke;t.register(Ce).register(gt);let s=U.AutoIncrement;return Pe.includes("idb")&&(e.push((o,i)=>new Ut(i)),s=U.NanoID),Pe.includes("bc")&&(e.push(Dt),s=U.NanoID),K.includes("memory")&&a.push(Qe),K.includes("idb")&&a.push(Xe),K.includes("mock")&&a.push(Ze),te&&(s=U.AutoIncrement),{id:Ue,schema:t,providerCreators:e,idGenerator:s,blobStorages:a,defaultFlags:{enable_bultin_ledits:Tt.includes("ledits"),readonly:{"page:home":!1}}}}function ae(e,a){const t=new Ee;return t.page=e,a.append(t),t}function Q(e,a){return[["span",{style:"color: #c0c0c0"},` ${e}`],["span",{style:"color: #fff"},": "],["span",{style:"color: rgb(92, 213, 251)"},`${JSON.stringify(a)}`]]}const Lt=[{header:function(e){return"flavour"in e&&"yBlock"in e?["span",{style:"font-weight: bolder;"},["span",{style:"color: #fff"},"Block {"],...Q("flavour",e.flavour),["span",{style:"color: #fff"},","],...Q("id",e.id),["span",{style:"color: #fff"},"}"]]:null},hasBody:e=>"flavour"in e&&"yBlock"in e?!0:null,body:e=>{if("flavour"in e&&"yBlock"in e){const{props:a}=e.page._blockTree.getBlock(e.id)._parseYBlock(),t=Object.entries(a).flatMap(([s])=>[...Q(s,e[s]),["div",{},""]]);return["div",{style:"padding-left: 1em"},...t]}return null}}];window.devtoolsFormatters=Lt;const H=async(e,a)=>{const{count:t}=Fe(o=>({count:Number(o.get("count"))||1e3})),s=e.createPage({id:a});await s.load(()=>{const o=s.addBlock("affine:page",{title:new h});s.addBlock("affine:surface",{},o);const i=s.addBlock("affine:note",{},o);for(let n=0;n<t;n++)s.addBlock("affine:paragraph",{text:new h("Hello, world! "+n)},i)})};H.id="heavy";H.displayName="Heavy Example";H.description="Heavy example on thousands of paragraph blocks";const Rt=["rect","triangle","ellipse","diamond"],j=async(e,a)=>{const{count:t}=Fe(o=>({count:Number(o.get("count"))||100})),s=e.createPage({id:a});await s.load(()=>{const o=s.addBlock("affine:page",{title:new h}),i={};let n=0;for(;n<t;n++){const l=Math.random()*t*2,c=Math.random()*t*2,d=et();i[d]=he({id:d,index:"a0",type:"shape",xywh:`[${l},${c},100,100]`,seed:Math.floor(Math.random()*2**31),shapeType:Rt[Math.floor(Math.random()*40)%4],radius:0,filled:!1,fillColor:"--affine-palette-shape-yellow",strokeWidth:4,strokeColor:"--affine-palette-line-yellow",strokeStyle:"solid",roughness:1.4},{deep:!1})}for(s.addBlock("affine:surface",{elements:new tt(he(i,{deep:!1}))},o),n=0;n<t;n++){const l=Math.random()*-t*2-100,c=Math.random()*t*2,d=s.addBlock("affine:note",{xywh:`[${l}, ${c}, 100, 50]`},o);s.addBlock("affine:paragraph",{text:new h("Note #"+n)},d)}})};j.id="heavy-whiteboard";j.displayName="Heavy Whiteboard";j.description="Heavy Whiteboard on 200 elements by default";const z=async(e,a)=>{const t=e.getPage(a)??e.createPage({id:a}),s="page:page-linked-doc",o=e.getPage("pageB")??e.createPage({id:s}),i="page:page-linked-edgeless",n=e.getPage("pageC")??e.createPage({id:i});t.clear(),o.clear(),n.clear(),await o.load(()=>{const l=o.addBlock("affine:page",{title:new h("")});o.addBlock("affine:surface",{},l);const c=o.addBlock("affine:note",{},l);o.addBlock("affine:paragraph",{},c)}),await n.load(()=>{const l=n.addBlock("affine:page",{title:new h("")});n.addBlock("affine:surface",{},l);const c=n.addBlock("affine:note",{},l);n.addBlock("affine:paragraph",{},c)}),await t.load(async()=>{const l=t.addBlock("affine:page",{title:new h("Page A")});t.addBlock("affine:surface",{},l);const c=t.addBlock("affine:note",{},l);t.addBlock("affine:paragraph",{},c),t.addBlock("affine:embed-linked-doc",{pageId:s},c),t.addBlock("affine:embed-linked-doc",{pageId:"page:deleted-example"},c),t.addBlock("affine:embed-linked-doc",{pageId:i},c),t.addBlock("affine:embed-linked-doc",{pageId:"page:deleted-example-edgeless"},c)}),t.resetHistory(),o.resetHistory(),n.resetHistory()};z.id="linked";z.displayName="Linked Page Editor";z.description="A demo with linked pages";const W=async(e,a)=>{const t=e.createPage({id:a});await t.load(()=>{const o=t.addBlock("affine:page",{title:new h});t.addBlock("affine:surface",{},o);const i=t.addBlock("affine:note",{},o);t.addBlock("affine:paragraph",{},i)}),t.resetHistory();const s=document.getElementById("app");s&&(ae(t,s),s.style.display="flex",s.childNodes.forEach(o=>{o instanceof Ee&&(o.style.flex="1")}))};W.id="multiple-editor";W.displayName="Multiple Editor Example";W.description="Multiple Editor basic example";const q=async(e,a)=>{const t=e.createPage({id:a});await t.load(()=>{const o=t.addBlock("affine:page",{title:new h});t.addBlock("affine:surface",{},o);const i=t.addBlock("affine:note",{},o);t.addBlock("affine:paragraph",{},i)}),t.resetHistory();const s=document.getElementById("app");s&&ae(t,s)};q.id="multiple-editor-vertical";q.displayName="Vertical Multiple Editor Example";q.description="Multiple Editor vertical layout example";const V=async(e,a)=>{const t=e.createPage({id:a}),s=e.createPage({id:"tempPage"});await t.load(),await s.load(()=>{const o=s.addBlock("affine:page",{title:new h("Pending Structs")}),i=v.Y.encodeStateVector(s.spaceDoc);s.addBlock("affine:surface",{},o);const n=s.addBlock("affine:note",{},o);s.addBlock("affine:paragraph",{text:new h("This is a paragraph block")},n);const l=v.Y.encodeStateAsUpdate(s.spaceDoc,i);v.Y.applyUpdate(t.spaceDoc,l)})};V.id="pending-structs";V.displayName="Pending Structs";V.description="Page doc with pending structs";const Nt=`This playground is designed to:

* 📝 Test basic editing experience.
* ⚙️ Serve as E2E test entry.
* 🔗 Demonstrate how BlockSuite reconciles real-time collaboration with [local-first](https://martin.kleppmann.com/papers/local-first.pdf) data ownership.

## Controlling Playground Data Source
You might initially enter this page with the \`?init\` URL param. This is the default (opt-in) setup that automatically loads this built-in article. Meanwhile, you'll connect to a random single-user room via a broadcast channel provider by default. This is the "single-user mode" for local testing.

To test real-time collaboration, you can specify the room to join by adding the \`?room=foo\` config - Try opening this page with \`?room=foo\` in two different tabs and see what happens!

> Note that the second and subsequent users should not open the page with the \`?init\` param in this case.

If you are the only user in the room, your content will be lost after refresh. This is great for local debugging. But if you want local persistence, you can open this page with the \`?providers=idb&room=foo\` config, then click the init button in the bottom-left corner to initialize this default content.

As a pro tip, you can combine multiple providers! For example, feel free to open this page with \`?providers=idb,bc&room=hello\` params (IndexedDB + BroadcastChannel), and see if everything works as expected. Have fun!

For any feedback, please visit [BlockSuite issues](https://github.com/toeverything/blocksuite/issues) 📍`,Y=async(e,a)=>{const t=e.createPage({id:a});await t.load(async()=>{const s=t.addBlock("affine:page",{title:new h("BlockSuite Playground")});t.addBlock("affine:surface",{},s);const o=t.addBlock("affine:note",{xywh:"[0, 100, 800, 640]"},s);await mt({page:t,noteId:o,markdown:Nt}),t.resetHistory()})};Y.id="preset";Y.displayName="BlockSuite Starter";Y.description="Start from friendly introduction";const G=async(e,a)=>{const t=e.createPage({id:a}),s=e.createPage({id:"tempPage"});await t.load(),await s.load(()=>{const o=s.addBlock("affine:page",{});s.addBlock("affine:surface",{},o);const i=s.addBlock("affine:note",{xywh:"[0, 100, 800, 640]"},o),n=s.addBlock("affine:paragraph",{},i),c=s.spaceDoc.get("blocks").get(n);c.set("sys:version",c.get("sys:version")+1);const d=v.Y.encodeStateAsUpdate(s.spaceDoc);v.Y.applyUpdate(t.spaceDoc,d),t.addBlock("affine:paragraph",{},i)}),e.removePage("tempPage"),t.resetHistory()};G.id="version-mismatch";G.displayName="Version Mismatch";G.description="Error boundary when version mismatch in data";const Ae=Object.freeze(Object.defineProperty({__proto__:null,database:L,embed:R,empty:N,heavy:H,heavyWhiteboard:j,linked:z,multiEditor:W,multiEditorVertical:q,pendingStructs:V,preset:Y,versionMismatch:G},Symbol.toStringTag,{value:"Module"}));var Ht=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,zt=(e,a,t,s)=>{for(var o=s>1?void 0:s?jt(a,t):a,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(a,t,o):n(o))||o);return s&&o&&Ht(a,t,o),o};const Wt=Object.values(Ae);let X=class extends De{render(){return k`
      <div class="container">
        ${Mt(Wt,e=>k`
            <sl-card
              class="card"
              @click=${()=>{const a=new URLSearchParams(window.location.search);a.set("init",e.id),window.location.search=a.toString()}}
            >
              <div slot="header">${e.displayName}</div>
              ${e.description}
            </sl-card>
          `)}
      </div>
    `}};X.styles=I`
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 1rem;
      gap: 1rem;
    }

    .card {
      width: 300px;
      font-family: var(--sl-input-font-family);
      font-size: 14px;
      cursor: pointer;
    }
  `;X=zt([O("start-panel")],X);var qt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,oe=(e,a,t,s)=>{for(var o=s>1?void 0:s?Vt(a,t):a,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(a,t,o):n(o))||o);return s&&o&&qt(a,t,o),o};let E=class extends Te(ee){constructor(){super(...arguments),this._show=!1}_renderPanel(){return k`<frame-panel .editor=${this.editor}></frame-panel>`}toggleDisplay(){this._show=!this._show}connectedCallback(){super.connectedCallback(),yt(e=>{Object.entries(e).forEach(([a,t])=>{customElements.define(a,t)})}),this.disposables.add(this.editor.slots.pageModeSwitched.on(()=>{this.editor.updateComplete.then(()=>this.requestUpdate()).catch(console.error)}))}render(){return k`
      ${this._show?k`<div class="custom-frame-container blocksuite-overlay">
            ${this._renderPanel()}
          </div>`:at}
    `}};E.styles=I`
    .custom-frame-container {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      background-color: var(--affine-background-primary-color);
      height: 100vh;
      width: 320px;
      box-sizing: border-box;
      padding-top: 16px;
      z-index: 1;
    }
  `;oe([B()],E.prototype,"_show",2);oe([b({attribute:!1})],E.prototype,"editor",2);E=oe([O("custom-frame-panel")],E);var Yt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,se=(e,a,t,s)=>{for(var o=s>1?void 0:s?Gt(a,t):a,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(a,t,o):n(o))||o);return s&&o&&Yt(a,t,o),o};let M=class extends Te(De){constructor(){super(...arguments),this._show=!1}_renderPanel(){return k`<outline-panel
      .editor=${this.editor}
      .fitPadding=${[50,360,50,50]}
    ></outline-panel>`}toggleDisplay(){this._show=!this._show}connectedCallback(){super.connectedCallback(),bt(e=>{Object.entries(e).forEach(([a,t])=>{customElements.define(a,t)})})}render(){return k`
      ${this._show?k`
            <div class="custom-outline-container blocksuite-overlay">
              ${this._renderPanel()}
            </div>
          `:null}
    `}};M.styles=I`
    .custom-outline-container {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      background: var(--affine-background-overlay-panel-color);
      height: 100vh;
      width: 320px;
      box-sizing: border-box;
      z-index: 1;
    }
  `;se([B()],M.prototype,"_show",2);se([b({attribute:!1})],M.prototype,"editor",2);M=se([O("custom-outline-panel")],M);var Jt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Qt=(e,a,t,s)=>{for(var o=s>1?void 0:s?Kt(a,t):a,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(a,t,o):n(o))||o);return s&&o&&Jt(a,t,o),o};let A=class extends ee{constructor(){super(...arguments),this.currentContent=null}showContent(e){this.currentContent&&this.currentContent.remove(),this.style.display="block",e.classList.add("blocksuite-overlay"),this.currentContent=e,this.append(e)}hideContent(){this.currentContent&&(this.style.display="none",this.currentContent.remove(),this.currentContent=null)}render(){return k``}toggle(e){this.currentContent!==e?this.showContent(e):this.hideContent()}};A.styles=I`
    side-panel {
      width: 300px;
      background-color: var(--affine-background-secondary-color);
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      display: none;
    }
  `;A=Qt([O("side-panel")],A);function Xt(){wt.registerCustomElement({init(e){const a=document.createElement("div");return a.textContent="❤️",a.setAttribute("data-testid","custom-format-bar-element"),a.addEventListener("click",()=>{const s=e.host.selection;console.log("selections",s.value)}),a}})}var Zt=Object.defineProperty,ea=Object.getOwnPropertyDescriptor,g=(e,a,t,s)=>{for(var o=s>1?void 0:s?ea(a,t):a,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(a,t,o):n(o))||o);return s&&o&&Zt(a,t,o),o};function ta(e){const{page:a}=e,t=a.getBlockByFlavour("affine:surface")[0];F(t);const s=t.id,o=e.querySelector(`affine-surface[data-block-id="${s}"]`);return F(o),o}const $=kt(document.documentElement),Z={};Me.forEach(e=>{Z[e]=$[e]});const aa=_t.filter(e=>!$e.includes(e)&&!Me.includes(e)&&!Ie.includes(e));let Se=!1;const oa="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/dist";Et(oa);function sa(e,a){const t=e.addFolder({title:"Size",expanded:!1}),s=e.addFolder({title:"Font Family",expanded:!1}),o=e.addFolder({title:"Color",expanded:!1}),i=e.addFolder({title:"Others",expanded:!1});$e.forEach(n=>{t.addBinding({[n]:isNaN(parseFloat($[n]))?0:parseFloat($[n])},n,{min:0,max:100}).on("change",l=>{a.setProperty(n,`${Math.round(l.value)}px`)})}),Ie.forEach(n=>{s.addBinding({[n]:$[n]},n).on("change",l=>{a.setProperty(n,l.value)})}),aa.forEach(n=>{i.addBinding({[n]:$[n]},n).on("change",l=>{a.setProperty(n,l.value)})}),s.addBinding({"--affine-font-family":"Roboto Mono, apple-system, BlinkMacSystemFont,Helvetica Neue, Tahoma, PingFang SC, Microsoft Yahei, Arial,Hiragino Sans GB, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol, Noto Color Emoji"},"--affine-font-family").on("change",n=>{a.setProperty("--affine-font-family",n.value)});for(const n in Z)o.addBinding(Z,n).on("change",l=>{a.setProperty(n,l.value)})}function na(e){let a=[];return e.std.command.pipe().getBlockSelections().inline((t,s)=>{const o=t.currentBlockSelections;if(o)return a=o.map(i=>t.std.view.viewFromPath("block",i.path)).filter(i=>i!==null&&Oe.matchFlavours(i.model,["affine:paragraph","affine:list","affine:code"])),s()}).run(),a}let f=class extends ee{constructor(){super(...arguments),this._connected=!0,this._canUndo=!1,this._canRedo=!1,this.mode="page",this.readonly=!1,this._hasOffset=!1,this._showStyleDebugMenu=!1,this._dark=localStorage.getItem("blocksuite:dark")==="true",this._darkModeChange=e=>{this._setThemeMode(!!e.matches)}}get page(){return this.editor.page}get pageService(){return this.editor.host.spec.getService("affine:page")}createRenderRoot(){const e=window.matchMedia("(prefers-color-scheme: dark)");return this._setThemeMode(this._dark&&e.matches),e.addEventListener("change",this._darkModeChange),this}connectedCallback(){super.connectedCallback();const e=async()=>{const a=this.editor.host;if(!a){await new Promise(o=>{setTimeout(o,500)}),e().catch(console.error);return}const s=new URL(window.location.toString()).searchParams.get("sel");if(s)try{const o=JSON.parse(ve.decompressFromEncodedURIComponent(s));a.std.selection.fromJSON(o)}catch{return}};e().catch(console.error)}disconnectedCallback(){super.disconnectedCallback(),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this._darkModeChange)}_toggleConnection(){this._connected?(this.workspace.providers.forEach(e=>{"passive"in e&&e.connected&&e.disconnect()}),this._connected=!1):(this.workspace.providers.forEach(e=>{"passive"in e&&!e.connected&&e.connect()}),this._connected=!0)}_switchEditorMode(){const e=this.editor.mode==="page"?"edgeless":"page";this.mode=e}_toggleOutlinePanel(){this.outlinePanel.toggleDisplay()}_toggleFramePanel(){this.framePanel.toggleDisplay()}_toggleCopilotPanel(){this.sidePanel.toggle(this.copilotPanel)}_togglePagesPanel(){this.leftSidePanel.toggle(this.pagesPanel)}_createMindMap(){const e=na(this.editor.host),a=s=>({text:s.text?.toString()??"",children:s.children.map(a)}),t={text:"Root",children:e.map(s=>a(s.model))};Oe.mindMap.drawInEdgeless(ta(this.editor.host),t)}_switchOffsetMode(){this._hasOffset=!this._hasOffset}_addNote(){const e=this.page.root;if(!e)return;const a=e.id;this.page.captureSync();const s=`[0,${e.children.length*60},800,95]`,o=this.page.addBlock("affine:note",{xywh:s},a);this.page.addBlock("affine:paragraph",{},o)}_exportPdf(){this.pageService.exportManager.exportPdf().catch(console.error)}_exportHtml(){vt(this.page).catch(console.error)}async _exportMarkDown(){Pt(this.page).catch(console.error)}_exportPng(){this.pageService.exportManager.exportPng().catch(console.error)}async _exportSnapshot(){const e=await Bt(this.workspace,[...this.workspace.pages.values()]),a=URL.createObjectURL(e),t=document.createElement("a");t.setAttribute("href",a),t.setAttribute("download",`${this.page.id}.bs.zip`),t.click(),t.remove(),URL.revokeObjectURL(a)}_importSnapshot(){const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept",".zip"),e.multiple=!1,e.onchange=async()=>{const a=e.files?.item(0);if(a)try{await St(this.workspace,a),this.requestUpdate()}catch(t){console.error("Invalid snapshot."),console.error(t)}finally{e.remove()}},e.click()}_shareUrl(){const e=ot(this.workspace),a=new URL(window.location.toString());a.searchParams.set("init",e),window.history.pushState({},"",a)}async _toggleStyleDebugMenu(){if(!Se){Se=!0;const{Pane:e}=await xe(()=>import("../tweakpane-DZHmlJl5.js"),__vite__mapDeps([]));this._styleMenu=new e({title:"Waiting"}),this._styleMenu.hidden=!0,this._styleMenu.element.style.width="650",sa(this._styleMenu,document.documentElement.style)}this._showStyleDebugMenu=!this._showStyleDebugMenu,this._showStyleDebugMenu?this._styleMenu.hidden=!1:this._styleMenu.hidden=!0}_toggleReadonly(){const e=this.page;e.awarenessStore.setReadonly(e,!e.readonly)}_shareSelection(){const e=this.editor.host?.selection.value;if(!e||e.length===0)return;const a=e.map(o=>o.toJSON()),t=ve.compressToEncodedURIComponent(JSON.stringify(a)),s=new URL(window.location.toString());s.searchParams.set("sel",t),window.history.pushState({},"",s)}_setThemeMode(e){const a=document.querySelector("html");this._dark=e,localStorage.setItem("blocksuite:dark",e?"true":"false"),a&&(a.setAttribute("data-theme",e?"dark":"light"),this._insertTransitionStyle("color-transition",0),e?(a.classList.add("dark"),a.classList.add("sl-theme-dark")):(a.classList.remove("dark"),a.classList.remove("sl-theme-dark")))}_insertTransitionStyle(e,a){const t=document.documentElement,s=document.createElement("style"),o=["sl-transition-x-fast"];s.innerHTML=`html.${e} * { transition: all ${a}ms 0ms linear !important; } :root { ${o.map(i=>`--${i}: ${a}ms`)} }`,t.appendChild(s),t.classList.add(e),setTimeout(()=>{s.remove(),t.classList.remove(e)},a)}_toggleDarkMode(){this._setThemeMode(!this._dark)}_extendFormatBar(){Xt()}firstUpdated(){this.page.slots.historyUpdated.on(()=>{this._canUndo=this.page.canUndo,this._canRedo=this.page.canRedo})}update(e){if(e.has("mode")){const a=this.mode;this.editor.mode=a}if(e.has("_hasOffset")){const a=document.getElementById("app");if(!a)return;const t=this._hasOffset?{margin:"60px 40px 240px 40px",overflow:"auto",height:"400px",boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.2)"}:{margin:"0",overflow:"initial",height:"100%",boxShadow:"initial"};Object.assign(a.style,t)}super.update(e)}render(){return k`
      <style>
        .debug-menu {
          display: flex;
          flex-wrap: nowrap;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          overflow: auto;
          z-index: 1000; /* for debug visibility */
          pointer-events: none;
        }

        @media print {
          .debug-menu {
            display: none;
          }
        }

        .default-toolbar {
          display: flex;
          gap: 5px;
          padding: 8px;
          width: 100%;
          min-width: 390px;
        }

        .default-toolbar > * {
          pointer-events: auto;
        }

        .edgeless-toolbar {
          align-items: center;
          margin-right: 17px;
          pointer-events: auto;
        }

        .edgeless-toolbar sl-select,
        .edgeless-toolbar sl-color-picker,
        .edgeless-toolbar sl-button {
          margin-right: 4px;
        }
      </style>
      <div class="debug-menu default blocksuite-overlay">
        <div class="default-toolbar">
          <!-- undo/redo group -->
          <sl-button-group label="History">
            <!-- undo -->
            <sl-tooltip content="Undo" placement="bottom" hoist>
              <sl-button
                size="small"
                .disabled=${!this._canUndo}
                @click=${()=>this.page.undo()}
              >
                <sl-icon name="arrow-counterclockwise" label="Undo"></sl-icon>
              </sl-button>
            </sl-tooltip>
            <!-- redo -->
            <sl-tooltip content="Redo" placement="bottom" hoist>
              <sl-button
                size="small"
                .disabled=${!this._canRedo}
                @click=${()=>this.page.redo()}
              >
                <sl-icon name="arrow-clockwise" label="Redo"></sl-icon>
              </sl-button>
            </sl-tooltip>
          </sl-button-group>

          <!-- test operations -->
          <sl-dropdown id="test-operations-dropdown" placement="bottom" hoist>
            <sl-button size="small" slot="trigger" caret>
              Test Operations
            </sl-button>
            <sl-menu>
              <sl-menu-item @click=${this._toggleConnection}>
                ${this._connected?"Disconnect":"Connect"}
              </sl-menu-item>
              <sl-menu-item @click=${this._exportMarkDown}>
                Export Markdown
              </sl-menu-item>
              <sl-menu-item @click=${this._exportHtml}>
                Export HTML
              </sl-menu-item>
              <sl-menu-item @click=${this._exportPdf}>
                Export PDF
              </sl-menu-item>
              <sl-menu-item @click=${this._exportPng}>
                Export PNG
              </sl-menu-item>
              <sl-menu-item @click=${this._exportSnapshot}>
                Export Snapshot
              </sl-menu-item>
              <sl-menu-item @click=${this._importSnapshot}>
                Import Snapshot
              </sl-menu-item>
              <sl-menu-item @click=${this._shareUrl}>Share URL</sl-menu-item>
              <sl-menu-item @click=${this._toggleStyleDebugMenu}>
                Toggle CSS Debug Menu
              </sl-menu-item>
              <sl-menu-item @click=${this._toggleReadonly}>
                Toggle Readonly
              </sl-menu-item>
              <sl-menu-item @click=${this._shareSelection}>
                Share Selection
              </sl-menu-item>
              <sl-menu-item @click=${this._switchOffsetMode}>
                Switch Offset Mode
              </sl-menu-item>
              <sl-menu-item @click=${this._toggleOutlinePanel}>
                Toggle Outline Panel
              </sl-menu-item>
              <sl-menu-item @click=${this._toggleFramePanel}>
                Toggle Frame Panel
              </sl-menu-item>
              <sl-menu-item @click=${this._extendFormatBar}>
                Extend Format Bar
              </sl-menu-item>
              <sl-menu-item @click=${this._createMindMap}>
                Create Mind Map
              </sl-menu-item>
              <sl-menu-item @click=${this._addNote}>Add Note</sl-menu-item>
            </sl-menu>
          </sl-dropdown>

          <sl-tooltip content="Switch Editor Mode" placement="bottom" hoist>
            <sl-button size="small" @click=${this._switchEditorMode}>
              <sl-icon name="repeat"></sl-icon>
            </sl-button>
          </sl-tooltip>

          <sl-tooltip content="Toggle Dark Mode" placement="bottom" hoist>
            <sl-button size="small" @click=${this._toggleDarkMode}>
              <sl-icon
                name=${this._dark?"moon":"brightness-high"}
              ></sl-icon>
            </sl-button>
          </sl-tooltip>

          <sl-tooltip
            content="🚧 Toggle Copilot Panel"
            placement="bottom"
            hoist
          >
            <sl-button size="small" @click=${this._toggleCopilotPanel}>
              <sl-icon name="stars"></sl-icon>
            </sl-button>
          </sl-tooltip>
          <sl-button
            data-testid="pages-button"
            size="small"
            @click=${this._togglePagesPanel}
          >
            Pages
          </sl-button>
        </div>
      </div>
    `}};f.styles=I`
    :root {
      --sl-font-size-medium: var(--affine-font-xs);
      --sl-input-font-size-small: var(--affine-font-xs);
    }

    .dg.ac {
      z-index: 1001 !important;
    }
  `;g([b({attribute:!1})],f.prototype,"workspace",2);g([b({attribute:!1})],f.prototype,"editor",2);g([b({attribute:!1})],f.prototype,"outlinePanel",2);g([b({attribute:!1})],f.prototype,"framePanel",2);g([b({attribute:!1})],f.prototype,"copilotPanel",2);g([b({attribute:!1})],f.prototype,"sidePanel",2);g([b({attribute:!1})],f.prototype,"leftSidePanel",2);g([b({attribute:!1})],f.prototype,"pagesPanel",2);g([B()],f.prototype,"_connected",2);g([B()],f.prototype,"_canUndo",2);g([B()],f.prototype,"_canRedo",2);g([b({attribute:!1})],f.prototype,"mode",2);g([b({attribute:!1})],f.prototype,"readonly",2);g([B()],f.prototype,"_hasOffset",2);g([$t("#block-type-dropdown")],f.prototype,"blockTypeDropdown",2);g([B()],f.prototype,"_dark",2);f=g([O("debug-menu")],f);const ia=At();function ra(e){e.slots.pageAdded.once(a=>{if(typeof globalThis.targetPageId=="string"&&a!==globalThis.targetPageId)return;const t=document.getElementById("app");if(!t)return;const s=e.getPage(a),o=ae(s,t);o.slots.pageLinkClicked.on(({pageId:y})=>{const x=s.workspace.getPage(y);if(!x)throw new Error(`Failed to jump to page ${y}`);o.page=x});const i=new f,n=new M,l=new E,c=new Ct,d=new A,w=new rt,P=new lt;i.workspace=e,i.editor=o,i.mode=Ft,i.outlinePanel=n,i.framePanel=l,i.copilotPanel=c,i.sidePanel=d,i.leftSidePanel=w,i.pagesPanel=P,n.editor=o,c.editor=o,l.editor=o,P.editor=o,document.body.appendChild(i),document.body.appendChild(n),document.body.appendChild(d),document.body.appendChild(w),document.body.appendChild(l),window.editor=o,window.page=s})}async function la(e,a,t){const s=new Map;if(Object.values(await xe(()=>Promise.resolve().then(()=>Ae),void 0)).forEach(o=>s.set(o.id,o)),a===""&&(a="preset"),s.has(a)){s.get(a)?.(e,t);const o=e.getPage(t);await o?.load(),o?.resetHistory();return}}async function ca(){if(window.workspace)return;const e=new v(ia);if(window.workspace=e,window.job=new st({workspace:e}),window.blockSchemas=Ce,window.Y=v.Y,Object.defineProperty(globalThis,"host",{get(){return document.querySelector("editor-host")}}),await(async s=>{for(const o of s)"active"in o?(o.sync(),await o.whenReady):"passive"in o&&o.connect()})(e.providers),e.slots.pageAdded.on(async s=>{await e.getPage(s).load()}),window.testUtils=new xt,te)return;if(ra(e),Be!==null){await la(e,Be,"page:home");return}const t=document.createElement("start-panel");e.slots.pageAdded.once(()=>t.remove()),document.body.prepend(t)}ca().catch(console.error);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=-MuxQG9Ik.js.map
