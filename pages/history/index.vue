<template>
  <div class="w-full text-center flex flex-col flex-1">
    <AppBar title="History" class="mb-10px"></AppBar>
    <div class="overflow-y-scroll">
      <ul>
        <li
          v-for="(item, index) in listData"
          :key="index"
          class="border-2 border-gray-50 rounded-[8px] mt-10px relative px-10px pt-28px pb-10px text-left"
        >
          <div
            class="w-[80px] h-20px text-[12px] text-white absolute left-0 top-1.5 pl-1"
            :class="getTypeInfo(item.type).className"
          >
            {{ getTypeInfo(item.type).text }}
          </div>

          <p>{{ item.taskName }}</p>
          <p class="text-gray-500 text-12px">{{ item.memo }}</p>
          <div class="text-12px">
            <span class="font-bold">ActionDate</span>
            {{ dateFormat(item.actionDate) }}
          </div>
          <div class="text-[10px] text-gray-200">
            {{ dateFormat(item.regDate) }}
          </div>

          <!--          <FontAwesomeIcon-->
          <!--            class="text-yellow-300 absolute right-16px top-2"-->
          <!--            icon="fa-solid fa-award"-->
          <!--            size="4x"-->
          <!--          />-->
          <FontAwesomeIcon
            class="text-yellow-300 absolute right-16px top-2"
            icon="fa-solid fa-trophy"
            size="4x"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import { ActionStepVo } from '~/models/actionStepVo'
import moment from 'moment'

@Component
export default class History extends Vue {
  private name: string = 'HistoryPage'
  private selectedTypeIndex: number = 0
  private memo: string = ''
  // ActionStepType
  // 01: Physical 02: Mental 03: Intellectual
  private listData: ActionStepVo[] = [
    {
      id: 1,
      type: '01',
      taskName: '30min run',
      actionDate: '2023-05-23T05:39:00.000Z',
      regDate: '2023-07-20T12:00:00.000Z',
      memo: 'Goooooood job!',
    },
    {
      id: 2,
      type: '01',
      taskName: '60min bicycle',
      actionDate: '2023-06-23T05:39:00.000Z',
      regDate: '2023-07-21T12:00:00.000Z',
      memo: 'Hard work!!!',
    },
    {
      id: 3,
      type: '03',
      taskName: '30min do programing study',
      actionDate: '2023-07-23T05:39:00.000Z',
      regDate: '2023-07-20T12:00:00.000Z',
      memo: "I'm proud of myself!",
    },
    {
      id: 4,
      type: '02',
      taskName: '20min keep a thanks-diary',
      actionDate: '2023-07-24T05:39:00.000Z',
      regDate: '2023-07-22T12:00:00.000Z',
      memo: 'warm heart❤️',
    },
    {
      id: 4,
      type: '01',
      taskName: '10min take cold shower',
      actionDate: '2023-07-24T05:39:00.000Z',
      regDate: '2023-07-22T12:00:00.000Z',
      memo: 'coooool heart💙💙💙️',
    },
  ]

  getTypeInfo(type: string) {
    const typeInfo = {
      className: '',
      text: '',
    }
    if (type === '01') {
      typeInfo.className = 'bg-red-500'
      typeInfo.text = 'Physical'
    } else if (type === '02') {
      typeInfo.className = 'bg-yellow-500'
      typeInfo.text = 'Mental'
    } else if (type === '03') {
      typeInfo.className = 'bg-blue-500'
      typeInfo.text = 'Intellectual'
    }

    return typeInfo
  }
  dateFormat(date: string) {
    return moment(date).format('YYYY.MM.DD HH:mm A')
  }
}
</script>
