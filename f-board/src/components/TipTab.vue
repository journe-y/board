<template>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import { Bold, Italic, Link, HardBreak, Heading } from "tiptap-extensions";

// import StarterKit from "@tiptap/starter-kit";
import Vue from "vue";

export default Vue.extend({
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
      extensions: [
        new Bold(),
        new Italic(),
        new Link(),
        new HardBreak(),
        new Heading(),
      ],
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },
});
</script>