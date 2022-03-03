<template>
  <div>
    <quill-editor
      ref="myQuillEditor"
      :content="originContent"
      :options="editorOption"
      @change="onEditorChange($event)"
      @ready="onEditorReady($event)"
    />

    <input
      style="opacity: 0"
      id="file"
      type="file"
      accept="image/*"
      v-on:change="uploadedFile"
    />
  </div>
</template>

<script>
import axios from "axios";

//toolbar설정
const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],

  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],
  ["image"],
];
//이미지 업로드 handler
const customTool = {
  container: toolbarOptions,
  handlers: {
    image: function () {
      document.getElementById("file").click();
    },
  },
};
export default {
  props: {
    originContent: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      //content: this.originContent,
      editorOption: {
        placeholder: "새 글 작성 ...",
        readOnly: true,
        theme: "snow",
        modules: {
          toolbar: customTool,
        },
      },
    };
  },
  methods: {
    //수정시 ready에서 초기 data로드
    onEditorReady(quill) {
      //console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      this.$emit("@change", html);
    },
    async uploadedFile(e) {
      const formData = new FormData();
      formData.append("img", e.target.files[0]);
      try {
        const result = await axios.post("https://toyboard.herokuapp.com/post/upload", formData);
        let range = this.editor.getSelection();
        this.editor.insertEmbed(range.index, "image", result.data.url);
      } catch (err) {
        this.$store.dispatch("openAlert", {
          text: "이미지 로드 실패 다시 시도해주세요",
          type: "danger",
        });
      }
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
};
</script>
