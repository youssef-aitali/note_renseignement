(this.webpackJsonpnote_renseignement=this.webpackJsonpnote_renseignement||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),l=(n(15),n(2)),r=n(5),h=n(6),d=n(9),o=n(8),j=(n(16),n(0)),m=function(){return Object(j.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("span",{className:"navbar-brand mb-0 h1",children:"NRU"})})})},u=(n(18),n(7)),b=n(10),p=(n(19),["handleChange"]),x=function(e){var t=e.handleChange,n=Object(b.a)(e,p);return Object(j.jsx)("input",Object(u.a)({className:"form-control",onChange:t},n))},O=(n(20),function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,c=n.type,s=n.checked,i="checkbox"===c?s:t.target.value;e.setState(Object(l.a)({},a,i))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state)},e.state={nom:"",prenom:"",adresse:"",cin:"",email:"",qualite_demandeur:"",telephone:"",est_proprietaire:!0,mode_remise:"",nature_projet:"",type_foncier:"",reference_fonciere:""},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsxs)("div",{className:"container shadow p-5 mb-5 bg-body rounded mt-5",children:[Object(j.jsx)("h2",{className:"mb-5",children:"Informations du demandeur"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("div",{className:"row gy-2",children:[Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(x,{name:"nom",type:"text",placeholder:"Nom",value:this.state.nom,handleChange:this.handleChange,required:!0})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(x,{name:"prenom",type:"text",placeholder:"Pr\xe9nom",value:this.state.prenom,handleChange:this.handleChange,required:!0})}),Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)(x,{name:"adresse",type:"text",placeholder:"Adresse",value:this.state.adresse,handleChange:this.handleChange,required:!0})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(x,{name:"cin",type:"text",placeholder:"Carte d'Identit\xe9 Nationale",value:this.state.cin,handleChange:this.handleChange,required:!0})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(x,{name:"telephone",type:"text",placeholder:"T\xe9l\xe9phone",value:this.state.telephone,handleChange:this.handleChange,required:!0})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("select",{className:"form-select",name:"mode_remise",value:this.state.mode_remise,onChange:this.handleChange,required:!0,children:[Object(j.jsx)("option",{defaultValue:"",children:"Mode de remise"}),Object(j.jsx)("option",{value:"En personne",children:"En personne"}),Object(j.jsx)("option",{value:"Courrier",children:"Courrier"}),Object(j.jsx)("option",{value:"Email",children:"Email"})]})}),"Email"===this.state.mode_remise?Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(x,{name:"email",type:"text",placeholder:"Email",value:this.state.email,handleChange:this.handleChange,required:!0})}):null,Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("select",{className:"form-select",name:"qualite_demandeur",value:this.state.qualite_demandeur,onChange:this.handleChange,children:[Object(j.jsx)("option",{value:"",children:"Qualit\xe9 du demandeur"}),Object(j.jsx)("option",{value:"Individu",children:"Individu"}),Object(j.jsx)("option",{value:"Architecte",children:"Architecte"}),Object(j.jsx)("option",{value:"Autre",children:"Autre"})]})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("div",{className:"form-check form-switch",children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckChecked",defaultChecked:this.state.est_proprietaire,name:"est_proprietaire",value:this.state.est_proprietaire,onChange:this.handleChange}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:"Vous \xeates propri\xe9taire ?"})]})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(x,{name:"nature_projet",type:"text",placeholder:"Nature du projet envisag\xe9",value:this.state.nature_projet,handleChange:this.handleChange})}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsxs)("select",{className:"form-select",name:"type_foncier",value:this.state.type_foncier,onChange:this.handleChange,children:[Object(j.jsx)("option",{defaultValue:"",children:"Type du foncier"}),Object(j.jsx)("option",{value:"Non immatricul\xe9",children:"Non immatricul\xe9"}),Object(j.jsx)("option",{value:"TF",children:"Immatricul\xe9"}),Object(j.jsx)("option",{value:"R",children:"R\xe9quisition"})]})}),"Non immatricul\xe9"===this.state.type_foncier?null:Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(x,{name:"reference_fonciere",type:"text",placeholder:"R\xe9f\xe9rence fonci\xe8re",value:this.state.reference_fonciere,handleChange:this.handleChange})})]}),Object(j.jsx)("div",{className:"buttons mt-5",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Suivant"})})]})]})]})}}]),n}(a.Component)),v=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(O,{})})};n(21);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.dffb7bde.chunk.js.map