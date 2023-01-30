<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <p>{{ 원룸들[누른거].price }} 원</p>
      <!--<div class="close-btn" @click="모달창열렸니 = false">닫기</div>-->
    </div>
  </div>
</template>

<script>
import { booleanLiteral } from "@babel/types";

export default {
  name: "Modal",
  props: {
    원룸들: Array,
    누른거: Number,
    모달창열렸니: Boolean,
  },
};
</script>

<style></style>
