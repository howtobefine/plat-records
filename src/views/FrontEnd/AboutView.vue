<template>
  <teleport to="title">｜關於我們</teleport>
  <!-- banner -->
  <div class="container-fluid">
    <div class="row">
      <div
        class="parallax py-10"
        style="
          background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1685798774344.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IpFuW4hUvPW6Eyqa7uCszaYCAH3bAqktfgN7uTevWHi88kOAOz%2F3U%2Fgt8qfckGwOBq1yi79pFiR1NoNkLdduCS6Lb6%2Fh2tpVhvFMGDd%2B0nvNMLKbtQFxYH%2FoSpRIAgcIf3pd7L4THA66Ij4tn2F%2F6tJiF1aINJd7%2B5%2ByHWWJR2VzyVW3WaYc9tXvsf9hO4RTBXoBFG1XSp7Xahy1Yq8Kb1%2FR0zU1VL81KspkxNLmbw825W3S8jz%2FfqWxjeLzNl8hfcHSRfBrN%2FiaRn%2B2nZL41vovndAoKGhoYPmaFCwZ%2FHCWDuZQow0Xd4Ni8pUgtfoqY9Fz4h156cSBsWZd4JXq1g%3D%3D);
        "
      >
        <h2 class="text-center text-light display-5 mb-5 fw-bold pt-6">ABOUT US</h2>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center mb-0 fs-5">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none link-light hvr-light"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item text-light active" aria-current="page">ABOUT US</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <!-- content -->
  <div class="container-fluid">
    <div class="row pt-5 pb-md-9 pt-md-9">
      <div class="col-md-6 text-center text-md-end">
        <h3 class="fw-bold h2 mb-3 lh-base pe-md-6">
          這到底是什麼盤？！<br />怪盤！珍盤！奇盤！迷盤！
        </h3>
        <p class="lh-xl pe-md-6">
          我們的店裡聚集了各種各樣的唱片。<br />從被認為是必備的經典唱片到就算是藝術家也無法讀出盤名的，<br />封面是空白的，哪個國家也無法輕易辨認的，<br />這些令人費解的、珍奇的、奇特的、迷幻的唱片全部都會收集在這裡，<br />不論是什麼樣的唱片，都應該有它的優點。<br />這個世界上還有許多有趣的唱片，<br />在「盤」這裡可以滿足你對唱片的所有想像！<br />讓我們一起向音樂這無止盡的世界前進吧！
        </p>
      </div>
      <div class="col-md-6 pe-md-0 px-0 align-self-center">
        <swiper
          :spaceBetween="30"
          :effect="'fade'"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }"
          :navigation="true"
          :pagination="{
            clickable: true
          }"
          :modules="modules"
          class="aboutSwiper"
          style="max-height: 500px; width: 100%"
        >
          <swiper-slide
            ><img
              src="@/assets/image/about1.jpg"
              alt="aboutbanner"
              class="d-block w-100 h-100 img-cover" /></swiper-slide
          ><swiper-slide
            ><img
              src="@/assets/image/about2.jpg"
              alt="aboutbanner"
              class="d-block w-100 h-100 img-cover" /></swiper-slide
          ><swiper-slide
            ><img
              src="@/assets/image/about3.jpg"
              alt="aboutbanner"
              class="d-block w-100 h-100 img-cover" /></swiper-slide
          ><swiper-slide
            ><img
              src="@/assets/image/about4.jpg"
              alt="aboutbanner"
              class="d-block w-100 h-100 img-cover"
          /></swiper-slide>
          <swiper-slide
            ><img
              src="@/assets/image/about5.jpg"
              alt="aboutbanner"
              class="d-block w-100 h-100 img-cover"
          /></swiper-slide>
        </swiper>
      </div>
    </div>
    <button type="button" @click="myTestError()">test</button>
    <button type="button" @click="myTestError()">test2</button>
    <button type="button" @click="myTestError()">test3</button>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  data() {
    return {
      modules: [EffectFade, Autoplay, Navigation, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
.aboutSwiper:hover {
  .swiper-button-prev,
  .swiper-button-next {
    opacity: 1;
  }
}
</style>