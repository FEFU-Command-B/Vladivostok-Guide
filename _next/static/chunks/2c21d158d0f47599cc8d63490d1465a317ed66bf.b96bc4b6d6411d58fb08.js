(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/h46":function(e,t,a){a("cHUd")("Map")},"2wwy":function(e,t,a){e.exports=a("nhzr")},CH2o:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),s=a("AT/M"),c=a("Tit0"),l=a("hfKm"),u=a.n(l);function d(e,t,a){return t in e?u()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=a("q1tI"),p=a.n(f),h=a("j+tm"),m=(a("UeDS"),a("YFqc"),a("2wwy")),b=a.n(m),v=a("ln6h"),g=a.n(v),y=a("UXZV"),O=a.n(y);function j(){return(j=O.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k=a("iuhU"),C=a("wx14"),w=a("Ff2n"),x=(a("17x9"),p.a.createContext());var E=x;function N(){return p.a.useContext(E)}var L=a("H2TA"),R=a("ye/S"),S=a("VD++"),q=a("NqtD"),z=p.a.forwardRef((function(e,t){var a=e.edge,n=void 0!==a&&a,r=e.children,o=e.classes,i=e.className,s=e.color,c=void 0===s?"default":s,l=e.disabled,u=void 0!==l&&l,d=e.disableFocusRipple,f=void 0!==d&&d,h=e.size,m=void 0===h?"medium":h,b=Object(w.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return p.a.createElement(S.a,Object(C.a)({className:Object(k.a)(o.root,i,"default"!==c&&o["color".concat(Object(q.a)(c))],u&&o.disabled,{small:o["size".concat(Object(q.a)(m))]}[m],{start:o.edgeStart,end:o.edgeEnd}[n]),centerRipple:!0,focusRipple:!f,disabled:u,ref:t},b),p.a.createElement("span",{className:o.label},r))})),D=Object(L.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(R.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(R.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(R.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(z),F=p.a.forwardRef((function(e,t){var a=e.autoFocus,n=e.checked,r=e.checkedIcon,o=e.classes,i=e.className,s=e.defaultChecked,c=e.disabled,l=e.icon,u=e.id,d=e.inputProps,f=e.inputRef,h=e.name,m=e.onBlur,b=e.onChange,v=e.onFocus,g=e.readOnly,y=e.required,O=e.tabIndex,j=e.type,x=e.value,E=Object(w.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),L=p.a.useRef(null!=n).current,R=p.a.useState(Boolean(s)),S=R[0],q=R[1],z=L?n:S,F=N(),M=c;F&&"undefined"===typeof M&&(M=F.disabled);var B="checkbox"===j||"radio"===j;return p.a.createElement(D,Object(C.a)({component:"span",className:Object(k.a)(o.root,i,z&&o.checked,M&&o.disabled),disabled:M,tabIndex:null,role:void 0,onFocus:function(e){v&&v(e),F&&F.onFocus&&F.onFocus(e)},onBlur:function(e){m&&m(e),F&&F.onBlur&&F.onBlur(e)},ref:t},E),p.a.createElement("input",Object(C.a)({autoFocus:a,checked:n,defaultChecked:s,className:o.input,disabled:M,id:B&&u,name:h,onChange:function(e){var t=e.target.checked;L||q(t),b&&b(e,t)},readOnly:g,ref:f,required:y,tabIndex:O,type:j,value:x},d)),z?r:l)})),M=Object(L.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(F),B=a("As0B"),I=Object(B.a)(p.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),P=Object(B.a)(p.a.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var U=Object(L.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return p.a.createElement("div",{className:Object(k.a)(a.root,t&&a.checked)},p.a.createElement(I,{fontSize:n}),p.a.createElement(P,{fontSize:n,className:a.layer}))}));var T=p.a.createContext();var V=p.a.createElement(U,{checked:!0}),W=p.a.createElement(U,null),$=p.a.forwardRef((function(e,t){var a=e.checked,n=e.classes,r=e.color,o=void 0===r?"secondary":r,i=e.disabled,s=void 0!==i&&i,c=e.name,l=e.onChange,u=e.size,d=void 0===u?"medium":u,f=Object(w.a)(e,["checked","classes","color","disabled","name","onChange","size"]),h=p.a.useContext(T),m=a,b=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),(function(){}))}(l,h&&h.onChange),v=c;return h&&("undefined"===typeof m&&(m=h.value===e.value),"undefined"===typeof v&&(v=h.name)),p.a.createElement(M,Object(C.a)({color:o,type:"radio",icon:p.a.cloneElement(W,{fontSize:"small"===d?"small":"default"}),checkedIcon:p.a.cloneElement(V,{fontSize:"small"===d?"small":"default"}),classes:{root:Object(k.a)(n.root,n["color".concat(Object(q.a)(o))]),checked:n.checked,disabled:n.disabled},name:v,checked:m,onChange:b,ref:t,disabled:s},f))})),A=Object(L.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(R.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(R.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})($),H=p.a.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.row,o=void 0!==r&&r,i=Object(w.a)(e,["classes","className","row"]);return p.a.createElement("div",Object(C.a)({className:Object(k.a)(a.root,n,o&&a.row),ref:t},i))})),Z=Object(L.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(H),G=a("bfFb"),_=p.a.forwardRef((function(e,t){var a=e.actions,n=e.children,r=e.name,o=e.value,i=e.onChange,s=Object(w.a)(e,["actions","children","name","value","onChange"]),c=p.a.useRef(null),l=p.a.useRef(null!=o).current,u=p.a.useState(e.defaultValue),d=u[0],f=u[1],h=l?o:d;p.a.useImperativeHandle(a,(function(){return{focus:function(){var e=c.current.querySelector("input:not(:disabled):checked");e||(e=c.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var m=Object(G.a)(t,c);return p.a.createElement(T.Provider,{value:{name:r,onChange:function(e){l||f(e.target.value),i&&i(e,e.target.value)},value:h}},p.a.createElement(Z,Object(C.a)({role:"radiogroup",ref:m},s),n))})),X=a("ofer"),Q=p.a.forwardRef((function(e,t){e.checked;var a=e.classes,n=e.className,r=e.control,o=e.disabled,i=(e.inputRef,e.label),s=e.labelPlacement,c=void 0===s?"end":s,l=(e.name,e.onChange,e.value,Object(w.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),u=N(),d=o;"undefined"===typeof d&&"undefined"!==typeof r.props.disabled&&(d=r.props.disabled),"undefined"===typeof d&&u&&(d=u.disabled);var f={disabled:d};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof r.props[t]&&"undefined"!==typeof e[t]&&(f[t]=e[t])})),p.a.createElement("label",Object(C.a)({className:Object(k.a)(a.root,n,"end"!==c&&a["labelPlacement".concat(Object(q.a)(c))],d&&a.disabled),ref:t},l),p.a.cloneElement(r,f),p.a.createElement(X.a,{component:"span",className:Object(k.a)(a.label,d&&a.disabled)},i))})),J=Object(L.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(Q);function K(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function Y(e,t){return p.a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}var ee=p.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,o=e.color,i=void 0===o?"primary":o,s=e.component,c=void 0===s?"div":s,l=e.disabled,u=void 0!==l&&l,d=e.error,f=void 0!==d&&d,h=e.fullWidth,m=void 0!==h&&h,b=e.hiddenLabel,v=void 0!==b&&b,g=e.margin,y=void 0===g?"none":g,O=e.required,j=void 0!==O&&O,x=e.size,N=e.variant,L=void 0===N?"standard":N,R=Object(w.a)(e,["children","classes","className","color","component","disabled","error","fullWidth","hiddenLabel","margin","required","size","variant"]),S=p.a.useState((function(){var e=!1;return a&&p.a.Children.forEach(a,(function(t){if(Y(t,["Input","Select"])){var a=Y(t,["Select"])?t.props.input:t;a&&a.props.startAdornment&&(e=!0)}})),e})),z=S[0],D=S[1],F=p.a.useState((function(){var e=!1;return a&&p.a.Children.forEach(a,(function(t){Y(t,["Input","Select"])&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(K(e.value)&&""!==e.value||t&&K(e.defaultValue)&&""!==e.defaultValue)}(t.props,!0)&&(e=!0)})),e})),M=F[0],B=F[1],I=p.a.useState(!1),P=I[0],U=I[1];u&&P&&U(!1);var T=p.a.useCallback((function(){B(!0)}),[]),V={adornedStart:z,setAdornedStart:D,color:i,disabled:u,error:f,filled:M,focused:P,hiddenLabel:v,margin:("small"===x?"dense":void 0)||y,onBlur:function(){U(!1)},onEmpty:p.a.useCallback((function(){B(!1)}),[]),onFilled:T,onFocus:function(){U(!0)},registerEffect:void 0,required:j,variant:L};return p.a.createElement(E.Provider,{value:V},p.a.createElement(c,Object(C.a)({className:Object(k.a)(n.root,r,"none"!==y&&n["margin".concat(Object(q.a)(y))],m&&n.fullWidth),ref:t},R),a))})),te=Object(L.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(ee);var ae=p.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,o=(e.color,e.component),i=void 0===o?"label":o,s=(e.disabled,e.error,e.filled,e.focused,e.required,Object(w.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),c=function(e){var t=e.props,a=e.states,n=e.muiFormControl;return a.reduce((function(e,a){return e[a]=t[a],n&&"undefined"===typeof t[a]&&(e[a]=n[a]),e}),{})}({props:e,muiFormControl:N(),states:["color","required","focused","disabled","error","filled"]});return p.a.createElement(i,Object(C.a)({className:Object(k.a)(n.root,n["color".concat(Object(q.a)(c.color||"primary"))],r,c.disabled&&n.disabled,c.error&&n.error,c.filled&&n.filled,c.focused&&n.focused,c.required&&n.required),ref:t},s),a,c.required&&p.a.createElement("span",{className:Object(k.a)(n.asterisk,c.error&&n.error)},"\u2009","*"))})),ne=Object(L.a)((function(e){return{root:Object(C.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(ae),re=a("vcXL"),oe=a.n(re),ie=a("Z3vd"),se=p.a.createElement;function ce(e){return se(A,j({disableRipple:!0,color:"default"},e))}var le=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={options:"",question:"",value:-1,isButtonDisabled:!0,isLast:!1,isLoaded:!1},a.GetData=a.GetData.bind(Object(s.a)(a)),a.UpdateData=a.UpdateData.bind(Object(s.a)(a)),a.handleChange=a.handleChange.bind(Object(s.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"GetData",value:function(){var e,t,a,n,r,o;return g.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,g.a.awrap(oe()("https://vladikproj.azurewebsites.net/question",{credentials:"include"}));case 2:return e=i.sent,i.next=5,g.a.awrap(e.json());case 5:return t=i.sent,this.setState({options:t.options,question:t.question,value:-1,isButtonDisabled:!0,isLoaded:!0}),i.next=9,g.a.awrap(oe()("https://vladikproj.azurewebsites.net/cookieTest/set/mm",{credentials:"include"}));case 9:return a=i.sent,i.next=12,g.a.awrap(a.json());case 12:return n=i.sent,console.log(n),i.next=16,g.a.awrap(oe()("https://vladikproj.azurewebsites.net/cookieTest/get/mm",{credentials:"include"}));case 16:return r=i.sent,i.next=19,g.a.awrap(r.json());case 19:o=i.sent,console.log(o);case 21:case"end":return i.stop()}}),null,this)}},{key:"UpdateData",value:function(e){var t=this;return g.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isLast){e.next=3;break}return window.location.href="/plan",e.abrupt("return");case 3:oe()("https://vladikproj.azurewebsites.net/question/"+this.state.value).then((function(e){return e.json()})).then((function(e){if(null===e.question)return t.setState({isButtonDisabled:!1,isLast:!0}),void t.props.passVal(!0);t.setState({options:e.options,question:e.question,value:-1,isButtonDisabled:!0})}));case 4:case"end":return e.stop()}}),null,this)}},{key:"handleChange",value:function(e){this.state.isLast||this.setState({value:e.target.value,isButtonDisabled:!1})}},{key:"componentDidMount",value:function(){this.GetData()}},{key:"render",value:function(){return this.state.isLoaded?se(te,{component:"fieldset",value:this.state.value,onChange:this.handleChange,disabled:this.state.isLast},se(ne,{className:"question"},this.state.question),se(_,{defaultValue:"",className:"variants","aria-label":"options",name:"customized-radios"},b()(this.state.options).map((function(e){return se(J,{value:e,control:se(ce,null),label:e})}))),se("div",{className:"right-button_answer"},se(ie.a,{size:"small",color:"primary",onClick:this.UpdateData,disabled:this.state.isButtonDisabled},this.state.isLast?"Go to your personal Route":"Confirm"))):se("div",null)}}]),t}(f.Component),ue=a("R/WZ"),de=a("30+C"),fe=a("oa/T"),pe=p.a.createElement,he=Object(ue.a)({card:{maxWidth:600}}),me=function(e){function t(e){var a;return Object(n.a)(this,t),a=Object(o.a)(this,Object(i.a)(t).call(this,e)),d(Object(s.a)(a),"formRef",p.a.createRef()),a.state={isLast:!1},a.PopLastValue=a.PopLastValue.bind(Object(s.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"PopLastValue",value:function(e){this.props.propsName(e)}},{key:"render",value:function(){return pe(de.a,{className:he.card},pe(fe.a,null,pe(le,{passVal:this.PopLastValue})))}}]),t}(f.Component);a.d(t,"default",(function(){return ve}));var be=p.a.createElement,ve=function(e){function t(e){var a;return Object(n.a)(this,t),a=Object(o.a)(this,Object(i.a)(t).call(this,e)),d(Object(s.a)(a),"formRef",p.a.createRef()),a.state={isLast:!1},a.LastQuestionChange=a.LastQuestionChange.bind(Object(s.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"LastQuestionChange",value:function(e){this.setState({isLast:e})}},{key:"render",value:function(){return be(h.a,null,be("div",{className:"container"},be("div",{className:"left__container"},be("div",{className:"boy"},be("img",{src:"../static/images/Vladik.png"}))),be("div",{className:"center__container"},be("div",{className:"quiz"},be(me,{ref:"quiz",propsName:this.LastQuestionChange})))))}}]),t}(f.Component)},E8gZ:function(e,t,a){var n=a("jmDH"),r=a("w6GO"),o=a("NsO/"),i=a("NV0k").f;e.exports=function(e){return function(t){for(var a,s=o(t),c=r(s),l=c.length,u=0,d=[];l>u;)a=c[u++],n&&!i.call(s,a)||d.push(e?[a,s[a]]:s[a]);return d}}},LX0d:function(e,t,a){e.exports=a("UDep")},UDep:function(e,t,a){a("wgeU"),a("FlQf"),a("bBy9"),a("g33z"),a("XLbu"),a("/h46"),a("dVTT"),e.exports=a("WEpk").Map},XLbu:function(e,t,a){var n=a("Y7ZC");n(n.P+n.R,"Map",{toJSON:a("8iia")("Map")})},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("/HRN"),r=a("WaGi"),o=a("ZDA2"),i=a("/+P4"),s=a("N9n2"),c=a("5Uuq"),l=a("KI45");t.__esModule=!0,t.default=void 0;var u,d=l(a("LX0d")),f=a("QmWs"),p=c(a("q1tI")),h=l(a("nOHt")),m=a("g/15");function b(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var v=new d.default,g=window.IntersectionObserver,y={};function O(){return u||(g?u=new g((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){function t(e){var a;return n(this,t),(a=o(this,i(t).call(this,e))).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,a=null,n=null;return function(r,o){if(n&&r===t&&o===a)return n;var i=e(r,o);return t=r,a=o,n=i,i}}((function(e,t){return{href:b(e),as:t?b(t):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,s=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),a=(0,f.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(i)){var c=window.location.pathname;i=(0,f.resolve)(c,i),s=s?(0,f.resolve)(c,s):i,e.preventDefault();var l=a.props.scroll;null==l&&(l=s.indexOf("#")<0),h.default[a.props.replace?"replace":"push"](i,s,{shallow:a.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return s(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,f.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,a=y[this.getHref()];this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),a||(this.cleanUpListeners=function(e,t){var a=O();return a?(a.observe(e),v.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();h.default.prefetch(e),y[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||n),p.default.cloneElement(o,i)}}]),t}(p.Component);t.default=j},dVTT:function(e,t,a){a("aPfg")("Map")},fW1p:function(e,t,a){var n=a("Y7ZC"),r=a("E8gZ")(!1);n(n.S,"Object",{values:function(e){return r(e)}})},g33z:function(e,t,a){"use strict";var n=a("Wu5q"),r=a("n3ko");e.exports=a("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=n.getEntry(r(this,"Map"),e);return t&&t.v},set:function(e,t){return n.def(r(this,"Map"),0===e?0:e,t)}},n,!0)},nhzr:function(e,t,a){a("fW1p"),e.exports=a("WEpk").Object.values},vcXL:function(e,t,a){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}}]);