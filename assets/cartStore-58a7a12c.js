import{D as n,Q as i}from"./index-8cd9b1e8.js";import{T as s}from"./toast-4b3d810b.js";const{VITE_API:o,VITE_PATH:c}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"howtobefine",BASE_URL:"/plat-records/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p=n("cartStore",{state:()=>({cart:[],totalQty:0,loadingItem:""}),actions:{addToCart(t,e=1){const a=`${o}api/${c}/cart`,r={product_id:t,qty:e};this.loadingItem=t,i.post(a,{data:r}).then(d=>{s.fire({icon:"success",title:`${d.data.message}`}),this.getCarts(),this.loadingItem=""}).catch(d=>{s.fire({icon:"error",title:`${d.response.data.message}`})})},getCarts(){const t=`${o}api/${c}/cart`;i.get(t).then(e=>{this.totalQty=0,this.cart=e.data.data,this.cart.carts.forEach(a=>this.totalQty+=a.qty)}).catch(e=>{s.fire({icon:"error",title:`${e.response.data.message}`})})},updateCartItem(t){const e=`${o}api/${c}/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty};this.loadingItem=t.id,i.put(e,{data:a}).then(()=>{this.getCarts(),this.loadingItem=""}).catch(r=>{s.fire({icon:"error",title:`${r.response.data.message}`})})},addQty(t){const e=`${o}api/${c}/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty+1};this.loadingItem=t.id,i.put(e,{data:a}).then(()=>{this.getCarts(),this.loadingItem=""}).catch(r=>{s.fire({icon:"error",title:`${r.response.data.message}`})})},decreaseQty(t){const e=`${o}api/${c}/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty-1};this.loadingItem=t.id,i.put(e,{data:a}).then(()=>{this.getCarts(),this.loadingItem=""}).catch(r=>{s.fire({icon:"error",title:`${r.response.data.message}`})})},deleteItem(t){const e=`${o}api/${c}/cart/${t.id}`;this.loadingItem=t.id,i.delete(e).then(a=>{s.fire({icon:"success",title:`${a.data.message}`}),this.getCarts(),this.loadingItem=""}).catch(a=>{s.fire({icon:"error",title:`${a.response.data.message}`})})},deleteItems(){const t=`${o}api/${c}/carts`;i.delete(t).then(()=>{s.fire({icon:"success",title:"已刪除全部品項"}),this.getCarts()}).catch(e=>{s.fire({icon:"error",title:`${e.response.data.message}`})})}}});export{p as c};
