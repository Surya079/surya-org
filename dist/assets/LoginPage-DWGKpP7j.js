import{r as i,h as j,F as v,H as y,J as k,K as _,j as s,O as E,B as l,i as d,T as u,a as L,P as N,Q as C,R}from"./index-DjCb9QRt.js";const V=()=>{const[r,m]=i.useState({email:"",password:""}),[t,p]=i.useState({}),h=j(),{handleShowSnackbar:o}=v(),{token:x}=y(k),[g,n]=i.useState(!1),f=_(),c=a=>{const{name:e,value:S}=a.target;m({...r,[e]:S})},b=()=>{let a={};return r.email?/\S+@\S+\.\S+/.test(r.email)||(a.email="Email is not valid."):a.email="Email is required.",(!r.password||r.password.length<6)&&(a.password="Password must be at least 6 characters long."),p(a),Object.keys(a).length===0},w=async a=>{if(a.preventDefault(),b())try{n(!0);const e=await N.post(`https://portfolio-node-six.vercel.app${C.userLogin}`,r);e&&(n(!1),o(e.data.message,"success"),f(R({token:e.data.token,username:e.data.current_user.username,email:e.data.current_user.email,occupation:e.data.current_user.occupation,role:e.data.current_user.role,isVerified:e.data.current_user.isVerified})))}catch(e){e.response.data.error&&o("Something went wrong","error"),o(e.response.data.message,"error")}finally{n(!1)}};return x?s.jsx(E,{to:"/blogs"}):s.jsxs(l,{sx:{width:{xs:"100%",sm:"500px"},margin:"auto",padding:{xs:2,sm:3},boxShadow:3,borderRadius:2,backgroundColor:"background.paper",my:5},children:[s.jsx(d,{id:"login-box-title",variant:"h6",component:"h2",align:"center",children:"Login"}),s.jsxs(l,{component:"form",onSubmit:w,noValidate:!0,sx:{mt:2},className:"flex flex-col gap-3",children:[s.jsx(u,{fullWidth:!0,label:"Email",name:"email",type:"email",value:r.email,onChange:c,error:!!t.email,helperText:t.email}),s.jsx(u,{fullWidth:!0,label:"Password",name:"password",type:"password",value:r.password,onChange:c,error:!!t.password,helperText:t.password}),s.jsx(L,{type:"submit",fullWidth:!0,variant:"contained",className:"button",sx:{mt:3,mb:2},children:g?s.jsx("div",{className:"h-8 w-8 animate-spin  rounded-full border-4 border-e-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"}):"Login"})]}),s.jsxs(d,{align:"center",sx:{mt:2},children:[s.jsx("span",{children:"New user?"})," ",s.jsx(l,{component:"span",sx:{color:"primary.main",cursor:"pointer"},onClick:()=>h("/blogs/register"),children:"Register"})]})]})};export{V as default};
