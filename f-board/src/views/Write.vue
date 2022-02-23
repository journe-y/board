<template>
  <section class="write-container">
    <b-form-input
      class="fullwidth title"
      v-model="title"
      type="text"
      placeholder="글 제목"
      trim
    />
    <b-form-select v-model="selected" class="mb-3 form-control fullwidth title">
      <b-form-select-option :value="null" disabled>
        카테고리 선택
      </b-form-select-option>
      <b-form-select-option
        v-for="(item, idx) in options"
        v-bind:key="idx"
        :value="item.value"
      >
        {{ item["text"] }}
      </b-form-select-option>
    </b-form-select>
    <editor v-on:@submit="writePost" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import QuillEditor from "../components/util/QuillEditor.vue";
import { writePostReq } from "../api/post";

export default Vue.extend({
  components: {
    editor: QuillEditor,
  },
  data() {
    return {
      postContent: "",
      title: "",
      selected: "",
      options: [
        { value: "HTTP", text: "HTTP" },
        { value: "SpringBoot", text: "SpringBoot" },
        { value: "Node.js", text: "Node.js" },
        { value: "Vue.js", text: "Vue.js" },
        { value: "React.js", text: "React.js" },
        { value: "ect", text: "ect" },
      ],
    };
  },
  methods: {
    writePost(html: string) {
      this.postContent = html;
      writePostReq(
        "/post/create",
        {
          contents: this.postContent,
          title: this.title,
          category: this.selected,
        },
        () => {
          alert("글작성 완료");
        },
        (err) => {
          console.log(err);

          alert("글작성 실패");
        }
      );
    },
  },
});
</script>

<style scoped>
.fullwidth.title {
  width: 80vw;
  margin-bottom: 10px;
}
</style>
