<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success" class="navbar">
      <b-container>
        <b-navbar-brand href="#">{{ test }}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="align__right" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button variant="success" v-on:click="loginFunc">Login</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script lang="ts">
// import { defineComponent } from '@vue/composition-api'/

export default {
  data() {
    return {
      test: "board",
    };
  },
  methods: {
    loginFunc() {
      alert();
    },
  },
};
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
