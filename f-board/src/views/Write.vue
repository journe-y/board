<template>
  <section class="write-container">
    <b-form-input
      ref="title"
      class="fullwidth title"
      v-model="title"
      type="text"
      placeholder="글 제목"
      trim
    />
    <b-form-select
      ref="category"
      v-model="selected"
      class="mb-3 form-control fullwidth title"
    >
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
    <editor v-bind:originContent="postContent" v-on:@change="editChange" />
    <button v-if="!this.data" class="add-post" v-on:click="writePost">
      발행
    </button>
    <button v-else class="add-post" v-on:click="updatePost">수정</button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import QuillEditor from "../components/util/QuillEditor.vue";
import { authReq } from "../api/authRequest";

export default Vue.extend({
  components: {
    editor: QuillEditor,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      postContent: "" as string,
      title: "" as string,
      selected: "" as string,
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
    writePost() {
      if (!this.inputCheck()) {
        return;
      }
      //아래 업데이트처럼 변경해야함....
      authReq(
        "/post/create",
        () => {
          alert("글작성 완료");
          this.$router.push({ name: "Main" });
        },
        (err) => {
          alert("글작성 실패");
          this.$router.go(-1);
        },
        {
          contents: this.postContent,
          title: this.title,
          category: this.selected,
        }
      );
    },
    updatePost() {
      if (!this.inputCheck()) {
        return;
      }
      authReq(
        `/post/modify/${this.data.id}`,
        () => {
          alert(`수정 완료`);
          this.$router.go(-1);
        },
        () => {
          alert("본인의 글만 수정 가능합니다.");
          this.$router.go(-1);
        },
        {
          contents: this.postContent,
          title: this.title,
          category: this.selected,
        }
      );
    },
    inputCheck(): boolean {
      if (this.title === "") {
        alert("글 제목을 입력해주세요");
        const titleRef = this.$refs.title as any;
        titleRef.focus();
        return false;
      } else if (this.selected === "") {
        alert("카테고리를 선택해주세요");
        const category = this.$refs.category as any;
        category.focus();
        return false;
      } else if (this.postContent === "") {
        alert("본문을 작성해주세요");
        return false;
      } else {
        return true;
      }
    },
    editChange(html: string) {
      this.postContent = html;
    },
  },

  created() {
    if (this.$route.name !== "Modify") {
      return;
    }
    this.title = this.data.title as string;
    this.selected = this.data.category as string;
    this.postContent = this.data.contents as string;
  },
});
</script>

<style scoped>
.fullwidth.title {
  width: 80vw;
  margin-bottom: 10px;
}
</style>
