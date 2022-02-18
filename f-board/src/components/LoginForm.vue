<template>
  <div class="login-form">
    <h4>로그인</h4>
    <br />
    <div role="group" class="fullwidth">
      <!-- <label for="input-live">{{  }}</label> -->
      <b-form-input
        v-model="inputId"
        type="text"
        placeholder="아이디"
        trim
      ></b-form-input>
      <br />
      <b-form-input
        v-model="inputPw"
        type="password"
        placeholder="비밀번호"
        trim
      ></b-form-input>
    </div>
    <br />
    <b-button class="fullwidth" pill variant="primary" v-on:click="onlogin"
      >Login</b-button
    >
    <a class="join-link" href="javascript:void()">회원가입</a>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      inputId: "",
      inputPw: "",
    };
  },
  methods: {
    onlogin() {
      console.log('login요청')
      
    },
  },
});
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
}
.fullwidth {
  width: 100%;
}
.join-link {
  margin-top: 5px;
  font-size: 12px;
}
</style>
