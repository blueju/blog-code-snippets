
<template>
  <div class="MailConfig">
    <h1>邮件配置</h1>
    <el-input type="text" placeholder="邮件配置" v-model="mailConfig" />
  </div>
</template>

<script>
import EventBus from "./EventBus"
export default {
  name: "MailConfig",
  data() {
    return {
      mailConfig: ""
    }
  },
  created() {
    EventBus.$on("getMailConfig", () => {
      if (this.mailConfig.length !== 0) {
        EventBus.$emit("acceptMailConfig", this.mailConfig)
      } else {
        alert("邮件配置为空，请先配置")
      }
    })
  }
}
</script>

<style>
</style>