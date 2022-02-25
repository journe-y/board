<template>
  <section class="write-container read-page">
    <b-container>
      <b-row>
        <b-col cols="8">
          <h1>
            <b>{{ data.title }}</b>
          </h1>
        </b-col>
        <b-col cols="2"></b-col>
        <b-col
          cols="2"
          class="postBtn"
          v-show="data.userid === this.$store.state.userid"
        >
          <b-button-group>
            <b-button variant="outline-success" v-on:click="modify"
              >수정</b-button
            >
            <b-button variant="outline-danger">삭제</b-button>
          </b-button-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col cols="2">작성자 : {{ data.userid }}</b-col>
        <b-col cols="10">{{ data.date }}</b-col>
      </b-row>
      <br />
      <hr />
      <br />
      <b-row ref="content"> </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { getPostDetail } from "../api/post";
import { PostDetail } from "../api/type";

export default Vue.extend({
  props: {
    id: {
      type: String || Number,
      default: 0,
    },
  },
  data() {
    return {
      test: "ReadPage",
      data: {},
      user: localStorage.getItem("userid") ?? "null",
    };
  },
  created() {
    getPostDetail(`/post/read/${this.id}`, (post: PostDetail) => {
      this.data = post;
      const contentEl: any = this.$refs.content;
      contentEl.innerHTML = post.contents;
    });
  },
  methods: {
    modify() {
      //token확인+자신글(토큰에있는 아이디확인)인지 확인 후 해당 글(id) modify
      alert();
    },
  },
});
</script>

<style scoped>
.read-page {
  background-color: white;
}
.postBtn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
