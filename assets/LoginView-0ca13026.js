import{T as l}from"./toast-4b3d810b.js";import{_ as h,r as c,o as f,c as w,d,b as s,k as u,l as p,w as g,e as b}from"./index-8cd9b1e8.js";const{VITE_API:v}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"howtobefine",BASE_URL:"/plat-records/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{login(){this.isLoading=!0;const n=`${v}admin/signin`;this.$http.post(n,this.user).then(e=>{const{token:i,expired:r}=e.data;document.cookie=`howToken=${i};expires=${new Date(r)};`,l.fire({icon:"success",title:`${e.data.message}`}),this.isLoading=!1,this.$router.push("/admin/products")}).catch(e=>{l.fire({icon:"error",title:`${e.response.data.message}`})})}}},x={class:"container mt-5"},E={class:"row justify-content-center"},k={class:"col-md-6"},T=s("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),L={class:"mb-2"},P=s("label",{for:"inputEmail"},"信箱",-1),y={class:"mb-2"},D=s("label",{for:"inputPassword"},"密碼",-1),I={class:"d-flex justify-content-between mt-5"};function A(n,e,i,r,o,a){const m=c("VueLoading"),_=c("router-link");return f(),w("div",x,[d(m,{active:o.isLoading,"z-index":1060},null,8,["active"]),s("form",E,[s("div",k,[T,s("div",L,[P,u(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t),required:"",autofocus:""},null,512),[[p,o.user.username]])]),s("div",y,[D,u(s("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t),placeholder:"Password",required:""},null,512),[[p,o.user.password]])]),s("div",I,[d(_,{to:"/",class:"btn btn-success"},{default:g(()=>[b("回前台首頁")]),_:1}),s("button",{class:"btn btn-danger",type:"button",onClick:e[2]||(e[2]=(...t)=>a.login&&a.login(...t))}," 登入 ")])])])])}const C=h(V,[["render",A]]);export{C as default};
