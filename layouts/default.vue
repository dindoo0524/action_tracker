<template>
  <div class="bg-gray-100 h-[100vh] flex justify-center items-center flex-col">
    <span class="text-[30px] z-10 hidden md:block">ACTION TRACKER</span>
    <div
      class="bg-white w-full h-full md:max-w-[400px] md:h-[80vh] md:min-h-[600px] rounded-[8px] drop-shadow px-30px pb-[30px] pt-30px flex"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class DefaultLayout extends Vue {}
</script>
