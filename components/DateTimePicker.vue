<template>
  <div>
    <input
      id="datetimePicker"
      v-model="selectedDate"
      type="datetime-local"
      class="w-[300px]"
    />
    <p v-if="dateError" style="color: red">Invalid date format!</p>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class DateTimePicker extends Vue {
  private selectedDate: string = ''
  private dateError: boolean = false
}
</script>
