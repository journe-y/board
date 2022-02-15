<template>
  <div role="group">
    <label for="input-live">{{ title }}</label>
    <b-form-input
      v-model="value"
      :state="idState"
      v-on:keyup="onKeyup"
      v-bind:type="type"
      aria-describedby="input-live-help input-live-feedback"
      v-bind:placeholder="placeHolder"
      trim
    ></b-form-input>

    <!-- This will only be shown if the preceding input has an invalid state -->
    <b-form-invalid-feedback id="input-live-feedback">
      {{ describedby }}
    </b-form-invalid-feedback>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    pattern: {
      type: RegExp,
    },
    placeHolder: {
      type: String,
      default: "",
    },
    describedby: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  computed: {
    idState(): boolean | null {
      if (this.value.length === 0) return null;
      if (this.value.match(new RegExp(this.pattern))) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onKeyup() {
      this.$emit("@keyup", this.value);
    },
  },
});
</script>