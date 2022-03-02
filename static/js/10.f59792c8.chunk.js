(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[10],{438:function(e,t,s){"use strict";var a=s(439),r=s.n(a),n=s(36),i=s(65).a(),c=s(31),o=s(251),l=r.a.create({baseURL:n.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(c.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(i.push(u),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(c.b),i.push(u),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var d=l,m={login:function(e){return d({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return d({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=m},445:function(e,t,s){"use strict";var a=s(7),r=s(0),n=s(38),i=s(481),c=s(496),o=s(418),l=s(493),u=s(419),d=s(114),m=s(56),j=s(42),h=s(440),g=s(438),b=s(2),p={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,s){return s&&t("password")!==s?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},f={showAuthMessage:m.c,hideAuthMessage:m.b,showLoading:m.d,authenticated:m.a};t.a=Object(n.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),f)((function(e){var t=e.showLoading,s=e.token,n=e.loading,f=e.redirect,x=e.message,O=e.showMessage,w=e.hideAuthMessage,v=e.authenticated,y=e.allowRedirect,k=o.a.useForm(),P=Object(a.a)(k,1)[0],F=Object(j.g)();return Object(r.useEffect)((function(){null!==s&&y&&F.push(f),O&&setTimeout((function(){w()}),3e3)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(b.jsx)(l.a,{type:"error",showIcon:!0,message:x})}),Object(b.jsxs)(o.a,{form:P,layout:"vertical",name:"register-form",onFinish:function(){P.validateFields().then((function(e){t();g.a.signUp(e).then((function(e){v("fakeToken")})).then((function(e){Object(m.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(b.jsx)(o.a.Item,{name:"email",label:"Email",rules:p.email,hasFeedback:!0,children:Object(b.jsx)(u.a,{prefix:Object(b.jsx)(i.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,children:Object(b.jsx)(u.a.Password,{prefix:Object(b.jsx)(c.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{name:"confirm",label:"ConfirmPassword",rules:p.confirm,hasFeedback:!0,children:Object(b.jsx)(u.a.Password,{prefix:Object(b.jsx)(c.a,{className:"text-primary"})})}),Object(b.jsx)(o.a.Item,{children:Object(b.jsx)(d.a,{type:"primary",htmlType:"submit",block:!0,loading:n,children:"Sign Up"})})]})]})}))},485:function(e,t,s){"use strict";s.r(t);var a=s(3),r=(s(0),s(445)),n=s(442),i=s(443),c=s(490),o=s(38),l=s(2),u={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(l.jsx)("div",{className:"h-100",style:u,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(n.a,{justify:"center",children:Object(l.jsx)(i.a,{xs:20,sm:20,md:20,lg:7,children:Object(l.jsx)(c.a,{children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===t?"logo.png":"logo-white.png"),alt:""}),Object(l.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(l.jsx)(n.a,{justify:"center",children:Object(l.jsx)(i.a,{xs:24,sm:24,md:20,lg:20,children:Object(l.jsx)(r.a,Object(a.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=10.f59792c8.chunk.js.map