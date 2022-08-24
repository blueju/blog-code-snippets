<template>
  <div class="three">
    <fieldset>
      <legend>复杂需求</legend>
      <p>还原表单内容，表单内容由请求响应数据决定，每个表单项暂时均为输入框，校验规则也不同</p>
    </fieldset>
    <el-form :model="form" ref="form">
      <el-form-item
        v-for="(item, index) in form.productParams"
        :key="index"
        :label="item.name"
        :rules="item.rules"
        :prop="`productParams.${index}.value`"
      >
        <el-input v-model="item.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "complex",
  data() {
    return {
      // 请求响应数据
      XHRData: [
        {
          // 属性名（英文）
          label: "ID",
          // 属性名（中文）
          name: "ID",
          // 属性值
          value: "123456789",
          // 校验正则
          regExp: /^[0-9]*$/,
          // 校验正则不通过时的提示
          message: "只能为数字"
        },
        {
          label: "email",
          name: "邮箱",
          value: "tony@qq.com",
          regExp: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
          message: "请填写正确的邮箱地址"
        },
        {
          label: "weChatRedPacket",
          name: "微信红包",
          value: "1",
          regExp: /^([1-9]|[1-9]\d{1}|1\d{2}|200\d)$/,
          message: "单次支付总额不可低于1元或超过200元"
        }
      ],
      form: {
        productParams: []
      }
    };
  },
  methods: {
    // 假装异步获取接口响应数据
    getDataByXHR() {
      this.form.productParams = this.XHRData.map((item) => {
        let rules = [
          {
            required: true,
            message: "请输入" + item.label,
            trigger: "blur"
          }
        ];
        rules.push({
          pattern: item.regExp,
          message: item.message,
          trigger: "blur"
        });
        return {
          label: item.label,
          name: item.name,
          value: item.value,
          rules
        };
      });
    },
    // 提交
    submit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.$message.success("校验通过");
        } else {
          this.$message.error("校验未通过");
        }
      });
    }
  },
  created() {
    this.getDataByXHR();
  }
};
</script>
