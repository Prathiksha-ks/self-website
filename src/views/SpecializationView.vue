<template>
  <OutsideWrapper class="specialization">
    <div class="wrapper">
      <div
        class="each-content"
        v-for="(eachData, index) in specializationData"
        :key="index"
      >
        <h1 class="header">{{ eachData.header }}</h1>
        <div
          class="content"
          v-for="(data, index) in eachData.data"
          :key="index"
        >
          <p class="title">{{ data.title }}</p>
          <div v-if="isSkills(eachData.header)" class="progress-bar outside">
            <div
              class="progress-bar inside"
              :style="`width: ${data.description}`"
            ></div>
          </div>
          <p :class="['description', { skills: isSkills(eachData.header) }]">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </OutsideWrapper>
</template>

<script setup lang="ts">
import OutsideWrapper from "@/components/OutsideWrapper.vue";

const specializationData = [
  {
    header: "EDUCATION",
    data: [
      {
        title: "Bachelor of Engineering",
        description: "Sahyadri College of Engineering and Management",
      },
    ],
  },
  {
    header: "EXPERIENCE",
    data: [
      {
        title: "Software Engineer",
        description: "Robosoft Technologies Pvt Ltd",
      },
    ],
  },
  {
    header: "SKILLS",
    data: [
      {
        title: "Vue",
        description: "90%",
      },
      {
        title: "TypeScript & JavaScript",
        description: "80%",
      },
      {
        title: "HTML5",
        description: "95%",
      },
      {
        title: "SCSS & CSS3",
        description: "90%",
      },
    ],
  },
];

const isSkills = (header: string): boolean => header === "SKILLS";
</script>

<style lang="scss" scoped>
.each-content {
  width: 50%;

  &:not(:last-child) {
    width: 25%;
    padding-right: 24px;
  }
}

.progress-bar {
  height: 6px;
  border-radius: 8px;
  width: 100%;

  &.outside {
    background-color: $description;
    margin-top: 16px;
  }

  .inside {
    background-color: $header;
  }
}

.description {
  padding: 8px 0 24px;

  &.skills {
    text-align: right;
  }
}

@media screen and (max-width: 999px) {
  .wrapper {
    flex-direction: column;
  }

  .header {
    text-align: center;
  }

  .each-content,
  .each-content:not(:last-child) {
    width: 100%;
    padding-right: 0;
  }
}
</style>
