import{T as l}from"./toast-6c96786e.js";import{_ as w,r as c,o as d,c as g,h as b,e as u,T as v,b as e,d as p,k as m,l as _,w as V,F as x}from"./index-45ab631b.js";const{VITE_API:T}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"howtobefine",BASE_URL:"/plat-records/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},k={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{login(){this.isLoading=!0;const n=`${T}admin/signin`;this.$http.post(n,this.user).then(s=>{const{token:i,expired:r}=s.data;document.cookie=`howToken=${i};expires=${new Date(r)};`,l.fire({icon:"success",title:`${s.data.message}`}),this.isLoading=!1,this.$router.push("/admin/products")}).catch(s=>{l.fire({icon:"error",title:`${s.response.data.message}`})})}}},E={class:"container mt-5"},L={class:"row justify-content-center"},P={class:"col-md-6"},y=e("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),B={class:"mb-2"},D=e("label",{for:"inputEmail"},"信箱",-1),I={class:"mb-2"},A=e("label",{for:"inputPassword"},"密碼",-1),$={class:"d-flex justify-content-between mt-5"};function C(n,s,i,r,t,a){const h=c("VueLoading"),f=c("router-link");return d(),g(x,null,[(d(),b(v,{to:"title"},[u("｜登入")])),e("div",E,[p(h,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("form",L,[e("div",P,[y,e("div",B,[D,m(e("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":s[0]||(s[0]=o=>t.user.username=o),required:"",autofocus:""},null,512),[[_,t.user.username]])]),e("div",I,[A,m(e("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>t.user.password=o),placeholder:"Password",required:""},null,512),[[_,t.user.password]])]),e("div",$,[p(f,{to:"/",class:"btn btn-success"},{default:V(()=>[u("回前台首頁")]),_:1}),e("button",{class:"btn btn-danger",type:"button",onClick:s[2]||(s[2]=(...o)=>a.login&&a.login(...o))}," 登入 ")])])])])],64)}const S=w(k,[["render",C]]);export{S as default};
