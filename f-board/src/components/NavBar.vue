<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success" class="navbar">
      <b-container>
        <b-navbar-brand href="#">{{ test }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="align__right" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button variant="success" v-on:click="modalOnOff">Login</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <modal v-bind:show="loginShow" v-on:@off="modalOnOff">slot</modal>
  </div>
</template>
<script lang="ts">
// import { defineComponent } from '@vue/composition-api'/
import Vue from "vue";
import Modal from "./Modal.vue";

export default Vue.extend({
  components: {
    'modal': Modal,
  },
  data() {
    return {
      test: "board",
      loginShow: false,
    };
  },
  methods: {
    modalOnOff(): void {
      this.loginShow = !this.loginShow;
    },
  },
});
</script>

<style scoped>
.navbar {
  height: 70px;
}
.align__right {
  flex-direction: row-reverse;
  width: 100%;
}
</style>
