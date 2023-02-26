<template>
  <div class="app" v-if="tab">
    <VerticalTabs v-if="isPhone" :clickedTab="tab" @click="openPage" />
    <HorizontalTabs v-else :clickedTab="tab" @click="openPage" />
    <div class="bottom-content">
      <img
        v-if="tab === Tabs.CONTACT"
        class="scroll-icon"
        src="@/assets/icon-scroll-up.svg"
        alt="icon-scroll-up"
        @click="openPage(Tabs.HOME)"
      />
      <img
        v-else
        class="scroll-icon"
        src="@/assets/icon-scroll-down.svg"
        alt="icon-scroll-down"
        @click="navToNextPage"
      />
      <h1 class="tab-name">{{ tab.toUpperCase() }}</h1>
    </div>
    <RouterView @contact="openPage" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onUnmounted, ref } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";
import HorizontalTabs from "@/components/HorizontalTabs.vue";
import VerticalTabs from "@/components/VerticalTabs.vue";
import { Tabs } from "@/types/index";

const isPhone = ref<boolean>(false);
const router = useRouter();
const route = useRoute();
const tab = ref<Tabs>();

const updateDesign = (): void => {
  isPhone.value = window.innerWidth < 768;
};

onBeforeMount(() => {
  setTimeout(() => {
    if (route.name) tab.value = route.name as Tabs;
    else openPage(Tabs.HOME);
  }, 50);
  updateDesign();
  window.addEventListener("resize", updateDesign);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateDesign);
});

const openPage = (tabName: Tabs): void => {
  tab.value = tabName;
  router.push({ name: tabName });
};

const navToNextPage = (): void => {
  const tabsArray = Object.keys(Tabs);
  const index = tabsArray.indexOf(tab.value?.toUpperCase() as Tabs);
  const nextTab = (Tabs as any)[tabsArray[index + 1]];
  openPage(nextTab);
};
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  color: $title;
  background-color: $background-color;
}

.bottom-content {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 8px;
  right: 24px;
  width: 24px;
  transform: rotate(-90deg);
  z-index: 1;
}

.scroll-icon {
  width: 36px;
  height: 36px;
  cursor: pointer;
}

.tab-name {
  font-size: 18px;
  color: $header;
}

@media screen and (max-width: 767px) {
  .bottom-content {
    right: 8px;
    bottom: 10px;
  }

  .scroll-icon {
    width: 24px;
    height: 24px;
  }

  .tab-name {
    font-size: 12px;
  }
}
</style>
