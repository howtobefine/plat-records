<template>
  <div class="bg-dark py-4 py-lg-5">
    <div class="container px-3 px-lg-0">
      <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
        <router-link to="/" class="text-white h4 text-decoration-none hvr-grow"
          ><img src="@/assets/image/logo.png" alt="logo" width="40" class="me-3" />Plat
          Records</router-link
        >
        <ul class="d-flex list-unstyled mb-0 h4 me-lg-3">
          <li>
            <a href="#" class="text-white mx-3 hvr-grow hvr-light"
              ><i class="bi bi-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3 hvr-grow hvr-light"
              ><i class="bi bi-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3 hvr-grow hvr-light"><i class="bi bi-line"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-5 d-flex flex-column">
          <a class="mb-0 text-decoration-none link-light mb-1 hvr-light" href="tel:+886-2-34567890"
            ><i class="bi bi-telephone-fill me-2"></i>02-3456-7890</a
          >
          <a
            class="mb-0 text-decoration-none link-light hvr-light"
            href="mailto:b4808697b@gmail.com"
            ><i class="bi bi-envelope-fill me-2"></i>b4808697b@gmail.com</a
          >
        </div>
        <div
          class="mb-md-0 mb-1 d-flex flex-column text-md-end text-center align-self-center me-lg-3"
        >
          <p class="mb-1">© 2023. howtobefine All Rights Reserved.</p>
          <p class="mb-0">
            僅個人練習使用．不做商業用途｜<router-link
              to="/login"
              class="text-decoration-none link-light hvr-light"
              >管理員登入</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>