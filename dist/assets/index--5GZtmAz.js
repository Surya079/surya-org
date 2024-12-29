import{s as u,m as v,r as x,b as N,j as e,d as S,e as I,g as k,f as C,L as A}from"./index-DjCb9QRt.js";import{m as o}from"./proxy-5NgnpoaW.js";const L=i=>{const{absolute:t,children:s,classes:d,flexItem:p,light:c,orientation:r,textAlign:a,variant:n}=i;return I({root:["root",t&&"absolute",n,c&&"light",r==="vertical"&&"vertical",p&&"flexItem",s&&"withChildren",s&&r==="vertical"&&"withChildrenVertical",a==="right"&&r!=="vertical"&&"textAlignRight",a==="left"&&r!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",r==="vertical"&&"wrapperVertical"]},k,d)},D=u("div",{name:"MuiDivider",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:s}=i;return[t.root,s.absolute&&t.absolute,t[s.variant],s.light&&t.light,s.orientation==="vertical"&&t.vertical,s.flexItem&&t.flexItem,s.children&&t.withChildren,s.children&&s.orientation==="vertical"&&t.withChildrenVertical,s.textAlign==="right"&&s.orientation!=="vertical"&&t.textAlignRight,s.textAlign==="left"&&s.orientation!=="vertical"&&t.textAlignLeft]}})(v(({theme:i})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:i.vars?`rgba(${i.vars.palette.dividerChannel} / 0.08)`:C(i.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:i.spacing(2),marginRight:i.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:i.spacing(1),marginBottom:i.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:t})=>!!t.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:t})=>t.children&&t.orientation!=="vertical",style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(i.vars||i).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:t})=>t.orientation==="vertical"&&t.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(i.vars||i).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:t})=>t.textAlign==="right"&&t.orientation!=="vertical",style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:t})=>t.textAlign==="left"&&t.orientation!=="vertical",style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),R=u("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(i,t)=>{const{ownerState:s}=i;return[t.wrapper,s.orientation==="vertical"&&t.wrapperVertical]}})(v(({theme:i})=>({display:"inline-block",paddingLeft:`calc(${i.spacing(1)} * 1.2)`,paddingRight:`calc(${i.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${i.spacing(1)} * 1.2)`,paddingBottom:`calc(${i.spacing(1)} * 1.2)`}}]}))),l=x.forwardRef(function(t,s){const d=N({props:t,name:"MuiDivider"}),{absolute:p=!1,children:c,className:r,orientation:a="horizontal",component:n=c||a==="vertical"?"div":"hr",flexItem:f=!1,light:b=!1,role:m=n!=="hr"?"separator":void 0,textAlign:j="center",variant:y="fullWidth",...w}=d,h={...d,absolute:p,component:n,flexItem:f,light:b,orientation:a,role:m,textAlign:j,variant:y},g=L(h);return e.jsx(D,{as:n,className:S(g.root,r),role:m,ref:s,ownerState:h,"aria-orientation":m==="separator"&&(n!=="hr"||a==="vertical")?a:void 0,...w,children:c?e.jsx(R,{className:g.wrapper,ownerState:h,children:c}):null})});l&&(l.muiSkipListHighlight=!0);const T=()=>{const[i,t]=x.useState(!1);return x.useState(""),x.useState(0),e.jsxs("div",{children:[e.jsx("div",{className:"bg-slate-400 pt-4 flex justify-center",children:e.jsx(o.h2,{initial:{opacity:0,y:-100},whileInView:{opacity:1,y:0,transition:{duration:1}},className:"text-5xl text-slate-950 w-fit py-4 font-bold ",children:"About Me"})}),e.jsxs("div",{className:"grid grid-cols-1 bg-slate-400 py-2 px-4 items-center md:grid-cols-2",children:[e.jsx("div",{className:"p-3  md:border-r-[1px] border-black ",children:e.jsxs("p",{className:"!text-justify ",children:[e.jsx("strong",{className:"text-2xl ",children:"Hi, "}),"I am Surya, a Bachelor of Science in Computer Science graduate with a passion for technology and web development. I have completed a Python Full Stack Developer course and possess a top technical skills. I am very strong about using flex & grid system by in tailwind classes.You could see this website how I'm structured responsive using tailwind css. I am also committed to personal and professional growth, consistently learning new technologies and refining my abilities to build impactful projects. I am eager to contribute to challenging projects and am ready to relocate or adapt to any opportunity that helps me grow further in my career."]})}),e.jsx("div",{children:e.jsx("div",{className:"relative overflow-hidden flex h-[300px] w-full flex-col items-center justify-center",children:e.jsx(o.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:.7},className:"card-wrapper motion-preset-slide-left relative h-[200px] w-[200px]",children:e.jsxs("div",{className:"card-content rounded-md flex items-center justify-center text-xs",children:[e.jsx("img",{src:"/images/Surya-profile.jpg",alt:"Example",className:`transition hover:scale-[1.2] rounded-md ${i?"blur-none":"blur-md"}`}),!i&&e.jsxs(A,{to:"/blogs",className:"absolute text-white button",children:["Go to blog & ",e.jsx("br",{})," Login to View"]})]})})})})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex bg-slate-400 flex-col items-center pt-2 justify-center",children:[e.jsx(o.div,{initial:{opacity:0,y:-100},whileInView:{opacity:1,y:0,transition:{duration:1}},className:"md:text-3xl text-sm rounded-2xl text-white  text-center px-6 w-fit py-4 font-bold ",children:"My Computer Journey Starts With"}),e.jsx(o.div,{initial:{opacity:0,y:-100},whileInView:{opacity:1,y:0,transition:{duration:1}},className:"text-3xl text-slate-950 w-fit py-4 font-bold ",children:"Education"})]}),e.jsx("div",{className:"relative bg-slate-400 flex h-[200px]",children:e.jsxs("div",{className:"grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center",children:[e.jsxs("div",{className:"text-[11px] h-full overflow-hidden border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row",children:[e.jsxs("span",{className:"flex text-[10px] md:text-2xl items-center flex-col gap-2",children:["SSLC",e.jsx("span",{className:"text-[7px] md:text-xs text-left",children:"(jun 2017 - april 2018)"})]}),e.jsx(l,{className:"bg-slate-950 w-[50px] motion-preset-slide-right md:w-[350px]"})]}),e.jsx("div",{className:"text-[10px] md:text-[16px] h-full flex items-center p-5",children:e.jsx("p",{className:"text-center",children:"SSLC (10th Standard): Completed at Government Higher Secondary School with an 84% score, showcasing strong academic performance in foundational subjects."})})]})}),e.jsx("div",{className:"relative bg-slate-400 flex h-[200px]",children:e.jsxs("div",{className:"grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center",children:[e.jsxs("div",{className:"text-[11px] h-full overflow-hidden border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row",children:[e.jsxs("span",{className:"flex text-[10px] md:text-2xl items-center flex-col gap-2",children:["HSC",e.jsx("span",{className:"text-[7px] md:text-xs text-left",children:"(jun 2019 - may 2020)"})]}),e.jsx(l,{className:"bg-slate-950 w-[50px] motion-preset-slide-right md:w-[350px]"})]}),e.jsx("div",{className:"text-[10px] h-full flex md:text-[16px] items-center p-5",children:"HSC (12th Standard): Achieved 62%, focusing on computer science related fundamentals."})]})}),e.jsx("div",{className:"relative bg-slate-400 flex h-[200px]",children:e.jsxs("div",{className:"grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center",children:[e.jsxs("div",{className:"text-[11px] h-full overflow-hidden border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row",children:[e.jsxs("span",{className:"flex text-[10px] md:text-2xl items-center text-center flex-col gap-2",children:["Bachelor's of Computer Science",e.jsx("span",{className:"text-[7px] md:text-xs text-left",children:"(jun 2020 - may 2023)"})]}),e.jsx(l,{className:"bg-slate-950 w-[50px]  motion-preset-slide-right md:w-[350px]"})]}),e.jsx("div",{className:"text-[10px] h-full flex md:text-[16px] items-center p-5",children:"B.Sc. in Computer Science: Graduated with 75.5%, developing strong programming and problem-solving skills."})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex bg-slate-400 flex-row justify-center",children:e.jsx(o.div,{initial:{opacity:0,y:-100},whileInView:{opacity:1,y:0,transition:{duration:1}},className:"text-3xl text-slate-950 w-fit py-4 font-bold ",children:"Work Experience"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"relative flex h-[200px]",children:[e.jsx("div",{className:"absolute inset-1 blur-sm bg-[url('/images/cognizant.jpg')]  md:bg-fixed bg-no-repeat bg-cover z-[-10] opacity-50"}),e.jsxs("div",{className:"grid grid-cols-2  justify-center py-2 px-4 md:grid-cols-2 items-center",children:[e.jsxs("div",{className:"text-[11px] h-full border-r-[1px] justify-between border-black font-bold p-5 flex items-center gap-2 flex-row",children:[e.jsxs("span",{className:"flex text-[10px] items-center flex-col gap-2",children:["Process Executive",e.jsx("span",{className:"text-[7px] text-left",children:"( jan 2024 - Oct 2024 )"})]}),e.jsx(l,{className:"bg-slate-950 w-[50px] motion-preset-slide-right md:w-[350px]"})]}),e.jsx("div",{className:"text-[10px]  h-full font-bold flex items-center p-3",children:e.jsx("p",{className:"text-[7px] md:text-[11px]",children:"At Cognizant Technology Solutions, Chennai, I worked as a Process Executive from jan 8, 2024 to October 29, 2024. During this time, I developed strong written communication skills by managing detailed reports and professional correspondence. I focused on delivering client-centric solutions, ensuring their satisfaction through timely and accurate task execution. Collaborating with cross-functional teams, I streamlined processes and maintained high standards of quality and efficiency. This role enhanced my ability to prioritize tasks effectively."})})]})]}),e.jsx("div",{className:"bg-slate-400 flex justify-center",children:e.jsx(o.h2,{initial:{opacity:0,y:-100},whileInView:{opacity:1,y:0,transition:{duration:1}},className:"text-2xl text-slate-950  w-fit py-4 font-bold "})}),e.jsxs("div",{className:"relative h-[200px] flex",children:[e.jsx("div",{className:"absolute inset-0 blur-sm bg-[url('/images/hazhtech.jpg')] md:bg-fixed bg-no-repeat bg-cover z-[-10] opacity-50"}),e.jsxs("div",{className:"grid grid-cols-2 py-2 px-4 md:grid-cols-2 items-center",children:[e.jsx("div",{className:"text-[10px]  h-full border-r-[1px] border-black flex items-center font-bold p-4 ",children:e.jsx("p",{className:"text-[7px]  md:text-[11px]",children:"I am currently working as a Full Stack Development Intern at Hazhtech Solutions, where I am responsible for building responsive web pages and implementing functionality using JavaScript. My role also involves integrating APIs to ensure a seamless and dynamic user experience. This internship has allowed me to enhance my skills in front-end development, responsive design, and backend integration while contributing to creating user-friendly web applications."})}),e.jsxs("div",{className:"text-[10px] p-5 flex h-full items-center font-bold justify-between gap-2 flex-row",children:[e.jsx(l,{className:"bg-slate-950 w-[50px] md:w-[350px]"}),e.jsxs("span",{className:"flex text-[10px] items-center flex-col gap-2",children:["Full Stack Intern",e.jsx("span",{className:"text-[7px] text-left",children:"( jan 2024 - Present )"})]})]})]})]})]})]})]})]})};export{T as default};
