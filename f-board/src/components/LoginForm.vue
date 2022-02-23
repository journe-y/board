<template>
  <div class="login-form">
    <h4>로그인</h4>
    <br />
    <div role="group" class="fullwidth">
      <b-form-input
        ref="id"
        v-model="inputId"
        type="text"
        placeholder="아이디"
        trim
      ></b-form-input>
      <br />
      <b-form-input
        ref="PW"
        v-model="inputPw"
        type="password"
        placeholder="비밀번호"
        trim
        v-on:keyup="pwKeyup"
      ></b-form-input>
    </div>
    <br />
    <b-button class="fullwidth" pill variant="primary" v-on:click="onlogin"
      >Login</b-button
    >
    <button class="join-link">회원가입 하기</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { loginReq } from "../api/userApi";

export default Vue.extend({
  mounted() {
    const idRef = this.$refs.id as any;
    idRef.focus();
  },
  data() {
    return {
      inputId: "",
      inputPw: "",
    };
  },
  methods: {
    onlogin() {
      if (!this.inputId.length) {
        alert("아이디 입력을 확인해주세요");
        const idRef = this.$refs.id as any;
        idRef.focus();
      } else if (!this.inputId.length) {
        alert("비밀번호 입력을 확인해주세요");
        const pwRef = this.$refs.pw as any;
        pwRef.focus();
      } else {
        const LOGIN_URL = "/auth/login";

        loginReq(
          LOGIN_URL,
          {
            userid: this.inputId,
            userpw: this.inputPw,
          },
          ({ data }) => {
            alert(data.msg);
            console.log(data.token);
            localStorage.setItem("accessToken", data.token);
            localStorage.setItem("refreshToken", data.refreshToken);
            this.$store.commit("SET_AUTH", true);
            // this.$emit('@loginOff');
            this.$store.commit("SET_ON_MODAL", false);
          },
          (msg) => {
            alert(msg);
          }
        );
      }
    },
    pwKeyup(e: KeyboardEvent) {
      if (e.keyCode === 13) {
        this.onlogin();
      }
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
