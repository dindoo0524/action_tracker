<template>
  <div>
    <h1 class="text-center text-primary mb-20px">ACTION TRACKER</h1>

    <section class="text-12px">
      <div class="my-12px">
        Hi, I'm the
        <strong class="text-primary">ACTION TRACK</strong> application.
        <div class="my-12px"></div>

        I'm here to help you record and track your valuable actions
        (Action-Step). I can assist you in consistently monitoring your progress
        and developing meaningful habits.
        <div class="my-12px"></div>

        You can nurture awesome characters with your precious Action-Steps and
        experience a sense of achievement. Let's meet right now!
      </div>
      <hr />
      <div class="my-12px">
        안녕하세요, 저는
        <strong class="text-primary">ACTION TRACK</strong> 앱입니다.
        <div class="my-12px"></div>

        여러분의 소중한 행동들(Action-Step)을 기록하고 추적하는 데 도움을 드리고
        있습니다. 지속적으로 진행 상황을 모니터링하고 의미 있는 습관을 형성하는
        데 도움을 드릴 수 있습니다.
        <div class="my-12px"></div>

        여러분은 소중한 Action-Step들로 멋진 캐릭터를 성장시키며 성취감을 느낄
        수 있습니다. 지금 바로 만나러 가시죠!
      </div>
    </section>

    <section class="flex justify-center mt-20px">
      <router-link class="button-style bg-primary text-white" to="/main"
        >START</router-link
      >
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component
export default class HomePage extends Vue {}
</script>
