(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),l=c.n(a),s=c(4),n=c.n(s),o=(c(9),c(2)),r=(c(10),c(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"#",children:e.contactUs})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label mx-1",htmlFor:"flexSwitchCheckDefault",children:"Enable Darkmode"})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"red":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.redMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Redmode"})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"green":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.greenMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable green mode"})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"#0040ff":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.blueMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault",children:"Enable blue mode"})]})]})]})})}function d(e){var t=Object(a.useState)(" "),c=Object(o.a)(t,2),l=c[0],s=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#04020d"},children:[Object(r.jsxs)("h1",{children:[" ",e.heading," "]}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:l,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#04020d"},onChange:function(e){console.log("OnChange"),s(e.target.value)},id:"exampleFormControlTextarea1",rows:"8",children:" "})}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log(l);var t=l.toUpperCase();s(t),e.showAlert("Converted to uppercase !","success")},children:" Convert to Uppercase "}),Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log(l);var t=l.toLowerCase();s(t),e.showAlert("Converted to lowercase !","success")},children:" Convert to Lowercase "}),Object(r.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log(l);var t=l.trim();s(t),e.showAlert("Text trimmed !","success")},children:" Trim sentence"})]}),Object(r.jsxs)("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"#04020d"},children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[l.split(" ").length," words and ",l.length," characters"]}),Object(r.jsxs)("p",{children:[.008*l.split(" ").length," minutes read"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:l.length>0?l:"Enter something to preview"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About"};var h=function(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsxs)("strong",{children:[" ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)]}),":",e.alert.msg]})};var b=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],l=t[1],s=Object(a.useState)(null),n=Object(o.a)(s,2),b=n[0],m=n[1],u=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextUtils",mode:c,redMode:function(){"light"===c?(l("red"),document.body.style.backgroundColor="red",u("Dark mode has been enabled","success")):(l("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))},greenMode:function(){"light"===c?(l("dark"),document.body.style.backgroundColor="green",u("Dark mode has been enabled","success")):(l("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))},blueMode:function(){"light"===c?(l("dark"),document.body.style.backgroundColor="#0040ff",u("Dark mode has been enabled","success")):(l("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))},toggleMode:function(){"light"===c?(l("dark"),document.body.style.backgroundColor="black",u("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(l("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(r.jsx)(h,{alert:b}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(d,{showAlert:u,heading:"Enter the text to analyze",mode:c})})]})};n.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.1ba0d759.chunk.js.map