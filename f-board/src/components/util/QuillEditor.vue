<template>
  <!-- Two-way Data-Binding -->
  <div>
    <!-- <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"j
      @ready="onEditorReady($event)"
    /> -->

    <!-- Or manually control the data synchronization -->
    <quill-editor
      :content="content"
      :options="editorOption"
      @change="onEditorChange($event)"
    />
    <button class="add-post" v-on:click="submitPost">발행</button>
  </div>
</template>

<script>
const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["image"],
];
export default {
  data() {
    return {
      content: "",
      editorOption: {
        placeholder: "새 글 작성 ...",
        readOnly: true,
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
      },
    };
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    submitPost() {
      this.$emit("@submit", this.content);
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
};
</script>