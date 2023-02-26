<template>
  <div class="horizontal-tabs">
    <div class="horizontal-content">
      <h1 class="name" @click="$emit('click', Tabs.HOME)">
        PRATHI<span>KSHA</span>
      </h1>
      <div class="tabs">
        <div
          v-for="(tab, index) in Tabs"
          :key="index"
          :class="['tab', { clicked: isClicked(tab) }]"
          @click="$emit('click', tab)"
        >
          {{ tab.toUpperCase() }}
        </div>
      </div>
    </div>
    <IconsList />
  </div>
</template>

<script setup lang="ts">
import { Tabs } from "@/types/index";
import IconsList from "@/components/IconsList.vue";

defineEmits(["click"]);
const props = defineProps<{ clickedTab: Tabs }>();

const isClicked = (tab: Tabs): boolean => props.clickedTab === tab;
</script>

<style lang="scss" scoped>
.horizontal-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 34px;
  background-color: $background-color;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
}

.name {
  font-size: 20px;
  font-family: Gill sans-serif;
  animation: 1.5s leftIn ease-out;
  color: $header;
  cursor: pointer;

  span {
    color: $title;
  }
}

@keyframes leftIn {
  0% {
    opacity: 0;
    transform: translatex(-80%);
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

.tabs {
  display: flex;
  align-items: center;
}

.tab {
  margin: 6px 16px;
  font-size: 14px;
  cursor: pointer;
}

.clicked {
  color: $header;
}

@media screen and (max-width: 860px) {
  .tab {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
