<template>
  <div class="flex justify-center w-full">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ 'list-item': true, selected: selectedIndex === index }"
        @click="selectItem(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class SelectableItemList extends Vue {
  @Prop({ type: Array }) list!: string[]

  private selectedIndex: number | null = null
  private selectItem(index: number) {
    this.selectedIndex = index
  }
}
</script>
<style>
.list-item {
  @apply py-10px px-16px bg-gray-100 m-5px rounded-[8px] w-[300px];
}

.list-item.selected {
  @apply bg-primary text-white;
}
</style>
