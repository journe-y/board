<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="" class="navbar">
      <b-container>
        <b-navbar-brand class="logo" href="#">{{ test }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="align__right" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button-group>
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
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <modal v-bind:show="loginShow" v-on:@off="modalOnOff"
      ><login v-if="userEvent === 'login'" />
      <register v-if="userEvent === 'join'" />
    </modal>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Modal from "./Modal.vue";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";

export default Vue.extend({
  components: {
    modal: Modal,
    login: LoginForm,
    register: RegisterForm,
  },
  data() {
    return {
      test: "board",
      userEvent: "",
      loginShow: false,
    };
  },
  methods: {
    modalOnOff(e: { target: Element }): void {
      const hasNotBackDrop = !e.target.classList.contains("backdrop");
      if (hasNotBackDrop && e.target.classList.contains("login-btn")) {
        this.userEvent = "login";
      } else if (hasNotBackDrop && e.target.classList.contains("join-btn")) {
        this.userEvent = "join";
      }
      this.loginShow = !this.loginShow;
    },
  },
});
</script>

<style scoped>
.logo {
  color: #0d6efd !important;
}
.navbar {
  z-index: 100;
  height: 70px;
  box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 25%);
}
.align__right {
  flex-direction: row-reverse;
  width: 100%;
}
</style>
