(this["webpackJsonpuilib-react-admin"]=this["webpackJsonpuilib-react-admin"]||[]).push([[36],{1347:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(878),o=a(794),c=a(287),i=a(795),s=a(838),l=a(839),b=a(815),d=a(808),j=a(975),u=a(842),p=a(40),O=a(834),m=a(870),h=a(29),f=a(953),x=a(895),v=a(13),C=a(912),g=a(162),P=a(812),M=a(1361),y=a(143),k=a(288),w=a(16),L=a(0),V=Object(v.a)(C.a)((function(){return{justifyContent:"flex-end","& .MuiAvatarGroup-avatar":{width:25,height:25,fontSize:12}}})),D=function(e){var t=e.handleProjectMoreOpen,a=Object(w.m)();return Object(L.jsxs)(l.a,{sx:{padding:"1rem 1.5rem"},children:[Object(L.jsxs)(g.a,{sx:{cursor:"pointer"},onClick:function(){return a("/dashboards/project-details")},children:[Object(L.jsxs)(k.a,{children:[Object(L.jsx)(h.c,{children:"Uko Dashboard"}),Object(L.jsx)(P.a,{sx:{padding:0},onClick:t,children:Object(L.jsx)(x.a,{})})]}),Object(L.jsx)(p.a,{alignItems:"center",marginTop:1,children:Object(L.jsx)(h.h,{fontWeight:500,color:"text.secondary",children:"Due on Nov 3"})}),Object(L.jsx)(h.g,{mt:1,mb:3,fontSize:12,fontWeight:500,lineHeight:1.8,color:"text.secondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam"})]}),Object(L.jsxs)(k.a,{py:1,children:[Object(L.jsx)(h.g,{fontWeight:600,children:"Project Progress"}),Object(L.jsx)(h.g,{fontWeight:600,children:"32%"})]}),Object(L.jsx)(M.a,{variant:"determinate",value:32}),Object(L.jsxs)(k.a,{pt:3,children:[Object(L.jsxs)(p.a,{alignItems:"center",children:[Object(L.jsxs)(V,{children:[Object(L.jsx)(y.a,{alt:"Remy Sharp",src:"/static/avatar/001-man.svg"}),Object(L.jsx)(y.a,{alt:"Travis Howard",src:"/static/avatar/002-girl.svg"}),Object(L.jsx)(y.a,{alt:"Cindy Baker",src:"/static/avatar/003-boy.svg"})]}),Object(L.jsx)(h.h,{ml:1,children:"+ 15 people"})]}),Object(L.jsx)(d.a,{variant:"dashed",children:Object(L.jsx)(n.a,{fontSize:"small",sx:{color:"grey.600"}})})]})]})},T=a(802),H=function(e){var t=e.tabTitle,a=e.amount,r=e.badgeColor;return Object(L.jsx)(T.a,{variant:"dot",overlap:"circular",badgeContent:"",color:r||"default",children:Object(L.jsxs)(g.a,{sx:{color:"text.secondary"},children:[Object(L.jsx)(h.b,{children:a}),Object(L.jsx)(h.e,{marginBottom:1,children:t})]})})},S=a(1),R=Object(j.a)(o.a)((function(e){return{"& .MuiTabs-flexContainer":{justifyContent:"space-between","& .Mui-selected":{"& h2, & h5":{color:e.theme.palette.primary.main}}}}})),I=[{title:"In Progress",amount:45,badgeColor:"primary"},{title:"Upcoming",amount:3,badgeColor:"warning"},{title:"Blocked",amount:2,badgeColor:"error"},{title:"Projects Total",amount:141,badgeColor:"success"}];t.default=function(){var e=Object(S.useState)("0"),t=Object(r.a)(e,2),a=t[0],o=t[1],j=Object(S.useState)(!1),x=Object(r.a)(j,2),v=x[0],C=x[1],g=Object(S.useState)(null),P=Object(r.a)(g,2),M=P[0],y=P[1],k=Object(i.a)((function(e){return e.breakpoints.down("sm")})),w=function(e){y(e.currentTarget)},V=["in-progress","upcoming","blocked","projects-total","in-progress","upcoming","blocked","projects-total","upcoming"].filter((function(e){return"0"===a||"upcoming"===e&&"1"===a||"blocked"===e&&"2"===a||"projects-total"===e&&"2"===a}));return Object(L.jsx)(u.a,{pt:2,pb:4,children:Object(L.jsxs)(c.a,{value:a,children:[Object(L.jsxs)(s.a,{container:!0,spacing:3,children:[Object(L.jsx)(s.a,{item:!0,xs:12,md:5,children:Object(L.jsx)(l.a,{sx:{padding:".1rem 2rem",height:"100%"},children:Object(L.jsx)(p.a,{height:"100%",alignItems:"center",justifyContent:"space-between",children:Object(L.jsx)(h.b,{children:"UKo Projects"})})})}),Object(L.jsx)(s.a,{item:!0,xs:12,md:7,children:Object(L.jsx)(l.a,{sx:{padding:"1.5rem"},children:Object(L.jsx)(R,{onChange:function(e,t){o(t)},variant:"scrollable",children:I.map((function(e,t){return Object(L.jsx)(b.a,{disableRipple:!0,value:"".concat(t),label:Object(L.jsx)(H,{tabTitle:e.title,amount:e.amount,badgeColor:e.badgeColor})},e.title)}))})})}),Object(L.jsx)(s.a,{item:!0,xs:12,children:Object(L.jsxs)(p.a,{justifyContent:"space-between",flexWrap:"wrap",children:[Object(L.jsx)(O.a,{bordered:!1,placeholder:"Find Projects",sx:{maxWidth:k?"100%":270,marginBottom:k?1:0}}),Object(L.jsx)(d.a,{fullWidth:k,variant:"contained",startIcon:Object(L.jsx)(n.a,{}),onClick:function(){return C(!0)},sx:{fontSize:12},children:"Create a project"}),Object(L.jsx)(f.a,{open:v,setOpen:C})]})})]}),Object(L.jsxs)(s.a,{container:!0,spacing:3,pt:4,children:[V.map((function(e,t){return Object(L.jsx)(s.a,{item:!0,xs:12,sm:6,lg:4,children:Object(L.jsx)(D,{handleProjectMoreOpen:w})},t)})),Object(L.jsx)(m.a,{anchorEl:M,handleMoreClose:function(){return y(null)}})]})]})})}},830:function(e,t,a){"use strict";var r=a(3),n=a(13),o=a(1340),c=(a(1),a(0)),i=Object(n.a)(o.a)((function(e){var t=e.theme;return{"& .MuiOutlinedInput-input":{fontWeight:500,height:"0.em"},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"8px",borderColor:t.palette.action.disabled},"& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.action.hover,width:"80%"},"& .MuiInputLabel-root":{fontWeight:500,color:t.palette.text.disabled},"& .MuiInputLabel-root.Mui-focused":{fontWeight:600},"& .MuiSvgIcon-root":{color:t.palette.text.disabled}}}));t.a=function(e){return Object(c.jsx)(i,Object(r.a)({},e))}},831:function(e,t,a){"use strict";var r=a(3),n=a(47),o=a(162),c=a(0),i=["children"];t.a=function(e){var t=e.children,a=Object(n.a)(e,i);return Object(c.jsx)(o.a,Object(r.a)(Object(r.a)({display:"flex",alignItems:"center",justifyContent:"center"},a),{},{children:t}))}},834:function(e,t,a){"use strict";var r=a(3),n=a(4),o=a(13),c=a(756),i=a(166),s=a(0),l=Object(o.a)(c.c)((function(e){var t,a=e.theme,r=e.bordered;return t={height:45,fontSize:12,width:"100%",maxWidth:350,fontWeight:600,padding:"0 1rem",borderRadius:"8px",color:a.palette.text.primary,backgroundColor:a.palette.background.paper,border:r?"1px solid ".concat(a.palette.action.disabled):"none"},Object(n.a)(t,a.breakpoints.down(500),{maxWidth:"100%"}),Object(n.a)(t,"::placeholder",{color:a.palette.text.disabled}),t}));t.a=function(e){var t=e.icon_style,a=void 0===t?{}:t,n=e.bordered,o=void 0===n||n;return Object(s.jsx)(l,Object(r.a)({bordered:o,startAdornment:Object(s.jsx)(i.a,{sx:Object(r.a)({fontSize:18,marginRight:1,color:"text.disabled"},a)})},e))}},842:function(e,t,a){"use strict";var r=a(446),n=Object(r.a)();t.a=n},845:function(e,t,a){"use strict";var r=a(3),n=a(47),o=a(13),c=a(162),i=a(803),s=a(43),l=a(0),b=["children","open","handleClose"],d=Object(o.a)(c.a)((function(e){var t=e.theme;return{top:"50%",left:"50%",padding:24,maxWidth:680,width:"100%",borderRadius:"4px",position:"absolute",transform:"translate(-50%, -50%)",backgroundColor:Object(s.b)(t)?"#fff":t.palette.background.default}}));t.a=function(e){var t=e.children,a=e.open,o=e.handleClose,c=Object(n.a)(e,b);return Object(l.jsx)(i.a,{open:a,onClose:o,children:Object(l.jsx)(d,Object(r.a)(Object(r.a)({},c),{},{children:t}))})}},855:function(e,t,a){"use strict";var r=a(3),n=a(163),o=a(0);t.a=function(e){return Object(o.jsxs)(n.a,Object(r.a)(Object(r.a)({viewBox:"0 0 10 12"},e),{},{children:[Object(o.jsx)("path",{d:"M4.23535 5.64706H4.94123V9.52942H4.23535V5.64706Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M2.82349 5.64706H3.52937V9.52942H2.82349V5.64706Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M5.64722 5.64706H6.3531V9.52942H5.64722V5.64706Z",fill:"currentColor"}),Object(o.jsx)("path",{d:"M9.17647 1.41176H6.35294V1.05882C6.35294 0.474988 5.87798 0 5.29412 0H3.88235C3.29849 0 2.82353 0.474988 2.82353 1.05882V1.41176H0V3.52941H0.735247L1.38428 10.994C1.41231 11.5588 1.87518 12 2.44179 12H6.73466C7.30127 12 7.76414 11.5588 7.79217 10.994L8.44123 3.52941H9.17647V1.41176ZM3.52941 1.05882C3.52941 0.864212 3.68774 0.705882 3.88235 0.705882H5.29412C5.48875 0.705882 5.64706 0.864212 5.64706 1.05882V1.41176H3.52941V1.05882ZM0.705882 2.11765H8.47059V2.82353H0.705882V2.11765ZM7.08732 10.9559C7.07941 11.1455 6.92452 11.2941 6.73468 11.2941H2.44179C2.25195 11.2941 2.09706 11.1456 2.08915 10.9559C1.39861 3.00981 1.44584 3.55313 1.44376 3.52941H7.73271C7.73082 3.55071 7.77478 3.04544 7.08732 10.9559Z",fill:"currentColor"})]}))}},857:function(e,t,a){"use strict";var r=a(4),n=a(9),o=a(2),c=a(1),i=a(45),s=a(21),l=a(733),b=a(285),d=a(13),j=a(18),u=a(0),p=["component","direction","spacing","divider","children"];function O(e,t){var a=c.Children.toArray(e).filter(Boolean);return a.reduce((function(e,r,n){return e.push(r),n<a.length-1&&e.push(c.cloneElement(t,{key:"separator-".concat(n)})),e}),[])}var m=Object(d.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,a=e.theme,n=Object(o.a)({display:"flex",flexDirection:"column"},Object(i.b)({theme:a},Object(i.e)({values:t.direction,breakpoints:a.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var c=Object(s.a)(a),l=Object.keys(a.breakpoints.values).reduce((function(e,a){return("object"===typeof t.spacing&&null!=t.spacing[a]||"object"===typeof t.direction&&null!=t.direction[a])&&(e[a]=!0),e}),{}),d=Object(i.e)({values:t.direction,base:l}),j=Object(i.e)({values:t.spacing,base:l});"object"===typeof d&&Object.keys(d).forEach((function(e,t,a){if(!d[e]){var r=t>0?d[a[t-1]]:"column";d[e]=r}}));n=Object(b.a)(n,Object(i.b)({theme:a},j,(function(e,a){return{"& > :not(style) + :not(style)":Object(r.a)({margin:0},"margin".concat((n=a?d[a]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n])),Object(s.c)(c,e))};var n})))}return n=Object(i.c)(a.breakpoints,n)})),h=c.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiStack"}),r=Object(l.a)(a),c=r.component,i=void 0===c?"div":c,s=r.direction,b=void 0===s?"column":s,d=r.spacing,h=void 0===d?0:d,f=r.divider,x=r.children,v=Object(n.a)(r,p),C={direction:b,spacing:h};return Object(u.jsx)(m,Object(o.a)({as:i,ownerState:C,ref:t},v,{children:f?O(x,f):x}))}));t.a=h},861:function(e,t,a){"use strict";var r=a(3),n=a(163),o=a(0);t.a=function(e){return Object(o.jsx)(n.a,Object(r.a)(Object(r.a)({viewBox:"0 0 12 12"},e),{},{children:Object(o.jsx)("path",{d:"M10.6221 0.48305C9.97692 -0.161017 8.93219 -0.161017 8.28705 0.48305L7.70255 1.07081L1.48058 7.29007L1.46735 7.3034C1.46415 7.3066 1.46415 7.31001 1.46074 7.31001C1.45413 7.31993 1.44421 7.32974 1.43771 7.33966C1.43771 7.34297 1.4343 7.34297 1.4343 7.34627C1.42769 7.35619 1.42448 7.3628 1.41777 7.37272C1.41457 7.37603 1.41457 7.37923 1.41126 7.38264C1.40795 7.39256 1.40465 7.39917 1.40124 7.40909C1.40124 7.41229 1.39804 7.41229 1.39804 7.4157L0.0175678 11.5673C-0.0229278 11.6855 0.00785715 11.8164 0.096803 11.9041C0.159303 11.9658 0.2436 12.0003 0.331306 12C0.367153 11.9994 0.40269 11.9938 0.436987 11.9835L4.585 10.5996C4.58821 10.5996 4.58821 10.5996 4.59162 10.5964C4.60205 10.5933 4.61207 10.5888 4.62126 10.583C4.62385 10.5827 4.62612 10.5816 4.62798 10.5798C4.63779 10.5732 4.65102 10.5665 4.66093 10.5599C4.67075 10.5534 4.68077 10.5435 4.69069 10.5368C4.69399 10.5334 4.69719 10.5334 4.69719 10.5302C4.7006 10.5269 4.70721 10.5237 4.71052 10.517L11.517 3.70989C12.161 3.06469 12.161 2.01986 11.517 1.37476L10.6221 0.48305ZM4.47932 9.82336L2.18078 7.5247L7.93375 1.77118L10.2323 4.06984L4.47932 9.82336ZM1.85702 8.1357L3.86507 10.1438L0.849795 11.1479L1.85702 8.1357ZM11.0514 3.24745L10.7013 3.60089L8.40265 1.30203L8.75616 0.948691C9.14283 0.562292 9.76959 0.562292 10.1564 0.948691L11.0546 1.84702C11.4384 2.23548 11.4369 2.86085 11.0514 3.24745Z",fill:"currentColor"})}))}},870:function(e,t,a){"use strict";var r=a(954),n=a(814),o=a(855),c=a(861),i=a(29),s=a(0);t.a=function(e){var t=e.anchorEl,a=e.handleMoreClose;return Object(s.jsxs)(r.a,{anchorEl:t,open:Boolean(t),onClose:a,children:[Object(s.jsxs)(n.a,{onClick:a,sx:{"&:hover":{color:"primary.main"}},children:[Object(s.jsx)(c.a,{sx:{fontSize:14,marginRight:1}}),Object(s.jsx)(i.h,{fontWeight:500,children:"Edit"})]}),Object(s.jsxs)(n.a,{onClick:a,sx:{"&:hover":{color:"primary.main"}},children:[Object(s.jsx)(o.a,{sx:{fontSize:14,marginRight:1}}),Object(s.jsx)(i.h,{fontWeight:500,children:"Remove"})]})]})}},878:function(e,t,a){"use strict";var r=a(74),n=a(0);t.a=Object(r.a)(Object(n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},895:function(e,t,a){"use strict";var r=a(74),n=a(0);t.a=Object(r.a)(Object(n.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz")},912:function(e,t,a){"use strict";var r=a(4),n=a(9),o=a(2),c=a(1),i=(a(291),a(11)),s=a(442),l=a(13),b=a(18),d=a(432),j=a(746),u=a(116),p=a(100);function O(e){return Object(p.a)("MuiAvatarGroup",e)}var m=Object(u.a)("MuiAvatarGroup",["root","avatar"]),h=a(0),f=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],x={small:-16,medium:null},v=Object(l.a)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return Object(o.a)(Object(r.a)({},"& .".concat(m.avatar),t.avatar),t.root)}})((function(e){var t,a=e.theme;return t={},Object(r.a)(t,"& .".concat(d.a.root),{border:"2px solid ".concat((a.vars||a).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(r.a)(t,"display","flex"),Object(r.a)(t,"flexDirection","row-reverse"),t})),C=Object(l.a)(j.a,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})((function(e){var t=e.theme;return{border:"2px solid ".concat((t.vars||t).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),g=c.forwardRef((function(e,t){var a,r=Object(b.a)({props:e,name:"MuiAvatarGroup"}),l=r.children,d=r.className,j=r.component,u=void 0===j?"div":j,p=r.componentsProps,m=void 0===p?{}:p,g=r.max,P=void 0===g?5:g,M=r.slotProps,y=void 0===M?{}:M,k=r.spacing,w=void 0===k?"medium":k,L=r.total,V=r.variant,D=void 0===V?"circular":V,T=Object(n.a)(r,f),H=P<2?2:P,S=Object(o.a)({},r,{max:P,spacing:w,component:u,variant:D}),R=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"]},O,t)}(S),I=c.Children.toArray(l).filter((function(e){return c.isValidElement(e)})),W=L||I.length;W===H&&(H+=1),H=Math.min(W+1,H);var z=Math.min(I.length,H-1),Z=Math.max(W-H,W-z,0),A=w&&void 0!==x[w]?x[w]:-w,B=null!=(a=y.additionalAvatar)?a:m.additionalAvatar;return Object(h.jsxs)(v,Object(o.a)({as:u,ownerState:S,className:Object(i.a)(R.root,d),ref:t},T,{children:[Z?Object(h.jsxs)(C,Object(o.a)({ownerState:S,variant:D},B,{className:Object(i.a)(R.avatar,null==B?void 0:B.className),style:Object(o.a)({marginLeft:A},null==B?void 0:B.style),children:["+",Z]})):null,I.slice(0,z).reverse().map((function(e,t){return c.cloneElement(e,{className:Object(i.a)(e.props.className,R.avatar),style:Object(o.a)({marginLeft:t===z-1?void 0:A},e.props.style),variant:e.props.variant||D})}))]}))}));t.a=g},920:function(e,t,a){"use strict";a.d(t,"a",(function(){return Z}));var r=a(2),n=a(9),o=a(1),c=a(18),i=a(795),s=a(827),l=a(837),b=function(e){return 1===e.length&&"year"===e[0]},d=function(e){return 2===e.length&&-1!==e.indexOf("month")&&-1!==e.indexOf("year")};function j(e,t){var a,n=Object(s.e)(),o=Object(s.a)(),i=Object(c.a)({props:e,name:t}),j=null!=(a=i.views)?a:["year","day"];return Object(r.a)({openTo:"day",disableFuture:!1,disablePast:!1},function(e,t){return b(e)?{inputFormat:t.formats.year}:d(e)?{disableMaskedInput:!0,inputFormat:t.formats.monthAndYear}:{inputFormat:t.formats.keyboardDate}}(j,n),i,{views:j,minDate:Object(l.b)(n,i.minDate,o.minDate),maxDate:Object(l.b)(n,i.maxDate,o.maxDate)})}var u={emptyValue:null,getTodayValue:function(e){return e.date()},parseInput:l.c,areValuesEqual:function(e,t,a){return e.isEqual(t,a)}},p=a(817),O=a(13),m=a(442),h=a(882),f=a(100),x=a(116);function v(e){return Object(f.a)("MuiDatePickerToolbar",e)}Object(x.a)("MuiDatePickerToolbar",["root","title"]);var C=a(0),g=["parsedValue","isLandscape","isMobileKeyboardViewOpen","onChange","toggleMobileKeyboardView","toolbarFormat","toolbarPlaceholder","toolbarTitle","views"],P=Object(O.a)(h.a,{name:"MuiDatePickerToolbar",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),M=Object(O.a)(p.a,{name:"MuiDatePickerToolbar",slot:"Title",overridesResolver:function(e,t){return t.title}})((function(e){var t=e.ownerState;return Object(r.a)({},t.isLandscape&&{margin:"auto 16px auto auto"})})),y=o.forwardRef((function(e,t){var a=Object(c.a)({props:e,name:"MuiDatePickerToolbar"}),i=a.parsedValue,l=a.isLandscape,j=a.isMobileKeyboardViewOpen,u=a.toggleMobileKeyboardView,p=a.toolbarFormat,O=a.toolbarPlaceholder,h=void 0===O?"\u2013\u2013":O,f=a.toolbarTitle,x=a.views,y=Object(n.a)(a,g),k=Object(s.e)(),w=Object(s.b)(),L=function(e){var t=e.classes;return Object(m.a)({root:["root"],title:["title"]},v,t)}(a),V=null!=f?f:w.datePickerDefaultToolbarTitle,D=o.useMemo((function(){return i?p?k.formatByString(i,p):b(x)?k.format(i,"year"):d(x)?k.format(i,"month"):/en/.test(k.getCurrentLocaleCode())?k.format(i,"normalDateWithWeekday"):k.format(i,"normalDate"):h}),[i,p,h,k,x]),T=a;return Object(C.jsx)(P,Object(r.a)({ref:t,toolbarTitle:V,isMobileKeyboardViewOpen:j,toggleMobileKeyboardView:u,isLandscape:l,className:L.root},y,{children:Object(C.jsx)(M,{variant:"h4",align:l?"left":"center",ownerState:T,className:L.title,children:D})}))})),k=a(886),w=a(979),L=a(840),V=a(858),D=a(851),T=["onChange","PopperProps","PaperProps","ToolbarComponent","TransitionComponent","value","components","componentsProps"],H=o.forwardRef((function(e,t){var a=j(e,"MuiDesktopDatePicker"),o=null!==Object(L.a)(a),c=Object(D.a)(a,u),i=c.pickerProps,s=c.inputProps,l=c.wrapperProps,b=a.PopperProps,d=a.PaperProps,p=a.ToolbarComponent,O=void 0===p?y:p,m=a.TransitionComponent,h=a.components,f=a.componentsProps,x=Object(n.a)(a,T),v=Object(r.a)({},s,x,{components:h,componentsProps:f,ref:t,validationError:o});return Object(C.jsx)(k.a,Object(r.a)({},l,{DateInputProps:v,KeyboardDateInputComponent:V.a,PopperProps:b,PaperProps:d,TransitionComponent:m,components:h,componentsProps:f,children:Object(C.jsx)(w.a,Object(r.a)({},i,{autoFocus:!0,toolbarTitle:a.label||a.toolbarTitle,ToolbarComponent:O,DateInputProps:v,components:h,componentsProps:f},x))}))})),S=a(885),R=a(883),I=["ToolbarComponent","value","onChange","components","componentsProps"],W=o.forwardRef((function(e,t){var a=j(e,"MuiMobileDatePicker"),o=null!==Object(L.a)(a),c=Object(D.a)(a,u),i=c.pickerProps,s=c.inputProps,l=c.wrapperProps,b=a.ToolbarComponent,d=void 0===b?y:b,p=a.components,O=a.componentsProps,m=Object(n.a)(a,I),h=Object(r.a)({},s,m,{components:p,componentsProps:O,ref:t,validationError:o});return Object(C.jsx)(S.a,Object(r.a)({},m,l,{DateInputProps:h,PureDateInputComponent:R.a,components:p,componentsProps:O,children:Object(C.jsx)(w.a,Object(r.a)({},i,{autoFocus:!0,toolbarTitle:a.label||a.toolbarTitle,ToolbarComponent:d,DateInputProps:h,components:p,componentsProps:O},m))}))})),z=["desktopModeMediaQuery","DialogProps","PopperProps","TransitionComponent"],Z=o.forwardRef((function(e,t){var a=Object(c.a)({props:e,name:"MuiDatePicker"}),o=a.desktopModeMediaQuery,s=void 0===o?"@media (pointer: fine)":o,l=a.DialogProps,b=a.PopperProps,d=a.TransitionComponent,j=Object(n.a)(a,z);return Object(i.a)(s,{defaultMatches:!0})?Object(C.jsx)(H,Object(r.a)({ref:t,PopperProps:b,TransitionComponent:d},j)):Object(C.jsx)(W,Object(r.a)({ref:t,DialogProps:l},j))}))},922:function(e,t,a){"use strict";var r=a(812),n=a(831),o=a(29),c=a(3),i=a(163),s=a(0),l=function(e){return Object(s.jsxs)(i.a,Object(c.a)(Object(c.a)({viewBox:"0 0 16 15"},e),{},{children:[Object(s.jsx)("path",{d:"M6.0299 5.69554C6.63699 5.69554 7.12914 5.2034 7.12914 4.59631C7.12914 3.98922 6.63699 3.49707 6.0299 3.49707C5.42281 3.49707 4.93066 3.98922 4.93066 4.59631C4.93066 5.2034 5.42281 5.69554 6.0299 5.69554Z",fill:"currentColor"}),Object(s.jsx)("path",{d:"M15.0534 8.64122C14.5344 8.15267 13.8779 7.83206 13.1603 7.74046V2.15267C13.1603 1.55725 12.916 1.0229 12.5344 0.625954C12.1374 0.229008 11.6031 0 11.0076 0H2.15267C1.55725 0 1.0229 0.244275 0.625954 0.625954C0.229008 1.0229 0 1.55725 0 2.15267V9.19084V9.84733V11.2672C0 11.8626 0.244275 12.3969 0.625954 12.7939C1.0229 13.1908 1.55725 13.4198 2.15267 13.4198H10.7176C11.2824 13.8779 11.9847 14.1679 12.7634 14.1679C13.6641 14.1679 14.4733 13.8015 15.0534 13.2214C15.6336 12.6412 16 11.8321 16 10.9313C16 10.0305 15.6336 9.22137 15.0534 8.64122ZM0.80916 2.15267C0.80916 1.78626 0.961832 1.45038 1.20611 1.20611C1.45038 0.961832 1.78626 0.80916 2.15267 0.80916H11.0076C11.374 0.80916 11.7099 0.961832 11.9542 1.20611C12.1985 1.45038 12.3511 1.78626 12.3511 2.15267V6.91603L10.0916 4.67176C9.93893 4.51908 9.67939 4.50382 9.51145 4.67176L6.10687 8.0916L3.80153 5.77099C3.64885 5.61832 3.38931 5.60305 3.22137 5.77099L0.80916 8.21374V2.15267ZM2.1374 12.626V12.6107C1.77099 12.6107 1.43511 12.458 1.19084 12.2137C0.961832 11.9695 0.80916 11.6336 0.80916 11.2672V9.84733V9.35878L3.52672 6.64122L5.83206 8.94656C5.98473 9.09924 6.24427 9.09924 6.41221 8.94656L9.81679 5.52672L12.0458 7.77099C12 7.78626 11.9542 7.80153 11.9084 7.81679C11.8473 7.83206 11.7863 7.84733 11.7099 7.87786C11.6489 7.89313 11.5878 7.92366 11.5267 7.93893C11.4809 7.9542 11.4504 7.96947 11.4046 8C11.3435 8.03053 11.2977 8.0458 11.2519 8.07634C11.1756 8.12214 11.0992 8.16794 11.0229 8.21374C10.9771 8.24428 10.9466 8.25954 10.9008 8.29008C10.8702 8.30534 10.855 8.32061 10.8244 8.33588C10.687 8.42748 10.5649 8.53435 10.458 8.65649C9.87786 9.23664 9.51145 10.0458 9.51145 10.9466C9.51145 11.1756 9.54198 11.3893 9.58779 11.6183C9.60305 11.6794 9.61832 11.7252 9.63359 11.7863C9.67939 11.9389 9.72519 12.0916 9.78626 12.2443V12.2595C9.84733 12.3817 9.9084 12.5191 9.98473 12.626H2.1374ZM14.458 12.6412C14.0153 13.084 13.4198 13.3435 12.7481 13.3435C12.1069 13.3435 11.5114 13.084 11.084 12.6718C11.0229 12.6107 10.9618 12.5344 10.9008 12.4733C10.855 12.4275 10.8092 12.3664 10.7634 12.3206C10.7023 12.2443 10.6565 12.1527 10.6107 12.0611C10.5802 12 10.5496 11.9542 10.5191 11.8931C10.4886 11.8168 10.458 11.7252 10.4427 11.6336C10.4275 11.5725 10.3969 11.4962 10.3817 11.4351C10.3511 11.2824 10.3359 11.1145 10.3359 10.9466C10.3359 10.2748 10.6107 9.67939 11.0382 9.23664C11.4809 8.79389 12.0763 8.53435 12.7481 8.53435C13.4198 8.53435 14.0153 8.80916 14.458 9.23664C14.9008 9.66412 15.1603 10.2748 15.1603 10.9466C15.1603 11.6031 14.8855 12.1985 14.458 12.6412Z",fill:"currentColor"}),Object(s.jsx)("path",{d:"M14.0758 10.5193H13.1445V9.588C13.1445 9.35899 12.9613 9.17578 12.7323 9.17578C12.5033 9.17578 12.3201 9.35899 12.3201 9.588V10.5193H11.3888C11.1598 10.5193 10.9766 10.7025 10.9766 10.9315C10.9766 11.1605 11.1598 11.3437 11.3888 11.3437H12.3201V12.275C12.3201 12.504 12.5033 12.6872 12.7323 12.6872C12.9613 12.6872 13.1445 12.504 13.1445 12.275V11.3437H14.0758C14.3048 11.3437 14.488 11.1605 14.488 10.9315C14.488 10.7025 14.3048 10.5193 14.0758 10.5193Z",fill:"currentColor"})]}))};a(1),t.a=function(e){var t=e.handleOnChange;return Object(s.jsxs)("label",{htmlFor:"icon-button-file",children:[Object(s.jsx)("input",{type:"file",accept:"image/*",id:"icon-button-file",style:{display:"none"},onChange:t}),Object(s.jsx)(r.a,{disableRipple:!0,component:"span",sx:{padding:0,display:"block"},children:Object(s.jsxs)(n.a,{gap:.5,sx:{minHeight:40,borderRadius:"8px",backgroundColor:"divider"},children:[Object(s.jsx)(l,{sx:{fontSize:18,color:"text.disabled"}}),Object(s.jsx)(o.h,{color:"text.disabled",children:"Choose a file"})]})})]})}},953:function(e,t,a){"use strict";var r=a(3),n=a(10),o=a(4),c=a(878),i=a(920),s=a(13),l=a(162),b=a(857),d=a(808),j=a(746),u=a(845),p=a(40),O=a(830),m=a(922),h=a(29),f=a(1),x=a(0),v=Object(s.a)(u.a)((function(e){var t=e.theme;return Object(o.a)({width:400},t.breakpoints.down(400),{width:300})}));t.a=function(e){var t=e.open,a=e.setOpen,o=Object(f.useState)(new Date),s=Object(n.a)(o,2),u=s[0],C=s[1];return Object(x.jsxs)(v,{open:t,handleClose:function(){return a(!1)},children:[Object(x.jsxs)(l.a,{mb:2,children:[Object(x.jsx)(h.f,{mb:1,children:"Project Name"}),Object(x.jsx)(O.a,{fullWidth:!0,size:"small",placeholder:"Project name"})]}),Object(x.jsxs)(l.a,{mb:2,children:[Object(x.jsx)(h.f,{mb:1,children:"Deadline"}),Object(x.jsx)(i.a,{value:u,onChange:function(e){return C(e)},renderInput:function(e){return Object(x.jsx)(O.a,Object(r.a)({fullWidth:!0,size:"small",inputProps:{placeholder:"Deadline Date"}},e))}})]}),Object(x.jsxs)(l.a,{mb:2,children:[Object(x.jsx)(h.f,{mb:1,children:"Description"}),Object(x.jsx)(O.a,{rows:2,fullWidth:!0,multiline:!0,size:"small",name:"description",placeholder:"Description"})]}),Object(x.jsxs)(l.a,{mb:2,children:[Object(x.jsx)(h.f,{mb:1,children:"Add Picture"}),Object(x.jsx)(m.a,{handleOnChange:function(){}})]}),Object(x.jsxs)(l.a,{my:1,children:[Object(x.jsx)(h.f,{mb:1,children:"Team"}),Object(x.jsxs)(b.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(x.jsx)(d.a,{variant:"dashed",children:Object(x.jsx)(c.a,{fontSize:"small",sx:{color:"grey.600"}})}),Object(x.jsx)(j.a,{alt:"Remy Sharp",src:"/static/user/user-7.png"}),Object(x.jsx)(j.a,{alt:"Travis Howard",src:"/static/user/user-6.png"}),Object(x.jsx)(j.a,{alt:"Cindy Baker",src:"/static/user/user-5.png"})]})]}),Object(x.jsxs)(p.a,{mt:4,gap:2,children:[Object(x.jsx)(d.a,{variant:"contained",fullWidth:!0,children:"Create"}),Object(x.jsx)(d.a,{variant:"outlined",fullWidth:!0,onClick:function(){return a(!1)},children:"Cancel"})]})]})}},975:function(e,t,a){"use strict";var r=a(227),n=Object(r.a)();t.a=n}}]);
//# sourceMappingURL=36.ed20e7a8.chunk.js.map