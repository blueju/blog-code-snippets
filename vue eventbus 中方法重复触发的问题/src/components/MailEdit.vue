
<template>
  <div class="MailEdit">
    <h1>邮件编辑</h1>
    <el-input type="text" placeholder="邮件编辑" v-model="mailEdit" />
    <el-button type="primary" @click="send">发送</el-button>
  </div>
</template>

<script>
import EventBus from "./EventBus"
export default {
  name: "MailEdit",
  data() {
    return {
      mailEdit: ""
    }
  },
  created() {
    debugger
    EventBus.$on("acceptMailConfig", (config) => {
      console.log("得到邮件配置", this.mailEdit, config);
      alert("发送成功")
    })
  },
  methods: {
    send() {
      EventBus.$emit("getMailConfig")
    }
  }
}
</script>

<style>
</style>