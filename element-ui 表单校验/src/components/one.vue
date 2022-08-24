<template>
  <div class="one">
    <fieldset>
      <legend>普通需求</legend>
      <p>一个表单统一绑定一个校验规则</p>
    </fieldset>
    <el-form :model="form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "one",
  data() {
    return {
      form: {
        username: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  }
};
</script>
