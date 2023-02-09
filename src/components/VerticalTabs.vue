<template>
  <div class="vertical-tabs">
    <img
      class="hamburger-icon"
      src="@/assets/icon-hamburger.svg"
      alt="icon-hamburger"
      @click="openVerticalTabsBar = true"
    />
    <Transition name="slide">
      <div
        v-if="openVerticalTabsBar"
        :class="['vertical-tabs-content', { transparent: openVerticalTabsBar }]"
        @click="openVerticalTabsBar = false"
      >
        <div class="content" @click.stop>
          <div class="top-content">
            <div class="self-name">
              <img class="image" src="@/assets/self.jpg" alt="self-img" />
              <p class="name" @click="closeVerticalTabsBar(Tabs.HOME)">
                PRATHIKSHA
              </p>
              <p class="description">Web Developer</p>
            </div>
            <div class="tabs">
              <div
                v-for="(tab, index) in Tabs"
                :key="index"
                :class="['tab', { clicked: isClicked(tab) }]"
                @click="closeVerticalTabsBar(tab)"
              >
                <div class="dot"></div>
                {{ tab.toUpperCase() }}
              </div>
            </div>
          </div>
          <IconsList />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs } from "@/types/index";
import IconsList from "@/components/IconsList.vue";

const emit = defineEmits(["click"]);
const props = defineProps<{ clickedTab: Tabs }>();
const openVerticalTabsBar = ref<boolean>(false);

const isClicked = (tab: Tabs): boolean => props.clickedTab === tab;

const closeVerticalTabsBar = (clickedTab: Tabs): void => {
  openVerticalTabsBar.value = false;
  emit("click", clickedTab);
};
</script>

<style lang="scss" scoped>
.hamburger-icon {
  position: fixed;
  top: 0;
  left: 0;
  margin: 16px;
  z-index: 1;
}

.vertical-tabs-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;

  &.transparent {
    background-color: rgba(255, 255, 255, 0.7);
  }
}

.content {
  height: 100vh;
  width: 250px;
  padding: 32px 16px 12px;
  overflow-y: scroll;
  background-color: #070f1f;
}

.self-name {
  text-align: center;
}

.image {
  width: 100px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0px 0px 12px;
}

.name {
  padding-top: 24px;
  font-size: 16px;
  font-family: Gill sans-serif;
  letter-spacing: 1px;
  color: #50c8f0;
}

.description {
  text-align: center;
}

.tabs {
  margin: 40px 0 24px;
}

.tab {
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 12px;
  cursor: pointer;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 28px;
  border: 1px solid #ffffff;
}

.clicked {
  color: #50c8f0;

  .dot {
    background-color: #50c8f0;
    border-color: #50c8f0;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s linear;
}

.slide-enter-from {
  transform: translateX(-20px);
}

.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

@media screen and (max-height: 515px) {
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
