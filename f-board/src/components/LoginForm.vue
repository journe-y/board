<template>
  <div class="login-form">
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
    <b-button class="fullwidth" pill variant="primary">Login</b-button>
    <a class="join-link" href="javascript:void()">회원가입</a>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
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
        description: "영어또는 숫자 포함 8~10자",
        placeHolder: "아이디 입력",
        title: "아이디 : ",
      },
      aboutPw: {
        idRegExp: /^[a-z0-9]{8,10}$/g,
        description: "영어또는 숫자 포함 8~10자",
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
