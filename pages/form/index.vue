<template>
  <div class="w-full text-center flex flex-col flex-1">
    <AppBar title="Enter Your Action-Step👣" class="mb-10px"></AppBar>
    <RadioButton @on-selected="onSelectedType"></RadioButton>

    <SelectableItemList :list="selectedList"></SelectableItemList>

    <div class="relative mt-4">
      <textarea
        v-model="memo"
        class="w-[300px] h-[80px] px-4 py-2 border-2 border-gray-300 rounded-[8px] resize-none focus:outline-none focus:border-primary"
        placeholder="Memo"
      ></textarea>
    </div>
    <section class="flex flex-1 justify-center mt-20px items-end">
      <router-link
        class="px-16px py-24px rounded-full border-4 border-black bg-yellow-300 w-[100px] h-[100px] leading-[20px] flex-col justify-center"
        :to="{ path: '/main', query: { success: 'yes' } }"
      >
        <span class="font-bold">Submit</span>
        <span class="text-[10px] leading-normal">Action-Step</span>
      </router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import moment from 'moment'

@Component
export default class MainPage extends Vue {
  private name: string = 'MainPage'
  private formatCurrentDate: string = ''
  private formatCurrentTime: string = ''
  private selectedTypeIndex: number = 0
  private memo: string = ''
  private listData: string[][] = [
    ['30min run', '60min bicycle', '10min take cold shower', '5min stretching'],
    [
      '30min meditation',
      '25min love myself',
      '20min write thanks-diary',
      '5min super power pose',
    ],
    [
      '30min do programing study',
      '25min watch Ted english speech',
      "10min review today's learning",
      '5min check todo-list',
    ],
  ]

  private selectedList: string[] = this.listData[this.selectedTypeIndex]

  mounted() {
    // Update currentTime every second using setInterval
    setInterval(() => {
      const now: Date = new Date()
      this.formatCurrentDate = moment(now).format('YYYY.MM.DD')
      this.formatCurrentTime = moment(now).format('HH:mm:ss A')
    }, 1000)
  }

  onSelectedType(index: number) {
    this.selectedTypeIndex = index
    this.selectedList = this.listData[this.selectedTypeIndex]
  }
}
</script>
