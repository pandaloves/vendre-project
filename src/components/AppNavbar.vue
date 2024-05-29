<template>
  <header
    class="border-b-md opacity-70 position-sticky"
    app
    fixed
    hide-on-scroll
  >
    <nav class="navbar">
      <img
        style="width: 100px; height: 50px"
        src="../../public/img/logo.png"
        alt="Vendre"
      />

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
          <router-link class="custom-header-menu-text" to="EmployeesTabs"
            >EMPLOYEES</router-link
          >
        </li>
      </ul>

      <v-row>
        <router-link to="/" class="nav-branding text-center">
          <ion-icon name="globe-outline" class="globe"></ion-icon>
        </router-link>

        <router-link to="/" class="text-center">
          <v-btn class="try-btn">TRY VENDRE</v-btn>
        </router-link>
      </v-row>
      <div class="hamburger" @click="toggleMenu">
        <span class="bar">PRODUCT</span>
        <span class="bar">PARTNERS</span>
        <span class="bar">PRICING</span>
        <span class="bar">REFERENCES</span>
        <span class="bar">EMPLOYEES</span>
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
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  margin-bottom: 20px;
  z-index: 9999;
}

.custom-header-li {
  list-style: none;
}

.navbar {
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
  padding: 0 24px;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 13px;
}

.custom-header-li {
  color: black;
  text-decoration: none;
}

.custom-header-li:hover {
  color: gray;
}

.nav-menu.active {
  left: 0;
}

.nav-link {
  transition: 0.7s ease;
}

.try-btn {
  background-color: black;
  color: white;
}

.nav-link:hover {
  border-bottom: 3px solid #080808;
  font-size: 20px;
  transition: 0.5s;
  color: #080808;
}

.globe {
  width: 30px;
  height: 30px;
  color: #000000;
  margin: auto 20px;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 100vw;
  height: 500px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: rgb(244, 243, 243);
}

@media (max-width: 767px) {
  .hamburger {
    display: block;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    gap: 0;
    flex-direction: column;
    background-color: #080808;
    width: 100%;
    text-align: center;
    transition: 0.3s;
  }

  .nav-item {
    margin: 16px 0;
  }

  .nav-menu:active {
    left: 0;
  }
}
</style>
