<template>
  <OutsideWrapper class="home">
    <div class="content">
      <p class="first-text">CREATIVE</p>
      <h1 class="second-text">DEVELOPER</h1>
      <p class="third-text">Frontend Web Developer</p>
      <button class="contact-btn" @click="$emit('contact', Tabs.CONTACT)">
        GET IN TOUCH
      </button>
    </div>
  </OutsideWrapper>
</template>

<script setup lang="ts">
import { Tabs } from "@/types/index";
import OutsideWrapper from "@/components/OutsideWrapper.vue";

defineEmits(["contact"]);
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}

.first-text {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 10px;
  animation: 1.5s rightIn ease-out;
}

.second-text {
  padding: 8px 12px;
  margin: 12px auto;
  font-size: 30px;
  letter-spacing: 12px;
  color: #000000;
  background-color: #50c8f0;
  width: fit-content;
}

.third-text {
  font-size: 22px;
  letter-spacing: 1px;
  animation: 1.5s leftIn ease-out;
}

.contact-btn {
  font-size: 16px;
  animation: 1s lineUp ease-out;
}

@media screen and (max-width: 767px) {
  .first-text {
    font-size: 26px;
  }

  .second-text {
    font-size: 32px;
  }

  .third-text {
    font-size: 20px;
  }
}

@media screen and (max-width: 500px) {
  .first-text {
    font-size: 22px;
    letter-spacing: 5px;
  }

  .second-text {
    margin: 8px auto;
    font-size: 26px;
    letter-spacing: 3px;
  }

  .third-text {
    font-size: 14px;
  }
}

@media screen and (max-width: 300px) {
  .home {
    padding: 20px;
  }
}

@keyframes leftIn {
  0% {
    opacity: 0;
    transform: translatex(-20%);
  }
  20% {
    opacity: 0;
  }
  50%,
  100% {
    opacity: 1;
    transform: translatex(0%);
  }
}

@keyframes rightIn {
  0% {
    opacity: 0;
    transform: translatex(20%);
  }
  20% {
    opacity: 0;
  }
  50%,
  100% {
    opacity: 1;
    transform: translatex(0%);
  }
}
</style>
