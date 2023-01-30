const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  //2023.01.30 박준혁 : ESLint false -> 단일 단어 컴포넌트 사용 가능
  lintOnSave: false,
});
