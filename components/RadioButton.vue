<template>
  <div class="flex justify-center w-full">
    <label
      class="radio-button"
      :class="{ selected: localSelectedIndex === 0 }"
      @click="onSelected(0)"
    >
      Physical
      <input
        v-model="localSelectedIndex"
        type="radio"
        :value="0"
        class="hidden"
      />
    </label>
    <label
      class="radio-button"
      :class="{ selected: localSelectedIndex === 1 }"
      @click="onSelected(1)"
    >
      Mental
      <input
        v-model="localSelectedIndex"
        type="radio"
        :value="1"
        class="hidden"
      />
    </label>
    <label
      class="radio-button"
      :class="{ selected: localSelectedIndex === 2 }"
      @click="onSelected(2)"
    >
      Intellectual
      <input
        v-model="localSelectedIndex"
        type="radio"
        :value="2"
        class="hidden"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Emit } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class RadioButton extends Vue {
  private localSelectedIndex: number = 0
  @Emit('on-selected')
  onSelected(index: number) {
    console.log(index)
    this.localSelectedIndex = index
    console.log(this.localSelectedIndex)
    return index
  }
}
</script>

<style>
.radio-button {
  @apply m-5px py-8px px-20px border-2 border-gray-300 rounded-[8px] cursor-pointer;
}

.radio-button.selected {
  @apply bg-primary border-primary text-white;
}
</style>
