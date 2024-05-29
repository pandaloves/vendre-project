<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="primary white--text text-center">
      <v-card-text>
        <h1 class="pb-2 white--text">You can find us at</h1>
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          target="_blank"
        >
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">{{ social.icon }}</v-icon>
          </v-btn>
        </a>
      </v-card-text>

      <v-card-text class="pt-0 text-left text-md-center">
        <v-expansion-panels accordion v-model="panel" multiple>
          <v-expansion-panel
            v-for="(item, i) in items"
            :key="i"
            class="primary col-md-3 col-12 elevation-0"
          >
            <h3 class="d-none d-md-block py-2">{{ item.name }}</h3>
            <v-expansion-panel-header class="d-md-none">{{
              item.name
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <li v-for="tag in item.tags" :key="tag.url">
                <a :href="tag.url" target="_blank" class="white--text">{{
                  tag.urlname
                }}</a>
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Copyright 2024 - {{ new Date().getFullYear() }}
        <a class="white--text" href="https://codepen.io/jettaz">Vendre</a> | It
        is free for use
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      panel: [],
      socials: [
        {
          name: "facebook",
          icon: "mdi-facebook-box",
          url: "https://codepen.io/jettaz",
        },
        {
          name: "twitter",
          icon: "mdi-twitter-box",
          url: "https://codepen.io/jettaz",
        },
        {
          name: "google",
          icon: "mdi-google",
          url: "https://codepen.io/jettaz",
        },
        {
          name: "linkedin",
          icon: "mdi-linkedin-box",
          url: "https://codepen.io/jettaz",
        },
        {
          name: "instagram",
          icon: "mdi-instagram",
          url: "https://codepen.io/jettaz",
        },
      ],
      items: [
        {
          name: "Product",
          tags: [
            { urlname: "Create Websites", url: "https://codepen.io/jettaz" },
            {
              urlname: "Secure Cloud Hosting",
              url: "https://codepen.io/jettaz",
            },
            {
              urlname: "Engage Your Audience",
              url: "https://codepen.io/jettaz",
            },
            { urlname: "Website Support", url: "https://codepen.io/jettaz" },
          ],
        },
        {
          name: "Company",
          tags: [
            { urlname: "About", url: "https://codepen.io/jettaz" },
            { urlname: "Careers", url: "https://codepen.io/jettaz" },
            { urlname: "Support", url: "https://codepen.io/jettaz" },
            { urlname: "Pricing", url: "https://codepen.io/jettaz" },
            { urlname: "FAQ", url: "https://codepen.io/jettaz" },
          ],
        },
        {
          name: "Resources",
          tags: [
            { urlname: "Blog", url: "https://codepen.io/jettaz" },
            { urlname: "eBooks", url: "https://codepen.io/jettaz" },
            { urlname: "Whitepapers", url: "https://codepen.io/jettaz" },
            { urlname: "Comparison Guide", url: "https://codepen.io/jettaz" },
            { urlname: "Website Grader", url: "https://codepen.io/jettaz" },
          ],
        },
        {
          name: "Get Help",
          tags: [
            { urlname: "Help Center", url: "https://codepen.io/jettaz" },
            { urlname: "Contact Us", url: "https://codepen.io/jettaz" },
            { urlname: "Privacy Policy", url: "https://codepen.io/jettaz" },
            { urlname: "Terms", url: "https://codepen.io/jettaz" },
            { urlname: "Login", url: "https://codepen.io/jettaz" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      if (window.innerWidth >= 960) {
        this.panel = [...Array(4).keys()].map((k, i) => i);
      } else {
        this.panel = [];
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 960px) {
  .v-expansion-panel:before {
    box-shadow: none !important;
  }
  .v-expansion-panel:not(:first-child)::after {
    border-top: none;
  }
}
.resize {
  text-align: center;
}
.resize {
  margin-top: 3rem;
  font-size: 1.25rem;
}
.right {
  animation: rightanime 1s linear infinite;
}
.left {
  animation: leftanime 1s linear infinite;
}
@keyframes rightanime {
  50% {
    transform: translateX(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}
@keyframes leftanime {
  50% {
    transform: translateX(-10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-10px);
    opacity: 0;
  }
}
</style>
