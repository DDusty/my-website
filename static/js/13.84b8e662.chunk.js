(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[13],{491:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(3),n=s(490),c=s(456),r=s.n(c),l=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],o={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(l),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},d=Object(a.a)({},o),b={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(l),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"".concat(e)}}}},j=([].concat(l),s(458)),h=s(27),u=s(2),x={position:"absolute",zIndex:"1"},f={position:"absolute",zIndex:"1",right:"0",top:"-2px"},m=function(e){var t=e.title,s=e.series,c=e.width,l=e.height,m=e.xAxis,v=e.customOptions,O=e.card,p=e.type,g=e.extra,w=e.direction,y=e.bodyClass,z=function(e){switch(e){case"line":default:return o;case"bar":return b;case"area":return d}}(p),N=window.innerWidth<768,I=function(){if(A.current){var e,t=A.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(N?0:null===(e=k.current)||void 0===e?void 0:e.offsetWidth,"px"),w===h.b&&(t.style.right="auto",t.style.left="0"),N&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};Object(i.useEffect)((function(){I()}),[]);var k=Object(i.useRef)(null),A=Object(i.useRef)();z.xaxis.categories=m,v&&(z=Object(a.a)(Object(a.a)({},z),v));var P=function(){return Object(u.jsx)(j.a,{onResize:void setTimeout((function(){I()}),600),children:Object(u.jsx)("div",{style:w===h.b?{direction:"ltr"}:{},className:"chartRef",ref:A,children:Object(u.jsx)(r.a,{options:z,type:p,series:s,width:c,height:l})})})};return Object(u.jsx)(u.Fragment,{children:O?Object(u.jsx)(n.a,{children:Object(u.jsxs)("div",{className:"position-relative ".concat(y),children:[Object(u.jsx)("div",{style:N?{}:x,children:t})&&Object(u.jsx)("h4",{className:"font-weight-bold",style:N?{}:x,children:t}),g&&Object(u.jsx)("div",{ref:k,style:N?{}:f,children:g}),P()]})}):P()})};m.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};var v=m,O=s(492),p=s(161),g=function(e){var t;switch(e.size){case"lg":t=Object(u.jsx)("h1",{className:"mb-0 font-weight-bold",children:e.value});break;case"md":t=Object(u.jsx)("h2",{className:"mb-0 font-weight-bold",children:e.value});break;default:t=Object(u.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.value})}return t},w=function(e){var t=e.size,s=e.value,i=e.title;return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{value:s,size:t}),Object(u.jsx)("p",{className:"mb-0 text-muted",children:i})]})};w.defaultProps={size:"md"};var y=w,z=function(e){var t=e.size,s=e.value,i=e.title,c=e.icon,r=e.color,l=e.avatarSize,o=e.vertical,d={size:t,value:s,title:i};return Object(u.jsx)(n.a,{children:Object(u.jsxs)(p.a,{alignItems:"center",flexDirection:o?"column":"row",children:[Object(u.jsx)(O.a,{size:l,shape:"square",icon:c,className:"ant-avatar-".concat(r)}),Object(u.jsx)("div",{className:o?"mt-3 text-center":"ml-3",children:Object(u.jsx)(y,Object(a.a)({},d))})]})})};z.defaultProps={avatarSize:50,vertical:!1};var N=s(494),I=s(495),k=function(e){var t=e.title,s=e.value,i=e.status,a=e.subtitle,c=e.prefix;return Object(u.jsxs)(n.a,{children:[t&&Object(u.jsx)("h4",{className:"mb-0",children:t}),Object(u.jsxs)("div",{className:"".concat(c?"d-flex":""," ").concat(t?"mt-3":""),children:[c?Object(u.jsx)("div",{className:"mr-2",children:c}):null,Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)("h1",{className:"mb-0 font-weight-bold",children:s}),i?Object(u.jsxs)("span",{className:"font-size-md font-weight-bold ml-3 ".concat(0!==i&&i>0?"text-success":"text-danger"),children:[i,0!==i&&i>0?Object(u.jsx)(N.a,{}):Object(u.jsx)(I.a,{})]}):null]}),a&&Object(u.jsx)("div",{className:"text-gray-light mt-1",children:a})]})]})]})},A=s(13),P=s(15),R=s(17),S=s(18),C=s(459),D=s.n(C),F=(i.Component,s(442)),W=s(443);t.default=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)(F.a,{gutter:[16,16],children:[Object(u.jsx)(W.a,{span:8,children:Object(u.jsx)(k,{title:"Inkomen",value:3289,status:3114,subtitle:"Deze maand"})}),Object(u.jsx)(W.a,{span:8,children:Object(u.jsx)(k,{title:"Aantal bestellingen",value:19,status:-123,subtitle:"Deze maand"})})]}),Object(u.jsx)(v,{})]})}}}]);
//# sourceMappingURL=13.84b8e662.chunk.js.map