<template>
  <div id="app">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="方式一" name="1">
        <one />
      </el-tab-pane>
      <el-tab-pane label="方式二" name="2">
        <two />
      </el-tab-pane>
      <el-tab-pane label="复杂需求" name="3">
        <complex />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import one from "./components/one";
import two from "./components/two";
import complex from "./components/complex";
export default {
  name: "App",
  components: {
    one,
    two,
    complex
  },
  data() {
    return {
      activeName: "3"
    };
  }
};
</script>
