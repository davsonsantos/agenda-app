import{_ as j}from"./Logo-DI36_LO0.js";import{z as C,J as N,o as r,c as g,e as v,w as a,d as n,t as T,M as q,k as p,b as e,N as E,O as d,P as S,Q as P,u as l,S as F,V as A,T as B,U as L,F as h,L as D,a as z,E as I,W as J,X as O}from"./index-D4C9QB4p.js";import{c as M,a as R,u as U,b as $}from"./index.esm-BQhtQ2Q7.js";const Q={__name:"ForgotPasswordForm",emits:["after-request"],setup(w,{emit:t}){const c=t,s=C(null),f=N(),_=M({email:R().required("E-mail é obrigatório").email("E-mail inválido").label("E-mail")}),{handleSubmit:V,isSubmitting:k,errors:b}=U({validationSchema:_,initialValues:{email:""}}),x=V(async m=>{s.value=null,await f.forgotPassword(m.email).then(()=>{c("after-request")}).catch(o=>{s.value=o.message})}),{value:i}=$("email");return(m,o)=>(r(),g(h,null,[s.value?(r(),v(q,{key:0,color:"error",class:"mb-2"},{default:a(()=>[n(T(s.value),1)]),_:1})):p("",!0),e(L,{onSubmit:B(l(x),["prevent"])},{default:a(()=>[e(E,{class:"d-flex mb-3"},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(S,{class:"font-weight-bold mb-1"},{default:a(()=>[n("E-mail")]),_:1}),e(P,{modelValue:l(i),"onUpdate:modelValue":o[0]||(o[0]=u=>F(i)?i.value=u:null),"error-messages":l(b).email,variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",class:"pt-0"},{default:a(()=>[e(A,{type:"submit",loading:l(k),color:"primary",size:"large",block:"",flat:""},{default:a(()=>[n("Recuperar senha")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},W={__name:"ResetPasswordForm",emits:["after-reset"],setup(w,{emit:t}){const c=t,s=C(null),f=N(),_=M({token:R().required("Token é obrigatório").label("Token"),password:R().required("Senha é obrigatório").min(8,o=>`Senha deve ter pelo menos ${o.min} caracteres`).matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/,"Pelo menos uma letra e um número").label("Senha")}),{handleSubmit:V,isSubmitting:k,errors:b}=U({validationSchema:_,initialValues:{token:"",password:""}}),x=V(async o=>{s.value=null,await f.resetPassword(o.token,o.password).then(()=>{c("after-reset")}).catch(u=>{s.value=u.message})}),{value:i}=$("token"),{value:m}=$("password");return(o,u)=>(r(),g(h,null,[s.value?(r(),v(q,{key:0,color:"error",class:"mb-2"},{default:a(()=>[n(T(s.value),1)]),_:1})):p("",!0),e(L,{onSubmit:B(l(x),["prevent"])},{default:a(()=>[e(E,{class:"d-flex mb-3"},{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[e(S,{class:"font-weight-bold mb-1"},{default:a(()=>[n("Token")]),_:1}),e(P,{modelValue:l(i),"onUpdate:modelValue":u[0]||(u[0]=y=>F(i)?i.value=y:null),"error-messages":l(b).token,variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12"},{default:a(()=>[e(S,{class:"font-weight-bold mb-1"},{default:a(()=>[n("Nova Senha")]),_:1}),e(P,{modelValue:l(m),"onUpdate:modelValue":u[1]||(u[1]=y=>F(m)?m.value=y:null),"error-messages":l(b).password,variant:"outlined",color:"primary",type:"password"},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",class:"pt-0"},{default:a(()=>[e(A,{type:"submit",loading:l(k),color:"primary",size:"large",block:"",flat:""},{default:a(()=>[n("Resetar senha ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},X={class:"text-center mt-5"},Z={__name:"ForgotPassword",setup(w){const t=C("forgotPassword");return(c,s)=>{const f=D("RouterLink");return r(),g(h,null,[t.value==="forgotPassword"?(r(),v(Q,{key:0,onAfterRequest:s[0]||(s[0]=_=>t.value="resetPassoword")})):p("",!0),t.value=="resetPassoword"?(r(),v(W,{key:1,onAfterReset:s[1]||(s[1]=_=>t.value="Reset")})):p("",!0),t.value==="Reset"?(r(),g(h,{key:2},[e(q,{color:"success",class:"mb-2"},{default:a(()=>[n(" Sua senha foi redefinida com sucesso! ")]),_:1}),z("div",X,[e(f,{to:{name:"login"},class:"text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"},{default:a(()=>[n(" Login ")]),_:1})])],64)):p("",!0)],64)}}},G={class:"authentication"},H={class:"d-flex justify-center py-4"},ae={__name:"ForgotPassword",setup(w){return(t,c)=>(r(),g("div",G,[e(I,{fluid:"",class:"pa-3"},{default:a(()=>[e(E,{class:"h-100vh d-flex justify-center align-center"},{default:a(()=>[e(d,{cols:"12",lg:"4",xl:"3",class:"d-flex align-center"},{default:a(()=>[e(J,{rounded:"md",elevation:"10",class:"px-sm-1 px-0 withbg mx-auto","max-width":"500"},{default:a(()=>[e(O,{class:"pa-sm-8"},{default:a(()=>[z("div",H,[e(j)]),e(Z)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}};export{ae as default};