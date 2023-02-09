<template>
  <div class="icons">
    <div
      class="icon"
      v-for="icon in icons"
      :key="icon.name"
      @click="openLink(icon.link)"
    >
      <img class="icon-img" :src="getImageUrl(icon.name)" :alt="icon.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const icons = ref<Array<any>>([
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/prathiksha-k-671012265/",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/prathiksha142/",
  },
  {
    name: "telegram",
    link: "https://t.me/prathiksha214",
  },
]);

const getImageUrl = (name: string): string =>
  new URL(`/src/assets/icon-${name}.svg`, import.meta.url).href;

const openLink = (link: string) => {
  window.open(link);
};
</script>

<style lang="scss" scoped>
.icons {
  position: fixed;
  top: 42%;
  margin-left: 24px;
  z-index: 1;
}

.icon {
  margin: 24px 10px;
  cursor: pointer;
}

.icon-img {
  width: 24px;
  height: 24px;
}

@media screen and (max-width: 767px) {
  .icons {
    display: flex;
    justify-content: center;
    margin-left: 0;
    top: 90%;
    left: 68px;
  }

  .icon {
    margin-bottom: 10px;
  }

  .icon-img {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-height: 515px) {
    .icons {
      position: unset;
    }
  }
}
</style>
