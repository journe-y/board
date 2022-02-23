<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="" class="navbar">
      <b-container>
        <b-navbar-brand class="logo" href="#"
          >{{ test }}--{{ this.$store.state.isMember }}</b-navbar-brand
        >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="align__right" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button-group v-if="!this.$store.state.isMember">
              <b-button
                variant="outline-primary"
                class="login-btn"
                v-on:click="modalOnOff"
                >Login</b-button
              >
              <b-button
                variant="outline-primary"
                class="join-btn"
                v-on:click="modalOnOff"
                >Join</b-button
              ></b-button-group
            >
            <b-button
              v-if="this.$store.state.isMember"
              variant="outline-primary"
              class="login-btn"
              v-on:click="logout"
              >Logout</b-button
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <modal v-bind:show="this.$store.state.onModal" v-on:@off="modalOnOff"
      ><login v-if="userEvent === 'login'" />
      <register v-else-if="userEvent === 'join'" />
      <login v-else />
    </modal>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Modal from "./Modal.vue";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default Vue.extend({
  components: {
    modal: Modal,
    login: LoginForm,
    register: RegisterForm,
  },
  data() {
    return {
      test: "board" as string,
      userEvent: "" as string,
    };
  },
  //중복 코드 수정
  methods: {
    modalOnOff(e: { target: Element }): void {
      const hasNotBackDrop = !e.target.classList.contains("backdrop");
      if (hasNotBackDrop && e.target.classList.contains("login-btn")) {
        this.userEvent = "login";
        this.$store.commit("SET_ON_MODAL", true);
        return;
      } else if (hasNotBackDrop && e.target.classList.contains("join-btn")) {
        this.userEvent = "join";
        this.$store.commit("SET_ON_MODAL", true);
        return;
      }
      this.$store.commit("SET_ON_MODAL", false);
      this.userEvent = "login";
    },
    modalOff(): void {
      this.$store.commit("SET_ON_MODAL", false);
      this.userEvent = "login";
    },
    logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      this.$store.commit("SET_AUTH", false);
    },
  },
});
</script>

<style scoped>
.logo {
  color: #0d6efd !important;
}
.navbar {
  background-color: white;
  z-index: 100;
  height: 70px;
  box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 18%);
  position: fixed;
  width: 100%;
}
.align__right {
  flex-direction: row-reverse;
  width: 100%;
}
</style>
