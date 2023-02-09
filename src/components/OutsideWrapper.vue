<template>
  <div class="outside-wrapper" ref="container">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    const windowHeight = window.innerHeight;
    const containerValue = container.value;
    if (windowHeight && containerValue) {
      const containerHeight = containerValue.clientHeight;
      if (windowHeight < containerHeight) {
        containerValue.className += " scroll";
      }
    }
  }, 100);
});
</script>

<style lang="scss" scoped>
.outside-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 100px 130px;

  &.scroll {
    height: 100vh;
    overflow-y: scroll;
  }

  &:not(.home) {
    width: 100vw;
  }
}

@media screen and (max-width: 767px) {
  .outside-wrapper {
    padding: 48px;

    &:not(.home) {
      left: 0;
      top: 0;
      transform: translate(0%, 0%);
    }
  }
}
</style>
