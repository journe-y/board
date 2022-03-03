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
    getMainImg() {
      if (this.postContent.indexOf('<img src="') === -1) return "";
      let startPos = this.postContent.indexOf('<img src="') + 10;
      let endPost = this.postContent.indexOf('"', startPos);
      return this.postContent.substring(startPos, endPost);
    },
    writePost() {
      if (!this.inputCheck()) {
        return;
      }
      authReq(
        "https://toyboard.herokuapp.com/post/create",
        () => {
          this.$store.dispatch("openAlert", {
            text: "글작성 완료",
            type: "success",
          });
          this.$router.push({ name: "Main" });
        },
        (err) => {
          this.$store.dispatch("openAlert", {
            text: "글작성 실패",
            type: "danger",
          });
          this.$router.go(-1);
        },
        {
          contents: this.postContent,
          title: this.title,
          category: this.selected,
          imgpath: this.getMainImg(),
        }
      );
    },
    updatePost() {
      if (!this.inputCheck()) {
        return;
      }
      authReq(
        `https://toyboard.herokuapp.com/post/modify/${this.data.id}`,
        () => {
          this.$store.dispatch("openAlert", {
            text: "수정 완료",
            type: "success",
          });
          this.$router.go(-1);
        },
        () => {
          this.$store.dispatch("openAlert", {
            text: "본인의 글만 수정 가능합니다.",
            type: "danger",
          });
          this.$router.go(-1);
        },
        {
          contents: this.postContent,
          title: this.title,
          category: this.selected,
          imgpath: this.getMainImg(),
        }
      );
    },
    inputCheck(): boolean {
      if (this.title === "") {
        this.$store.dispatch("openAlert", {
          text: "글 제목을 입력해주세요",
          type: "danger",
        });
        const titleRef = this.$refs.title as any;
        titleRef.focus();
        return false;
      } else if (this.selected === "") {
        this.$store.dispatch("openAlert", {
          text: "카테고리를 선택해주세요",
          type: "danger",
        });
        const category = this.$refs.category as any;
        category.focus();
        return false;
      } else if (this.postContent === "") {
        this.$store.dispatch("openAlert", {
          text: "본문을 작성해주세요",
          type: "danger",
        });
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
