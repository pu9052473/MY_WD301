import{u as g,j as e}from"./index-Ca0gi0pd.js";import{A as b}from"./constants-qZa9FZnL.js";import{u as x}from"./index.esm-CsLqHJ1C.js";const f=()=>{const{register:s,handleSubmit:t,formState:{errors:a}}=x();console.log(a);const n=g(),i=async l=>{const{organisationName:u,userName:d,userEmail:m,userPassword:c}=l;try{const o=await fetch(`${b}/organisations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u,user_name:d,email:m,password:c})});if(!o.ok)throw new Error("Sign-up failed");const r=await o.json();localStorage.setItem("authToken",r.token),localStorage.setItem("userData",JSON.stringify(r.user)),n("/account")}catch(o){console.error("Sign-up failed:",o)}};return e.jsxs("form",{onSubmit:t(i),children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Organisation:"}),e.jsx("input",{...s("organisationName",{required:!0}),name:"organisationName",id:"organisationName",className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Name:"}),e.jsx("input",{...s("userName",{required:!0}),name:"userName",id:"userName",className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Email:"}),e.jsx("input",{...s("userEmail",{required:!0}),id:"userEmail",className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Password:"}),e.jsx("input",{...s("userPassword",{required:!0}),name:"userPassword",id:"userPassword",className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"})]}),e.jsx("button",{type:"submit",className:"w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4",children:"Sign Up"})]})},N=()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md",children:[e.jsx("h1",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"Sign up"}),e.jsx(f,{})]})});export{N as default};
