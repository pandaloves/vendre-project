<template>
  <v-footer class="border-t-md">
    <router-link to="#">
      <img
        src="../../public/img/link.png"
        alt="footer image"
        class="link-image1"
      />
    </router-link>

    <router-link to="#">
      <img
        src="../../public/img/opimizers.png"
        alt="footer image"
        class="link-image2"
      />
    </router-link>
    <router-link to="#">
      <img
        src="../../public/img/Gasell.png"
        alt="footer image"
        class="link-image3"
      />
    </router-link>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  background-color: #ffffff;
  width: 100vw;
  bottom: 0;
  left: 0;
  margin-top: 30px;
  min-height: 70px;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
}
.link-image1 {
  width: 50px;
  height: 50px;
}
.link-image2 {
  width: 70px;
  height: 50px;
}
.link-image3 {
  width: 60px;
  height: 50px;
}
</style>
