<template>
  <header
    class="border-b-md opacity-80 position-sticky"
    app
    fixed
    hide-on-scroll
  >
    <nav class="navbar">
      <div class="navbar-start">
        <img class="logo" src="../../public/img/logo.png" alt="Vendre logo" />
      </div>

      <ul class="nav-menu">
        <li class="nav-item custom-header-li">
          <router-link class="custom-header-menu-text" to="#"
            >PRODUCT</router-link
          >
        </li>
        <li class="nav-item custom-header-li">
          <router-link class="custom-header-menu-text" to="#"
            >PARTNERS</router-link
          >
        </li>
        <li class="nav-item custom-header-li">
          <router-link class="custom-header-menu-text" to="#"
            >PRICING</router-link
          >
        </li>
        <li class="nav-item custom-header-li">
          <router-link class="custom-header-menu-text" to="#"
            >REFERENCES</router-link
          >
        </li>
        <li class="nav-item custom-header-li">
          <router-link class="custom-header-menu-text" to="/"
            >EMPLOYEES</router-link
          >
        </li>
      </ul>

      <div class="navbar-end">
        <v-row>
          <router-link to="#">
            <ion-icon name="globe-outline" class="globe"></ion-icon>
          </router-link>

          <router-link to="#" class="text-center">
            <v-btn class="d-md-block d-none" color="#000000">TRY VENDRE</v-btn>
          </router-link>
        </v-row>
        <div class="hamburger" @click="toggleMenu">
          <span class="bar"><ion-icon name="menu-outline"></ion-icon></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppNavbar",
  setup() {
    const toggleMenu = () => {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    return {
      toggleMenu,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header {
  background-color: #ffffff;
  width: 100vw;
  top: 0;
  left: 0;
  margin-bottom: 26px;
  z-index: 9999;
  min-height: 70px;
  padding: 20px 16px;
}
a {
  text-decoration: none;
}
.logo {
  width: 50px;
  height: 30px;
}
.custom-header-li {
  list-style: none;
}
.custom-header-menu-text {
  color: black;
}
.custom-header-menu-text:hover {
  color: gray;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
.navbar-start,
.navbar-end {
  display: flex;
  align-items: center;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 13px;
}
.nav-menu.active {
  left: 0;
}
.nav-link {
  transition: 0.7s ease;
}
.nav-link:hover {
  border-bottom: 3px solid #080808;
  font-size: 20px;
  transition: 0.5s;
  color: #080808;
}
.globe {
  width: 20px;
  height: 30px;
  color: #000000;
  margin-right: 20px;
}
.hamburger {
  display: none;
  cursor: pointer;
}
.bar {
  display: block;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background-color: none;
  width: 60px;
  height: 60px;
  font-weight: 700;
  margin-top: 40px;
}
@media (max-width: 1200px) {
  .hamburger {
    display: block;
  }
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 80px;
    gap: 0;
    flex-direction: column;
    background-color: rgba(229, 227, 227, 0.8);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    z-index: 9999;
    opacity: 2.5;
  }
  .nav-item {
    margin: 16px 0;
  }
  .nav-menu.active {
    left: 0;
  }
}
@media (max-width: 480px) {
  .navbar {
    justify-content: space-between;
    gap: 200px;
  }
  .navbar-start .logo {
    margin-right: 20px;
  }
}
</style>
