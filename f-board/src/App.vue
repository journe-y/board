<template>
  <div class="body-container">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    navbar: NavBar,
  },
};
</script>

<style>
html,
body,
.body-container {
  min-height: 100vh;
}
.main-container {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding-top: 70px;
  display: flex;
  background-color: rgb(248, 249, 255);
}
.write-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding-top: 100px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  background-color: rgb(248, 249, 255);
}
.main {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
}
.quill-editor,
.ql-editor {
  width: 80vw;
  box-shadow: 0px 0px 2px 2px rgb(215, 221, 253);
  min-height: 50vh;
  background-color: white;
}
.side {
  width: 300px;
}
.add-post {
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  width: 80px;
  height: 50px;
  background-color: #0d6efd;
  color: white;
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  border-radius: 100px;
  align-items: center;
  position: fixed;
  bottom: 60px;
  right: 60px;
}
.add-post:hover {
  border: 1px solid #0d6efd;
  color: #0d6efd;
  background-color: rgba(13, 109, 253, 0);
}
.fullwidth {
  width: 100%;
}
.user-link-btn {
  text-decoration: underline;
  color: #0d6efd;
  outline: none;
  border: none;
  background-color: #ffffff00;
  margin-top: 5px;
  font-size: 12px;
}
</style>
