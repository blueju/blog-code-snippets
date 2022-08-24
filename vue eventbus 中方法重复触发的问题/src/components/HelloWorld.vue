<template>
  <div class="hello">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="邮件配置" name="first">
        <MailConfig />
      </el-tab-pane>
      <el-tab-pane label="邮件编辑" name="second">
        <MailEdit />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MailConfig from "./MailConfig"
import MailEdit from "./MailEdit"
export default {
  name: "HelloWorld",
  components: { MailConfig, MailEdit },
  data() {
    return {
      activeName: "second"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
