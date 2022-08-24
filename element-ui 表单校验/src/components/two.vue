<template>
  <div class="two">
    <fieldset>
      <legend>个性化需求</legend>
      <p>一个表单项绑定一个规则</p>
    </fieldset>
    <el-form :model="form">
      <el-form-item label="用户名" prop="user" :rules="rules.username">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="该表单项我未为它绑定校验规则"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "two",
  data() {
    return {
      form: {
        user: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  }
};
</script>
