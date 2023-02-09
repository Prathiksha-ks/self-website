<template>
  <OutsideWrapper class="experience">
    <div class="wrapper">
      <h1 class="header">EXPERIENCE</h1>
      <p class="main-description">
        Developer with 3+ years of experience in Web Responsive Design and
        Development using Vue Js, TypeScript, JavaScript, HTML5, SCSS, CSS3.
        Developed web application products for desktop and mobile app users.
        Recognized by colleagues and managers as a dedicated performer who
        demonstrates encouragement and teamwork in delivering the project on
        time with quality.
      </p>
      <h1 class="header">WHAT CAN I DO</h1>
      <div class="services">
        <div class="service" v-for="(service, index) in services" :key="index">
          <p class="title">{{ service.title }}</p>
          <p class="description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </OutsideWrapper>
</template>

<script setup lang="ts">
import OutsideWrapper from "@/components/OutsideWrapper.vue";

const services = [
  {
    title: "Web Development",
    description:
      "Create a fast optimized interactive website & deliver quality website with a limited time frame",
  },
  {
    title: "User Friendly Design",
    description:
      "Turn the design into a user friendly experience that supports all screen sizes and browsers",
  },
  {
    title: "Clean Coded",
    description: "Make consistent code format to ensure clear communication",
  },
];
</script>

<style lang="scss" scoped>
.wrapper {
  flex-direction: column;
}

.header {
  text-align: center;

  &:not(:first-child) {
    padding-top: 24px;
  }
}

.main-description {
  padding-bottom: 24px;
}

.services {
  display: flex;
}

.service {
  width: 33.33%;
  text-align: center;
  padding-bottom: 24px;

  &:not(:last-child) {
    margin-right: 24px;
  }
}

.title {
  padding-bottom: 18px;
}

@media screen and (max-width: 999px) {
  .services {
    flex-direction: column;
  }

  .service {
    width: 100%;
    text-align: start;

    &:not(:last-child) {
      margin-right: 0;
    }
  }

  .title {
    padding-bottom: 8px;
  }
}

@media screen and (max-width: 767px) {
  .header:not(:first-child) {
    padding-top: 12px;
  }
}
</style>
