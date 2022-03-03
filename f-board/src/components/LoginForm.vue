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
    <button v-on:click="goRegister" class="user-link-btn">회원가입 하기</button>
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
        this.$store.dispatch("openAlert", {
          text: "아이디 입력을 확인해주세요",
          type: "danger",
        });
        const idRef = this.$refs.id as any;
        idRef.focus();
      } else if (!this.inputId.length) {
        this.$store.dispatch("openAlert", {
          text: "비밀번호 입력을 확인해주세요",
          type: "danger",
        });
        const pwRef = this.$refs.pw as any;
        pwRef.focus();
      } else {
        const LOGIN_URL = "https://toyboard.herokuapp.com/auth/login";

        loginReq(
          LOGIN_URL,
          {
            userid: this.inputId,
            userpw: this.inputPw,
          },
          ({ data }) => {
            this.$store.dispatch("openAlert", {
              text: data.msg,
              type: "success",
            });
            localStorage.setItem("accessToken", data.token);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("userid", this.inputId);
            this.$store.commit("SET_AUTH", this.inputId);
            // this.$emit('@loginOff');
            this.$store.commit("SET_ON_MODAL", false);
          },
          (msg) => {
            if (msg) {
              this.$store.dispatch("openAlert", {
                text: msg,
                type: "danger",
              });
            }
          }
        );
      }
    },
    pwKeyup(e: KeyboardEvent) {
      if (e.keyCode === 13) {
        this.onlogin();
      }
    },
    goRegister() {
      this.$emit("@goRegister", "join");
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
