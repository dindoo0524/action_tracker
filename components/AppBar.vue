<template>
  <div class="flex">
    <!-- 왼쪽 뒤로가기 버튼 영역  -->
    <section class="w-[40px]">
      <button @click="goBack">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="2x" />
      </button>
    </section>
    <!--  타이틀 영역  -->
    <section class="flex flex-1 justify-center items-center">
      {{ title }}
    </section>
    <!-- 오른쪽 actions 영역  -->
    <section class="w-[40px]">
      <FontAwesomeIcon icon="fa-solid fa-bars" size="2x" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class RadioButton extends Vue {
  @Prop({ type: String, default: '' }) title!: string

  goBack() {
    // this.$router.go(-1)
    this.$router.push({ name: 'main' })
  }
}
</script>
