<template>
  <div class="menu">
    <a v-for="test in 메뉴들" :key="test">{{ test }}</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 개선 전 -->

  <div>
    {{ logo }}
    <h4 class="red" :style="스타일">{{ products[0] }}</h4>
    <p>50 만원</p>
    <button @click="increase1">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>
  <div>
    <h4 class="red" :style="스타일">{{ products[1] }}</h4>
    <button @click="increase2">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <h4 class="red" :style="스타일">{{ products[2] }}</h4>
    <button @click="increase3">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
  </div>

  <!-- 개선 후-->

  <!-- {{ logo }}
  <div v-for="(a, i) in products" :key="a">
    {{ products[i] }}
    <p>50</p>
  </div> -->

  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// 함수 사용법
export default {
  name: "App",
  data() {
    return {
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
    HelloWorld,
  },
};
</script>

<style>
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
</style>
