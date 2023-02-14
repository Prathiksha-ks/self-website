<template>
  <OutsideWrapper class="about">
    <div class="wrapper">
      <img class="image browser" src="@/assets/self2.jpg" alt="self-img" />
      <div class="content">
        <h1 class="header">HELLO! I'M PRATHIKSHA</h1>
        <p class="main-description">
          A Frontend focused Web Developer building Websites and Web
          Applications that leads to the success of the overall product.
          Currently working at Robosoft Technologies Pvt Ltd as Software
          Engineer.
        </p>
        <img class="image phone" src="@/assets/self2.jpg" alt="self-img" />
        <div class="personal-info">
          <div class="info" v-for="info in personalInfo" :key="info.title">
            <p class="title">{{ info.title }}</p>
            :<a class="description" :href="addLink(info)">{{
              info.description
            }}</a>
          </div>
        </div>
        <a href="/files/resume.docx" download>
          <button class="download">DOWNLOAD CV</button>
        </a>
      </div>
    </div>
  </OutsideWrapper>
</template>

<script setup lang="ts">
import OutsideWrapper from "@/components/OutsideWrapper.vue";

const personalInfo = [
  {
    title: "Name",
    description: "Prathiksha",
  },
  {
    title: "Age",
    description: "25",
  },
  {
    title: "Address",
    description: "Mangaluru, Karnataka",
  },
  {
    title: "Email",
    description: "prathiksha14feb@gmail.com",
  },
  {
    title: "Phone",
    description: "+91 7204950442",
  },
];

const addLink = (info: { [key: string]: string }): string | undefined => {
  if (info.title === "Phone")
    return `tel:${info.description}`.replace(/\s/, "");
  else if (info.title === "Email") return `mailto:${info.description}`;
};
</script>

<style lang="scss" scoped>
.wrapper {
  align-items: center;
}

.main-description {
  padding-bottom: 40px;
}

.image {
  border: 2px solid;
  padding: 6px;

  &.browser {
    width: 500px;
    display: flex;
    margin-right: 50px;
  }

  &.phone {
    width: 100%;
    display: none;
  }
}

.info {
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
}

.title {
  display: flex;
  width: 100px;
  font-size: 16px;
}

.description {
  padding-left: 50px;
}

@media screen and (max-width: 999px) {
  .about {
    text-align: center;
  }

  .image {
    margin-bottom: 40px;

    &.browser {
      display: none;
    }

    &.phone {
      display: flex;
    }
  }
}

@media screen and (max-width: 767px) {
  .main-description {
    padding-bottom: 16px;
  }

  .image {
    margin: 8px 0 32px;
  }

  .title {
    font-size: 12px !important;
    width: 50px;
  }
  .description {
    padding-left: 10px;
  }

  .download {
    margin-top: 32px;
  }
}
</style>
