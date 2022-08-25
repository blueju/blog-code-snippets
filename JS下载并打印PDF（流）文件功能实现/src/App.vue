<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 in CodeSandbox!" /> -->
  <hr />
  <button @click="downloadPrint">下载并打印</button>
</template>

<script>
// import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    // HelloWorld: HelloWorldVue,
  },
  methods: {
    downloadPrint() {
      fetch("./这是一个PDF.pdf")
        .then((res) => res.blob())
        .then((resBlob) => {
          const src = URL.createObjectURL(resBlob);
          let iframe = document.createElement("iframe");
          iframe.setAttribute("id", "print-container");
          iframe.style.display = "none";
          iframe.setAttribute("src", src);
          document.body.appendChild(iframe);
          setTimeout(function () {
            iframe.contentWindow.print();
            URL.revokeObjectURL(src);
          }, 0);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
