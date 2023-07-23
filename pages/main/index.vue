<template>
  <div class="w-full flex flex-col flex-1">
    <!--    top info section-->
    <section class="flex justify-between">
      <!--      top left section (current time)-->
      <section class="text-center">
        <FontAwesomeIcon icon="fa-solid fa-clock" size="2x" />

        <div class="text-20px font-bold">
          {{ formatCurrentDate }}
        </div>
        <div class="text-center">
          {{ formatCurrentTime }}
        </div>
      </section>
      <!--      top right section (Levels)-->
      <section>
        <div class="font-bold text-20px text-center bg-yellow-300 mb-10px">
          Lv. 7
        </div>
        <ul class="text-[12px]">
          <li>
            <h3>🌼&nbsp;Physical Strength</h3>
            <div class="flex ml-16px">
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div
                v-if="isSuccess"
                class="w-10px h-12px bg-pink-500 mr-4px"
              ></div>
            </div>
          </li>
          <li>
            <h3>🌼&nbsp;Mental Strength</h3>
            <div class="flex ml-16px">
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
            </div>
          </li>
          <li>
            <h3>🌼&nbsp;Intellectual Strength</h3>
            <div class="flex ml-16px">
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
              <div class="w-10px h-12px bg-pink-300 mr-4px"></div>
            </div>
          </li>
        </ul>
      </section>
    </section>
    <!--    body character section-->
    <section class="mt-16px">
      <div
        :style="`background-image:url('https://cdn.liveklass.com/common/1690043312259.jpeg');`"
        class="w-full h-[200px] bg-no-repeat bg-contain bg-center"
      ></div>
    </section>
    <!--    bottom nickname and action-step button section-->
    <section class="flex flex-col flex-1">
      <!--      nickname section-->
      <section class="flex justify-center">
        <div class="bg-yellow-300 py-10px px-28px rounded-[8px]">슈퍼진주</div>
      </section>
      <!--      action-stop button section-->
      <section class="flex mt-20px flex-1 flex-col justify-end items-center">
        <router-link
          class="px-16px py-24px text-3xl rounded-full border-4 border-black bg-yellow-300 w-[100px] h-[100px] leading-[10px] flex-col justify-center"
          to="/form"
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" />🍗
          <span class="text-[10px] leading-normal">Action-Step</span>
        </router-link>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import moment from 'moment'
import CongratulationsDialog from '~/components/dialog/CongratulationsDialog.vue'

@Component
export default class MainPage extends Vue {
  private name: string = 'MainPage'
  private formatCurrentDate: string = ''
  private formatCurrentTime: string = ''
  private isSuccess: boolean = false

  mounted() {
    const isSuccess = this.$route.query.success
    if (isSuccess === 'yes') {
      this.isSuccess = true
      new CongratulationsDialog({
        parent: this,
        propsData: {},
      }).show()
    }
    // Update currentTime every second using setInterval
    setInterval(() => {
      this.formatCurrentDate = moment(new Date()).format('YYYY.MM.DD')
      this.formatCurrentTime = moment(new Date()).format('HH:mm:ss A')
    }, 1000)
  }
}
</script>
