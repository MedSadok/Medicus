(this.webpackJsonpmedicus=this.webpackJsonpmedicus||[]).push([[7],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var c=n(0),a=n(24),s=n(13),r=n(50),i=n(93),o=n.n(i),l=n(1);function j(e){return Object(l.jsxs)("div",{children:["\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)(o.a,{data:[{ingredient:"Metoprolol succinat",tradeName:"METOPROLOLSUCCINA T 1A 95MG",strength:"95 mg",form:"RetTabl",morning:1,midday:0,evening:0,night:0,unit:"st\xfcck",hints:"",reason:"Herz/Blutdruck"},{ingredient:"Ramipril",tradeName:"RAMIPRIL RATIOPHARM 5MG",strength:"5 mg",form:"Tabl",morning:1,midday:0,evening:0,night:0,unit:"st\xfcck",hints:"",reason:"Blutdruck"},{ingredient:"Insulin aspart",tradeName:"NOVORAPID PENFILL ZYLINAMP",strength:"100 E/ml",form:"Amp",morning:20,midday:0,evening:20,night:0,unit:"IE",hints:"Wechseln der Injektionsstellen, unmittelbar vor einer Mahlzeit spritzen",reason:"Herz/Blutdruck"},{ingredient:"Simvastatin",tradeName:"SIMVA ARISTO 40MG",strength:"40 mg",form:"Tabl",morning:0,midday:0,evening:1,night:0,unit:"st\xfcck",hints:"",reason:"Blutfette"}],columns:[{Header:"Wirkstoff",accessor:"ingredient"},{Header:"Handelsname",accessor:"tradeName"},{Header:"St\xe4rke",accessor:"strength"},{Header:"Form",accessor:"form"},{Header:"morgens",accessor:"morning"},{Header:"mit-tags",accessor:"midday"},{Header:"abends",accessor:"evening"},{Header:"zur Nacht",accessor:"night"},{Header:"Einheit",accessor:"unit"},{Header:"Hinweise",accessor:"hints"},{Header:"Grund",accessor:"reason"}]}),"\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"]})}var d=n(54),u=n(12),b=n.n(u),m=n(14),h=n(8),O=n(58),x=n(33),p=n(55),f=n(23);function g(e){var t=new Date;return Object(l.jsxs)(s.g,{className:"justify-content-between",children:[Object(l.jsx)(s.a,{className:"align-items-center",children:Object(l.jsx)("h6",{className:"text-muted my-1 py-0",children:"Welcome ".concat(Object(f.d)({user:e.session}),".")})}),Object(l.jsx)(s.a,{className:"text-muted col-auto",children:Object(l.jsx)(x.g,{date:t})})]})}function N(e){var t=Object(c.useState)(!0),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(0),o=Object(h.a)(i,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var n,c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),n=Object(f.m)({user:e.session}),0,10,t.next=7,fetch("/api/users/".concat(n,"/services?page=").concat(0,"&limit=").concat(10),{headers:{Authorization:"Bearer ".concat(e.session.authToken)}});case 7:return c=t.sent,t.next=10,c.json();case 10:if(a=t.sent,c.ok){t.next=13;break}throw new Error(a.message);case 13:d(a.length),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.error("Failed to get count of services. ".concat(t.t0));case 19:return t.prev=19,r(!1),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.session]),a||j>0?null:Object(l.jsx)(s.g,{className:"mt-3",children:Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"alert alert-danger d-flex p-2",role:"alert",children:[Object(l.jsx)(p.a,{className:"mx-1",children:"person"}),Object(l.jsx)("p",{className:"my-0",children:"You have not added any services yet. Add a service to your profile to help patients schedule new appointments with you."})]})})})}function v(e){var t=Boolean(e.session.isPhysician);return Object(l.jsx)(O.a,{className:"rounded",children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(g,{session:e.session}),t&&Object(l.jsx)(N,{session:e.session})]})})}var y=n(11),w=n(51),k=n(31),S=n(19);function F(e){return Object(l.jsx)(r.l,{children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"md-font-sm text-center text-muted",children:"No medications available"})})})})}function A(e){return Object(l.jsx)(r.l,{children:Object(l.jsx)(k.b,{to:"/users/".concat(e.session.username,"/medications"),children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"md-font-sm text-center text-muted",children:"View All"})})})})})}function C(e){return Object(l.jsx)(r.l,{className:"list-group-item-action",children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"align-self-center",children:Object(l.jsxs)(s.g,{children:[Object(l.jsx)(s.a,{children:Object(l.jsx)(k.b,{to:"/medications/".concat(e.medication.appointmentId),className:"font-weight-bold text-truncate",children:e.medication.name})}),Object(l.jsx)(s.a,{className:"col-auto",children:"".concat(e.medication.dosage," mg")})]})})})})})}function T(e){var t=Object(c.useState)(!0),n=Object(h.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({medications:[],limit:5}),o=Object(h.a)(i,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var n,c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),n=e.session.username,0,t.next=6,fetch("/api/users/".concat(n,"/medications?page=").concat(0,"&limit=").concat(j.limit),{headers:{Authorization:"Bearer ".concat(e.session.authToken)}});case 6:return c=t.sent,t.next=9,c.json();case 9:if(a=t.sent,c.ok){t.next=12;break}throw new Error(a.message);case 12:d((function(e){var t=[].concat(Object(w.a)(e.medications),Object(w.a)(a));return Object(y.a)(Object(y.a)({},e),{},{medications:t})})),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.error("Failed to to load recent medications. ".concat(t.t0));case 18:return t.prev=18,s(!1),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,15,18,21]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.session,j.limit]),Object(l.jsxs)(r.e,{children:[Object(l.jsx)(r.a,{title:"Recent Medications"}),a?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.f,{children:Object(l.jsx)(S.b,{isLoading:!0})})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.k,{children:0!==j.medications.length?Object(l.jsxs)(l.Fragment,{children:[j.medications.map((function(e,t){return Object(l.jsx)(C,{medication:e},t)})),Object(l.jsx)(A,{session:e.session})]}):Object(l.jsx)(F,{})})})]})}function B(e){return Object(l.jsx)(r.l,{children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"md-font-sm text-center text-muted",children:"No payments available"})})})})}function E(e){return Object(l.jsx)(r.l,{children:Object(l.jsx)(k.b,{to:"/users/".concat(e.session.username,"/payments"),children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"md-font-sm text-center text-muted",children:"View All"})})})})})}function H(e){var t=new Date(e.payment.date);return Object(l.jsx)(r.l,{className:"list-group-item-action",children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"align-self-center",children:Object(l.jsxs)(s.g,{children:[Object(l.jsx)(s.a,{children:Object(l.jsx)(k.b,{to:"/appointments/".concat(e.payment.appointmentId,"/payments"),className:"font-weight-bold text-truncate",children:Object(l.jsx)(f.b,{value:e.payment.amount})})}),Object(l.jsx)(s.a,{className:"col-auto",children:Object(l.jsx)(x.f,{date:t})})]})})})})})}function I(e){var t=Object(c.useState)(!0),n=Object(h.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({payments:[],limit:5}),o=Object(h.a)(i,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var n,c,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),n=e.session.username,0,t.next=6,fetch("/api/users/".concat(n,"/payments?page=").concat(0,"&limit=").concat(j.limit),{headers:{Authorization:"Bearer ".concat(e.session.authToken)}});case 6:return c=t.sent,t.next=9,c.json();case 9:if(a=t.sent,c.ok){t.next=12;break}throw new Error(a.message);case 12:d((function(e){var t=[].concat(Object(w.a)(e.payments),Object(w.a)(a));return Object(y.a)(Object(y.a)({},e),{},{payments:t})})),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.error("Failed to to load recent payments. ".concat(t.t0));case 18:return t.prev=18,s(!1),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,15,18,21]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.session,j.limit]),Object(l.jsxs)(r.e,{children:[Object(l.jsx)(r.a,{title:"Recent Payments"}),a?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.f,{children:Object(l.jsx)(S.b,{isLoading:!0})})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.k,{children:0!==j.payments.length?Object(l.jsxs)(l.Fragment,{children:[j.payments.map((function(e,t){return Object(l.jsx)(H,{payment:e},t)})),Object(l.jsx)(E,{session:e.session})]}):Object(l.jsx)(B,{})})})]})}function z(e){var t=Object(f.d)({user:e.session}),n=Object(f.d)({user:e.appointment.patient}),c=Object(f.d)({user:e.appointment.physician});return t===n?c:n}function L(e){return e.appointment?e.appointment.title:""}function M(e){return Object(l.jsx)(r.l,{children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"md-font-sm text-center text-muted",children:"No appointments available"})})})})}function R(e){return Object(l.jsx)(r.l,{children:Object(l.jsx)(k.b,{to:"/appointments?view=waiting",children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:Object(l.jsx)(s.a,{className:"md-font-sm text-center text-muted",children:"View All"})})})})})}function P(e){var t=Object(c.useState)(!0),n=Object(h.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)({}),j=Object(h.a)(o,2),d=j[0],u=j[1];return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(!0),t.next=4,fetch("/api/appointments/".concat(e.appointment.id),{headers:{Authorization:"Bearer ".concat(e.session.authToken)}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(c=t.sent,n.ok){t.next=10;break}throw new Error(c.message);case 10:u(c),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Failed to load appointment- ".concat(e.appointment.id,". ").concat(t.t0));case 16:return t.prev=16,i(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.appointment,e.session]),Object(l.jsx)(r.l,{className:"list-group-item-action",children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.g,{children:a?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(S.b,{isLoading:!0})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(s.a,{className:"col-auto align-self-center",children:[Object(l.jsx)("p",{className:"text-center my-0",children:Object(l.jsx)(x.c,{date:d.startTime})}),Object(l.jsx)("p",{className:"md-font-sm text-center text-muted my-0",children:Object(l.jsx)(x.g,{date:d.startTime})})]}),Object(l.jsxs)(s.a,{className:"align-self-center",children:[Object(l.jsx)("p",{className:"my-0",children:Object(l.jsx)(k.b,{to:"/appointments/".concat(d.id),className:"text-truncate font-weight-bold",children:Object(l.jsx)(z,{session:e.session,appointment:d})})}),Object(l.jsx)("p",{className:"md-font-sm text-truncate text-muted my-0",children:Object(l.jsx)(L,{appointment:d})})]})]})})})})}function D(e){var t=Object(c.useState)(!0),n=Object(h.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)({appointments:[],limit:10}),o=Object(h.a)(i,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),0,t.next=5,fetch("/api/appointments?view=waiting&page=".concat(0,"&limit=").concat(j.limit),{headers:{Authorization:"Bearer ".concat(e.session.authToken)}});case 5:return n=t.sent,t.next=8,n.json();case 8:if(c=t.sent,n.ok){t.next=11;break}throw new Error(c.message);case 11:d((function(e){var t=[].concat(Object(w.a)(e.appointments),Object(w.a)(c));return Object(y.a)(Object(y.a)({},e),{},{appointments:t})})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Failed to to load waiting appointments. ".concat(t.t0));case 17:return t.prev=17,s(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.session,j.limit]),Object(l.jsxs)(r.e,{children:[Object(l.jsx)(r.a,{title:"Today's Appointments"}),a?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.f,{children:Object(l.jsx)(S.b,{isLoading:!0})})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(r.k,{children:0!==j.appointments.length?Object(l.jsxs)(l.Fragment,{children:[j.appointments.map((function(t,n){return Object(l.jsx)(P,{session:e.session,appointment:t},n)})),Object(l.jsx)(R,{})]}):Object(l.jsx)(M,{})})})]})}function q(e){var t=Object(a.c)((function(e){return e.session}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d.d,{title:"Dashboard"}),Object(l.jsx)(s.g,{className:"flex-grow-1",children:Object(l.jsx)(s.a,{className:"pt-3",children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(r.m,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(v,{session:t})})}),Object(l.jsx)(r.m,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(j,{})})}),Object(l.jsxs)(r.h,{children:[Object(l.jsx)(D,{session:t}),!t.isPhysician&&Object(l.jsx)(T,{session:t}),Object(l.jsx)(I,{session:t})]})]})})})]})}},50:function(e,t,n){"use strict";n.d(t,"m",(function(){return x})),n.d(t,"h",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return N})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return y})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return k})),n.d(t,"k",(function(){return S})),n.d(t,"l",(function(){return F})),n.d(t,"i",(function(){return A})),n.d(t,"j",(function(){return C}));var c=n(11),a=n(49),s=n(12),r=n.n(s),i=n(14),o=n(8),l=n(0),j=n(3),d=n(13),u=n(58),b=n(56),m=n(55),h=n(53),O=n(1);function x(e){return Object(O.jsx)(d.g,{className:Object(j.b)("mb-3",e.className),children:e.children})}function p(e){return Object(O.jsx)("div",{class:Object(j.b)("card-columns mb-3",e.className),children:e.children})}function f(e){return Object(O.jsx)(u.b,{className:Object(j.b)("md-widget mb-3",e.className),children:e.children})}function g(e){return Object(O.jsxs)("nav",{className:"card-header navbar md-title px-3 py-1",children:[Object(O.jsx)("h6",{className:"navbar-brand text-muted my-1 py-0",children:e.title}),e.children]})}function N(e){return Object(O.jsx)("ul",{className:Object(j.b)("nav",e.className),children:e.children})}function v(e){return Object(O.jsx)("button",{type:"button","data-toggle":"tooltip",title:e.name,className:"btn btn-sm p-2 d-flex align-items-center",onClick:e.handleClick,children:Object(O.jsx)(m.a,{children:e.icon})})}function y(e){var t=Object(l.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1];function s(){return(s=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!c);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsx)("button",{type:"button","data-toggle":"collapse","data-target":"#".concat(e.target),class:"btn btn-sm p-2 d-flex align-items-center",onClick:function(e){return s.apply(this,arguments)},"aria-expanded":"false","aria-controls":e.target,children:Object(O.jsx)(m.a,{children:c?e.collapseIcon:e.expandIcon})})}function w(e){var t=e.className,n=Object(a.a)(e,["className"]);return Object(O.jsx)(u.c,Object(c.a)(Object(c.a)({className:Object(j.b)("px-3 py-2",t)},n),{},{children:e.children}))}function k(e){var t=e.id,n=e.className,s=Object(a.a)(e,["id","className"]);return Object(O.jsx)(w,Object(c.a)(Object(c.a)({id:t},s),{},{className:Object(j.b)("collapse",n),children:e.children}))}function S(e){return Object(O.jsx)(b.a,{className:"list-group-flush",children:e.children})}function F(e){return Object(O.jsx)(b.c,{className:"py-2 px-0",children:e.children})}function A(e){return Object(O.jsxs)(h.a,{children:[Object(O.jsx)(h.b,{id:e.id,className:"p-2 d-flex align-items-center",children:Object(O.jsx)(m.a,{children:"more_horiz"})}),Object(O.jsx)(h.d,{labelledBy:e.id,className:"dropdown-menu-right",children:e.children})]})}function C(e){var t=e.className,n=Object(a.a)(e,["className"]);return Object(O.jsx)(h.e,Object(c.a)(Object(c.a)({className:Object(j.b)("d-flex align-items-center",t)},n),{},{children:e.children}))}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return d}));n(0);var c=n(3),a=n(1);function s(e){var t=e.enctype?e.enctype:"application/x-www-form-urlencoded";return Object(a.jsx)("form",{method:"post",autoComplete:e.autoComplete,enctype:t,className:Object(c.b)("",e.className),onSubmit:e.handleSubmit,children:e.children})}function r(e){return Object(a.jsx)("div",{className:Object(c.b)("form-row",e.className),children:e.children})}function i(e){return Object(a.jsx)("div",{className:Object(c.b)("form-group",e.className),children:e.children})}function o(e){return Object(a.jsx)("button",{type:e.type?e.type:"button",disabled:e.disabled,className:Object(c.b)("btn",e.className),onClick:e.handleClick,children:e.children})}function l(e){return Object(a.jsx)(o,{type:"submit",disabled:e.disabled,className:Object(c.b)("btn-primary",e.className),children:e.children})}function j(e){return Object(a.jsx)("label",{htmlFor:e.for,className:Object(c.b)("col-form-label",e.className),children:e.children})}function d(e){return Object(a.jsx)("legend",{htmlFor:e.for,className:Object(c.b)("col-form-label",e.className),children:e.children})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return j}));n(0),n(31);var c=n(3),a=n(1);function s(e){return Object(a.jsx)("div",{className:Object(c.b)("dropdown",e.className),children:e.children})}function r(e){return Object(a.jsx)("button",{type:"button",id:e.id,"data-toggle":"dropdown",className:Object(c.b)("btn",e.className),"aria-haspopup":"true","aria-expanded":"false",children:e.children})}function i(e){return Object(a.jsx)("button",{type:"button",id:e.id,"data-toggle":"dropdown",className:Object(c.b)("btn dropdown-toggle",e.className),"aria-haspopup":"true","aria-expanded":"false",children:e.children})}function o(e){return Object(a.jsx)("div",{"aria-labelledby":e.labelledBy,className:Object(c.b)("dropdown-menu",e.className),children:e.children})}function l(e){return Object(a.jsx)("div",{className:Object(c.b)("dropdown-divider",e.className)})}function j(e){return Object(a.jsx)("button",{type:"button",onClick:e.handleClick,className:Object(c.b)("dropdown-item",e.className),name:e.name,value:e.value,disabled:Boolean(e.disabled),children:e.children})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return w}));var c=n(12),a=n.n(c),s=n(32),r=n(14),i=n(8),o=n(11),l=n(49),j=n(0),d=n(24),u=n(3),b=n(1);var m=n(53),h=n(52),O=n(55),x=n(57),p=n(23);function f(e){var t=e.className,n=e.icon,c=Object(l.a)(e,["className","icon"]);return Object(b.jsx)(x.m,Object(o.a)(Object(o.a)({className:Object(u.b)("md-btn p-2 mx-1",t)},c),{},{children:Object(b.jsx)(O.a,{className:"d-flex align-items-center",children:n})}))}function g(e){var t=e.title,n=e.icon,c=Object(l.a)(e,["title","icon"]);return Object(b.jsxs)(x.i,Object(o.a)(Object(o.a)({className:"md-mi d-flex align-items-center"},c),{},{children:[Object(b.jsx)(O.a,{children:n}),Object(b.jsx)("p",{className:"my-0 pl-2 text-truncate",children:t})]}))}function N(e){var t=e.className,n=e.title,c=e.icon,a=Object(l.a)(e,["className","title","icon"]);return Object(b.jsxs)(x.k,Object(o.a)(Object(o.a)({},a),{},{className:Object(u.b)("md-btn mx-1 p-2 d-flex align-items-center",t),tooltip:n,role:"button",children:[Object(b.jsx)(O.a,{children:c}),Object(b.jsx)("p",{className:"my-0 pl-2 text-truncate d-md-none",children:n})]}))}function v(e){return Object(b.jsx)(x.l,{children:e.children})}function y(e){var t=Object(j.useState)({query:""}),n=Object(i.a)(t,2),c=n[0],l=n[1];function d(){return(d=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},t.target.name,t.target.value)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(r.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault();try{e.handleSearch&&e.handleSearch(c.query)}catch(a){console.error("Failed to handle search query. ".concat(a))}case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsx)(h.a,{handleSubmit:function(e){return m.apply(this,arguments)},className:Object(u.b)("form-inline mx-1 my-2 my-lg-0",e.className),children:Object(b.jsxs)("div",{className:"input-group w-100",children:[Object(b.jsx)("input",{id:"titlebarSearch01",type:"text",className:"form-control",name:"query",placeholder:e.placeholder,value:c.query,onChange:function(e){return d.apply(this,arguments)},"aria-label":"Search Query","aria-describedby":"titlebarSearch02"}),Object(b.jsx)("div",{className:"input-group-append",children:Object(b.jsx)("button",{id:"titlebarSearch02",type:"button",className:"btn btn-sm btn-outline-secondary",children:Object(b.jsx)(O.a,{children:"search"})})})]})})}function w(e){var t=Object(d.c)((function(e){return e.session}));return Object(b.jsxs)(x.b,{className:"navbar-expand-md navbar-light row md-tbar sticky-top justify-content-start",children:[Object(b.jsx)(f,{target:"sideBar01",icon:"menu",toggleType:"modal"}),Object(b.jsx)(x.c,{className:"mr-auto p-1 font-weight-bold",children:e.title}),e.children&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{target:"titleBarNav01",icon:"more_vert"}),Object(b.jsx)(x.d,{id:"titleBarNav01",className:"justify-content-end order-last order-md-4",children:e.children})]}),Object(b.jsxs)(x.a,{className:"order-md-last",asList:!0,children:[Object(b.jsx)(S,{}),Object(b.jsx)(k,{session:t,user:t})]})]})}function k(e){var t=Object(d.b)();function n(){return(n=Object(r.a)(a.a.mark((function n(c){var s,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,n.next=4,fetch("/api/auth/signout",{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.session.authToken)}});case 4:return s=n.sent,n.next=7,s.json();case 7:if(r=n.sent,s.ok){n.next=10;break}throw new Error(r.message);case 10:t({type:"session/reset"}),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.error("Failed to sign out. ".concat(n.t0));case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}var c=[{path:"/users/".concat(e.user.username),title:"Profile",icon:"person"},{path:"/settings",title:"Settings",icon:"settings"},{title:"Sign Out",icon:"logout",handleClick:function(e){return n.apply(this,arguments)}}];return Object(b.jsxs)(x.e,{children:[Object(b.jsx)(x.f,{className:"px-0 mx-1 d-flex align-items-center",children:Object(b.jsx)(p.i,{className:"md-pfl-xs md-pfl-round",session:e.session,user:e.user})}),Object(b.jsx)(x.g,{className:"dropdown-menu-right",children:c.map((function(e,t){return Object(b.jsx)(g,{path:e.path,exact:e.exact,title:e.title,icon:e.icon,handleClick:e.handleClick},t)}))})]})}function S(e){return Object(b.jsxs)(x.e,{className:"mx-1 my-2",children:[Object(b.jsx)(m.c,{className:"md-btn p-2 d-flex align-items-center",children:Object(b.jsx)(O.a,{children:"notifications"})}),Object(b.jsx)(x.g,{className:"dropdown-menu-right",children:Object(b.jsx)(x.h,{children:"Coming Soon!"})})]})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return d}));var c=n(11),a=n(49),s=(n(0),n(31)),r=n(3),i=n(1);function o(e){return Object(i.jsx)("div",{className:Object(r.b)("list-group",e.className),children:e.children})}function l(e){return Object(i.jsx)("div",{className:Object(r.b)("list-group-item",e.className),children:e.children})}function j(e){return Object(i.jsx)(s.b,{to:e.url,className:Object(r.b)("list-group-item list-group-action",e.className),children:e.children})}function d(e){var t=e.className,n=e.handleClick,s=Object(a.a)(e,["className","handleClick"]);return Object(i.jsx)("button",Object(c.a)(Object(c.a)({type:"button",onClick:n},s),{},{className:Object(r.b)("list-group-item list-group-action",t),children:e.children}))}},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return d}));var c=n(11),a=n(49),s=(n(0),n(3)),r=n(1);function i(e){var t=e.className,n=Object(a.a)(e,["className"]);return Object(r.jsx)("div",Object(c.a)(Object(c.a)({className:Object(s.b)("card",t)},n),{},{children:e.children}))}function o(e){var t=e.className,n=Object(a.a)(e,["className"]);return Object(r.jsx)("div",Object(c.a)(Object(c.a)({className:Object(s.b)("card-header",t)},n),{},{children:e.children}))}function l(e){var t=e.className,n=Object(a.a)(e,["className"]);return Object(r.jsx)("div",Object(c.a)(Object(c.a)({className:Object(s.b)("card-body",t)},n),{},{children:e.children}))}function j(e){var t=e.className,n=Object(a.a)(e,["className"]);return Object(r.jsx)("div",Object(c.a)(Object(c.a)({className:Object(s.b)("card-footer",t)},n),{},{children:e.children}))}function d(e){var t=e.className,n=Object(a.a)(e,["className"]);return Object(r.jsx)("div",Object(c.a)(Object(c.a)({className:Object(s.b)("card card-body",t)},n),{},{children:e.children}))}}}]);
//# sourceMappingURL=7.9baba730.chunk.js.map