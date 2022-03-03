<template>
  <div class="join-form">
    <h4>회원가입(암호화안됨)</h4>
    <br />
    <pattern-input
      ref="id"
      class="fullwidth"
      v-model="inputId"
      v-bind:pattern="aboutId.idRegExp"
      v-on:@keyup="changeId"
      v-bind:placeHolder="aboutId.placeHolder"
      v-bind:describedby="aboutId.description"
      v-bind:title="aboutId.title"
    />
    <br />
    <pattern-input
      ref="pw"
      class="fullwidth"
      type="password"
      v-model="inputPw"
      v-bind:pattern="aboutPw.idRegExp"
      v-on:@keyup="changePw"
      v-bind:placeHolder="aboutPw.placeHolder"
      v-bind:describedby="aboutPw.description"
      v-bind:title="aboutPw.title"
      v-bind:enterSeubmit="aboutPw.onEnter"
      v-on:@submit="onJoin"
    />

    <br />
    <b-button class="fullwidth" pill variant="primary" v-on:click="onJoin"
      >Register</b-button
    >
    <button class="user-link-btn" v-on:click="goLogin">로그인 하기</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { registerReq } from "../api/userApi";
import RegExpInput from "./util/RegExpInput.vue";
interface InputAttr {
  idRegExp?: RegExp;
  dexcription?: string;
  placeHolder?: string;
  title?: string;
  onEnter?: boolean;
}

export default Vue.extend({
  components: {
    "pattern-input": RegExpInput,
  },
  data() {
    return {
      inputId: "" as string,
      inputPw: "" as string,
      inputIdState: null as boolean | null,
      inputPwState: null as boolean | null,
      aboutId: {
        idRegExp: /^[a-z0-9]{8,10}$/g,
        description: "영어또는 숫자 8~10자",
        placeHolder: "아이디 입력",
        title: "아이디 : ",
      } as InputAttr,
      aboutPw: {
        idRegExp:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g,
        description: "영문 대소문자, 숫자, 특수문자 포함 8자이상",
        placeHolder: "비밀번호 입력",
        title: "비밀번호 : ",
        onEnter: true,
      } as InputAttr,
    };
  },
  methods: {
    changeId(value: string, state: boolean | null) {
      this.inputIdState = state;
      this.inputId = value;
    },
    changePw(value: string, state: boolean | null) {
      this.inputPwState = state;
      this.inputPw = value;
    },
    onJoin() {
      if (!this.inputIdState) {
        this.$store.dispatch("openAlert", {
          text: "아이디 입력을 확인해주세요",
          type: "danger",
        });
        const idRef = this.$refs.id as any;
        idRef.focusInput();
      } else if (!this.inputPwState) {
        this.$store.dispatch("openAlert", {
          text: "비밀번호 입력을 확인해주세요",
          type: "danger",
        });
        const pwRef = this.$refs.pw as any;
        pwRef.focusInput();
      } else {
        const JOIN_URL = "https://toyboard.herokuapp.com/auth/register";
        registerReq(
          JOIN_URL,
          {
            userid: this.inputId,
            userpw: this.inputPw,
          },
          () => {
            this.$store.dispatch("openAlert", {
              text: "회원가입 성공! 로그인해주세요",
              type: "success",
            });
            this.$store.commit("SET_ON_MODAL", false);
          },
          (msg) => {
            this.$store.dispatch("openAlert", {
              text: msg,
              type: "danger",
            });
            const idRef = this.$refs.id as any;
            idRef.focusInput();
          }
        );
      }
    },
    goLogin() {
      this.$emit("@goLogin", "login");
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
</style>
