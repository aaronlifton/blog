import{j as p}from"./jsx-runtime.Oosg3Qiw.js";import{r as e}from"./index.aW6hh0D0.js";import{S as v}from"./index.80736cc8._KzaGuyd.js";import{a as k,i as h}from"./LatestCodeListState.LRRLA1Vf.js";import"./index.cke4Zc0P.js";const w=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:44,height:44,fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,className:"icon icon-tabler icon-tabler-player-play",viewBox:"0 0 24 24",...t},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M7 4v16l13-8z"})),y=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:44,height:44,fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,className:"icon icon-tabler icon-tabler-player-play-filled",viewBox:"0 0 24 24",...t},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{fill:"currentColor",stroke:"none",d:"M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4z"})),g=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:44,height:44,fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,className:"icon icon-tabler icon-tabler-player-pause",viewBox:"0 0 24 24",...t},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM14 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"})),E=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:44,height:44,fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,className:"icon icon-tabler icon-tabler-player-pause-filled",viewBox:"0 0 24 24",...t},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{fill:"currentColor",stroke:"none",d:"M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM17 4h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"})),a=Symbol("play"),i=Symbol("playHover"),s=Symbol("pause"),u=Symbol("pauseHover"),z=({className:t,onClick:c})=>{const[r,n]=e.useState(s),o=e.useMemo(()=>r===a||r===i,[r]),m={[a]:w,[i]:y,[s]:g,[u]:E}[r],d=e.useCallback(()=>{k.set(!o),h.set(!o),n(o?s:a),c?.()},[c,o]);return e.useEffect(()=>{h.subscribe(l=>{n(l?s:a)})},[]),p.jsx("div",{onClick:d,onKeyDown:l=>l.key==="Enter"&&n(o?s:a),onMouseEnter:()=>n(o?i:u),onMouseLeave:()=>n(o?a:s),className:v.iconContainer,children:p.jsx(m,{width:30})})};export{z as default};