<template>
  <div class="join-form">
    <h4>회원가입</h4>
    <br />
    <pattern-input
      class="fullwidth"
      v-model="inputId"
      v-bind:pattern="aboutId.idRegExp"
      @keyup="changeId"
      v-bind:placeHolder="aboutId.placeHolder"
      v-bind:describedby="aboutId.description"
      v-bind:title="aboutId.title"
    />
    <br />
    <pattern-input
      class="fullwidth"
      type="password"
      v-model="inputPw"
      v-bind:pattern="aboutPw.idRegExp"
      @keyup="changePw"
      v-bind:placeHolder="aboutPw.placeHolder"
      v-bind:describedby="aboutPw.description"
      v-bind:title="aboutPw.title"
    />

    <br />
    <b-button class="fullwidth" pill variant="primary" v-on:click="onJoin"
      >Register</b-button
    >
    <a class="login-link" href="javascript:void()">로그인 하기</a>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import RegExpInput from "./util/RegExpInput.vue";

export default Vue.extend({
  components: {
    "pattern-input": RegExpInput,
  },
  data() {
    return {
      inputId: "",
      inputPw: "",
      aboutId: {
        idRegExp: /^[a-z0-9]{8,10}$/g,
        description: "영어또는 숫자 8~10자",
        placeHolder: "아이디 입력",
        title: "아이디 : ",
      },
      aboutPw: {
        idRegExp:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g,
        description: "영문 대소문자, 숫자, 특수문자 포함 8자이상",
        placeHolder: "비밀번호 입력",
        title: "비밀번호 : ",
      },
    };
  },
  methods: {
    changeId(value: string) {
      this.inputId = value;
    },
    changePw(value: string) {
      this.inputPw = value;
    },
    onJoin() {
      // axios.defaults.baseURL = 'http://localhost:3001';

      const JOIN_URL = "/auth/register";
      axios
        .post(JOIN_URL, { userid: "jiwonid", userps: "jiwonpw" })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped>
.join-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
}
.fullwidth {
  width: 100%;
}
.login-link {
  margin-top: 5px;
  font-size: 12px;
}
</style>
