(this.webpackJsonplogin_react=this.webpackJsonplogin_react||[]).push([[0],{11:function(e,a,s){},12:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s(1),i=s.n(n),c=s(5),r=s.n(c),o=(s(11),s(2)),l=[{id:1,name:"adm",email:"adm@adm.com",password:"adm"},{id:2,name:"user",email:"user@user.com",password:"user"},{id:3,name:"dev",email:"dev@dev.com",password:"dev"}],d=s(3);var m=function(e){var a=e.login,s=e.error,i=Object(n.useState)({email:"",password:""}),c=Object(o.a)(i,2),r=c[0],l=c[1];return Object(t.jsxs)("form",{className:"login-section",onSubmit:function(e){e.preventDefault(),a(r),l({email:"",password:""})},children:[Object(t.jsxs)("div",{className:"form-login",children:[Object(t.jsx)("h1",{className:"title",children:"Login"}),""!==s?Object(t.jsx)("div",{className:"error",children:s}):""]}),Object(t.jsxs)("div",{className:"form-section",children:[Object(t.jsx)("label",{htmlFor:"email",children:"email:"}),Object(t.jsx)("input",{className:"input-section",type:"email",name:"email",id:"email",onChange:function(e){l(Object(d.a)(Object(d.a)({},r),{},{email:e.target.value}))},value:r.email}),Object(t.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(t.jsx)("input",{className:"input-section",type:"password",name:"password",id:"password",onChange:function(e){l(Object(d.a)(Object(d.a)({},r),{},{password:e.target.value}))},value:r.passsword})]}),Object(t.jsx)("input",{className:"log-btn",type:"submit",value:"LOGIN"})]})};var j=function(){var e=Object(n.useState)({name:"",email:"",password:""}),a=Object(o.a)(e,2),s=a[0],i=a[1],c=Object(n.useState)(""),r=Object(o.a)(c,2),d=r[0],j=r[1];return Object(t.jsx)("div",{className:"App",children:""!==s.email?Object(t.jsxs)("div",{children:[Object(t.jsxs)("h2",{className:"username",children:["Welcome, ",Object(t.jsx)("span",{children:s.name})]}),Object(t.jsx)("button",{className:"log-btn",onClick:function(){i({name:"",email:"",password:""})},children:"Logout"})]}):Object(t.jsx)(m,{login:function(e){var a=l.filter((function(a){return a.email===e.email&&a.password===e.password}));a.length>0?i({name:a[0].name,email:e.email,password:e.password}):j("Your e-mail or password is wrong")},error:d})})};var b=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(j,{}),Object(t.jsx)("footer",{children:Object(t.jsxs)("p",{className:"attribution",children:["Coded by"," ",Object(t.jsx)("a",{href:"https://www.linkedin.com/in/gyokota/",children:"Giovana Yokota"})]})})]})};r.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d5b83564.chunk.js.map