<template>
  <transition name="modal-fade">
    <dialog-template title="Congratulations" @on-click-close="dismiss">
      <template slot="body">
        <h1 class="text-3xl mb-16px">You did your Action-Step!!</h1>
        <div
          :style="`background-image:url('https://cdn.liveklass.com/common/1690052124156.jpeg');`"
          class="w-full h-[250px] bg-no-repeat bg-contain bg-center"
        ></div>
      </template>

      <template slot="footer">
        <div class="text-center mt-20px">
          <button class="bg-primary text-white" @click.stop="dismiss">
            Thanks❤️
          </button>
        </div>
      </template>
    </dialog-template>
  </transition>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
import Dialog from '~/modules/dialog'

export default class CongratulationsDialog extends mixins(Dialog) {}
</script>
