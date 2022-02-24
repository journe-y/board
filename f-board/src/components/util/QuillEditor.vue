<template>
  <div>
    <quill-editor
      ref="myQuillEditor"
      :content="content"
      :options="editorOption"
      @change="onEditorChange($event)"
      @ready="onEditorReady($event)"
    />
    <button class="add-post" v-on:click="submitPost">발행</button>
    <input id="file" type="file" accept="image/*" v-on:change="uploadedFile" />
  </div>
</template>

<script>
import axios from 'axios'

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
  data() {
    return {
      content: "",
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
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      //console.log("editor change!", quill, html, text);
      this.content = html;
    },
    submitPost() {
      this.$emit("@submit", this.content);
    },
    async uploadedFile(e) {
      const formData = new FormData();
      formData.append("img", e.target.files[0]);
      try {
        const result = await axios.post("/post/upload", formData);
        let range = this.editor.getSelection();
        this.editor.insertEmbed(range.index, "image", result.data.url);
      } catch (err) {
        alert("이미지 로드 실패 다시 시도해주세요");
      }
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