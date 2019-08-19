<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  background: #CCCCCC;
}
.page-inner{
  height: 100%;
  width: 100%;
}
.page-wrapper {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: #CCCCCC;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  position: relative;
  margin: 0 auto;
  width: 21cm;
  height: 29.68cm;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
.start {
  position: fixed;
  right: 10%;
  bottom: 15%;
  animation: toUp 0.5s ease-out both;
}
@keyframes toUp {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
