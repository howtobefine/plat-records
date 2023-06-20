import{m as g,a as _,O as N,_ as m,r as c,o as i,c as n,b as A,d as t,w as e,e as r,t as p,f,n as K,g as x,F as S}from"./index-8cd9b1e8.js";import{c as u}from"./cartStore-58a7a12c.js";import{f as w}from"./favoriteStore-6e4ddc88.js";import"./toast-4b3d810b.js";const F={data(){return{isColor:!1,offCanvas:""}},methods:{handleScroll(){this.isColor=window.scrollY>70},closeNavbar(){this.offCanvas.hide()},...g(u,["getCarts"]),...g(w,["toggleFavorite","removeFavorite","isFavorite"])},computed:{..._(u,["cart"]),..._(w,["myFavoriteList"])},watch:{myFavoriteList:{handler(){localStorage.setItem("myFavoriteList",JSON.stringify(this.myFavoriteList))},deep:!0}},mounted(){window.addEventListener("scroll",this.handleScroll),this.offCanvas=new N("#offcanvasNavbar"),this.getCarts()}},y={class:"container"},B=A("h1",{class:"h3 mb-0"},"Plat Records",-1),O=A("button",{type:"button",class:"navbar-toggler","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},[A("span",{class:"navbar-toggler-icon hvr-light"},[A("i",{class:"bi bi-filter-left fs-1"})])],-1),Y={class:"offcanvas offcanvas-start bg-dark",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},H={class:"offcanvas-header"},T=A("h5",{class:"offcanvas-title text-white",id:"offcanvasNavbarLabel"}," Plat Records ",-1),R=A("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-label":"Close"},null,-1),U={class:"offcanvas-body"},E={class:"navbar-nav justify-content-end flex-grow-1 gap-5 gap-lg-2 me-lg-4"},L={class:"nav-item"},I=A("span",{class:"me-3 d-lg-none"},"—",-1),V={class:"nav-item"},X=A("span",{class:"me-3 d-lg-none"},"—",-1),D={class:"nav-item"},G=A("span",{class:"me-3 d-lg-none"},"—",-1),j={class:"d-flex"},q=A("i",{class:"bi bi-heart-fill fs-5"},null,-1),M={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"},z=A("i",{class:"bi bi-bag-fill fs-5"},null,-1),J={key:0,class:"position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"};function W(s,l,d,k,b,a){const o=c("router-link");return i(),n("nav",{class:K(["navbar navbar-expand-lg navbar-dark fixed-top",{colornav:b.isColor}])},[A("div",y,[t(o,{to:"/",class:"navbar-brand iconFont fs-3 d-none d-lg-block"},{default:e(()=>[B]),_:1}),A("div",null,[O,A("div",Y,[A("div",H,[t(o,{to:"/",class:"text-decoration-none",onClick:a.closeNavbar},{default:e(()=>[T]),_:1},8,["onClick"]),R]),A("div",U,[A("ul",E,[A("li",L,[t(o,{to:"/about",class:"nav-link link-light px-lg-3 hvr-grow",onClick:a.closeNavbar},{default:e(()=>[I,r("關於我們")]),_:1},8,["onClick"])]),A("li",V,[t(o,{to:{path:"/products"},class:"nav-link link-light px-lg-3 hvr-grow",onClick:a.closeNavbar},{default:e(()=>[X,r("唱片專區")]),_:1},8,["onClick"])]),A("li",D,[t(o,{to:"/articles",class:"nav-link link-light px-lg-3 hvr-grow",onClick:a.closeNavbar},{default:e(()=>[G,r("文章列表")]),_:1},8,["onClick"])])])])])]),A("div",j,[A("div",null,[t(o,{to:"/favorite",class:"nav-link link-light px-2 me-2 hvr-shrink hvr-light"},{default:e(()=>[q,s.myFavoriteList.length>0?(i(),n("span",M,p(s.myFavoriteList.length),1)):f("",!0)]),_:1})]),t(o,{to:"/cart",class:"position-relative nav-link link-light px-2 hvr-shrink hvr-light"},{default:e(()=>{var h,v;return[z,((h=s.cart.carts)==null?void 0:h.length)>0?(i(),n("span",J,p((v=s.cart.carts)==null?void 0:v.length),1)):f("",!0)]}),_:1})])])],2)}const $=m(F,[["render",W]]),P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB/lBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAgEHAgIIAgIVBgUWBgUXBgUYBgUYBwYZBwYaBwYbBwYcBwYcCAYdCAYdCAcmCgkoCwkpCwkqCwkrCworDAosDAotDAo7EA08EA09EA5NFRFOFRJzHxp0Hxp1Hxp1IBp2IBt3IBt9Ihx+Ihx/Ih2AIh2BIx2CIx2TJyGTKCGUKCGVKCGVKCKXKCKXKSKYKSKZKSKdKiOgKyShLSauSkSuS0WvS0XAcm3Ac2/BdXD05uX05+b16Of16ej//v7///8vwz9gAAAAaXRSTlMABwgJCgsQERIVFhcYGRseHyAhIiQlKywtLzA6Oz0+QEtMTU5PY2RlZmdoamtsd3h6e4CChIWHiIuMkZKTlJaYmaKoqaqsrcTFx8jMzc7Q0d7f4OHj5OXm5+nq6+zu7/Dx8vP09fb3+P4BCVIwAAAAAWJLR0SpJw8GBAAAAvJJREFUGBmdwYlDFHUYBuAXXKA2NwPJUlK0TGEhMY/d4sjy1tS8zQNUEuNVRKioDK9s8QoVjQrabyHxYv5LdxGd+X5zMOPzwF+iuqYh3dKSbqipno2oKus3H6PD0U11lQitrH47PWyrK0MY8VXH6eO7xrcxk5L09wxwOhVDoKX7OIO9H8JfcSND+CoGHxW7GMrOcniad4AhfbsAHj5oY2htVXB5v5URnFgAQ8UhRnKwHErxTkb0zSw4rWNkLXBYytewBK/E9tBH1w+9Z+ljXwleStPLLwN3/5O80cGBn+llDabN7qDb1fviMHSFbqcTeOFzupy/LYab3XRJY8ob7TRdeCAuf1+k6WQpCupp+iMrHrLXaEqiYDsNl7LiKdtPw1bkvUvD+X/Ex3A3tc65AD6h4Zb4+pOGJIDN1K5KgMvUNgA4Ru2+BBiidgRIUPtVAvVRi6Oa2oA45cbHc+KUobYQNdTuisOjZ5b1dEIc7lBbhk+pjYrtkVUwOSG2EWoNSFHpElvumTXlSU5sXVTWoplKj9j+t6aNia2HShOaqfSIbdyaNia2HipNSFHpElvuqTXlcU5sZ6msxUpqo2KbmLTyJh+K7V9qDVhO7Y44TDyxrMcPxWGQ2seoppYRp9z4WE6cMtQWIkGtTwL9SC0OHKU2JAHuUTsMYBO1KxLgErX1AOppuCm+rtNQC6CShu5h8fHXOWqdFcjbRkN/Vjxlf6NhCwrqaLqWFQ/Z32mqRUFZO00XHojLcD9NJ0ox5TO6dN8Qw/VzdEnhhbc66HZ5SBzuXaTbqTimpeilLzM4Inkjg5mf6GU1Xortpo8zvb1n6GNvCV75iK9hMRy+YGRNcCrawYh2FUMpP8hIDrwDw3utjOD4fLhUtTG01ip4mLefIR2aD0/lOxjK13Pgo6iRIXxZBH9L9nAGuxcjUGxNBwOcWj0LM3lzVRt9tDcmEEZpcivdOrfUliK0ucmNR+hweEOyAlHFFy1fkWpuTq1YtigOX88BddKqRDp+JnYAAAAASUVORK5CYII=",Q={},Z={class:"bg-dark py-4 py-lg-5"},AA={class:"container px-3 px-lg-0"},tA={class:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},sA=A("img",{src:P,alt:"logo",width:"40",class:"me-3"},null,-1),oA=x('<ul class="d-flex list-unstyled mb-0 h4 me-lg-3"><li><a href="#" class="text-white mx-3 hvr-grow hvr-light"><i class="bi bi-facebook"></i></a></li><li><a href="#" class="text-white mx-3 hvr-grow hvr-light"><i class="bi bi-instagram"></i></a></li><li><a href="#" class="text-white ms-3 hvr-grow hvr-light"><i class="bi bi-line"></i></a></li></ul>',1),eA={class:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},aA=x('<div class="mb-md-0 mb-5 d-flex flex-column"><a class="mb-0 text-decoration-none link-light mb-1 hvr-light" href="tel:+886-2-34567890"><i class="bi bi-telephone-fill me-2"></i>02-3456-7890</a><a class="mb-0 text-decoration-none link-light hvr-light" href="mailto:b4808697b@gmail.com"><i class="bi bi-envelope-fill me-2"></i>b4808697b@gmail.com</a></div>',1),lA={class:"mb-md-0 mb-1 d-flex flex-column text-md-end text-center align-self-center me-lg-3"},iA=A("p",{class:"mb-1"},"© 2023. howtobefine All Rights Reserved.",-1),nA={class:"mb-0"};function rA(s,l){const d=c("router-link");return i(),n("div",Z,[A("div",AA,[A("div",tA,[t(d,{to:"/",class:"text-white h4 text-decoration-none hvr-grow"},{default:e(()=>[sA,r("Plat Records")]),_:1}),oA]),A("div",eA,[aA,A("div",lA,[iA,A("p",nA,[r(" 僅個人練習使用．不做商業用途｜"),t(d,{to:"/login",class:"text-decoration-none link-light hvr-light"},{default:e(()=>[r("管理員登入")]),_:1})])])])])])}const cA=m(Q,[["render",rA]]),dA={data(){return{isShow:!1}},components:{FrontNavbar:$,FrontFooter:cA},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){const s=document.documentElement,l=s.scrollHeight-s.clientHeight;s.scrollTop/l>.15?this.isShow=!0:this.isShow=!1}},mounted(){document.addEventListener("scroll",this.handleScroll)}},hA={key:0,class:"position-fixed end-0 bottom-0 pe-4 pb-4 hvr-grow z-index-max"},vA=A("i",{class:"bi bi-arrow-up-short fs-5"},null,-1),bA=[vA];function fA(s,l,d,k,b,a){const o=c("FrontNavbar"),h=c("router-view"),v=c("FrontFooter");return i(),n(S,null,[t(o),t(h),t(v),b.isShow?(i(),n("div",hA,[A("button",{type:"button",class:"btn btn-dark bg-danger border-0",onClick:l[0]||(l[0]=(...C)=>a.scrollToTop&&a.scrollToTop(...C))},bA)])):f("",!0)],64)}const uA=m(dA,[["render",fA]]);export{uA as default};
