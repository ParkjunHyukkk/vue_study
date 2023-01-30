<template>
  <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />

  <div class="menu">
    <a v-for="test in 메뉴들" :key="test">{{ test }}</a>
  </div>

  <Discount />
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <!-- 개선 전 -->
  <!--
  <div>
    <img :src="원룸들[0].image" class="room-img" />
    <h4 @click="모달창열렸니 = true" class="red" :style="스타일">
      {{ 원룸들[0].title }}
    </h4>
    <p>{{ 원룸들[0].price }} 원</p>
    <button @click="increase1">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>

  <div>
    <img src="./assets/room1.jpg" class="room-img" />
    <h4 class="red" :style="스타일">{{ products[1] }}</h4>
    <button @click="increase2">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>

  <div>
    <img src="./assets/room2.jpg" class="room-img" />
    <h4 class="red" :style="스타일">{{ products[2] }}</h4>
    <button @click="increase3">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
  </div>
-->
  <!-- 개선 후-->

  <div v-for="(a, i) in 원룸들" :key="i">
    <img :src="원룸들[i].image" class="room-img" />
    <h4
      @click="
        모달창열렸니 = true;
        누른거 = i;
      "
      :style="스타일"
      i
      class="red"
    >
      {{ 원룸들[i].title }}
    </h4>
    <p>{{ 원룸들[i].price }} 원</p>
    <p>{{ 원룸들[i].content }} 원</p>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import data from "./assets/data";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
// 함수 메소드 추가 후 사용법
export default {
  name: "App",
  data() {
    return {
      누른거: 0,
      원룸들: data,
      모달창열렸니: false, // 데이터 먼저
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      스타일: "color:orange",
      메뉴들: ["HOME", "SHOP", "ABOUT"],
      신고수: [0, 0, 0],
    };
  },
  methods: {
    increase1() {
      this.신고수[0] += 1;
    },
    increase2() {
      this.신고수[1] += 1;
    },
    increase3() {
      this.신고수[2] += 1;
    },
  },
  components: {
    Discount: Discount,
    //HelloWorld,
    Modal: Modal,
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.close-btn {
  width: 10%;
  background: purple;
  padding: 20px;
  text-align: center;
  margin-left: 45%;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
