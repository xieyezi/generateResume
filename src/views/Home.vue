<template>
  <div class="home">
    <div class="filter"></div>
    <div class="banner">
      <div class="intro">
        <h2 class="slogan">满网络找简历模版心力交瘁？试试换个方式!</h2>
        <p class="sub-slogan">多个优美简历模版 + Vue强力驱动,帮助你迅速制作出漂亮简历。</p>
         <el-button type="primary" style="font-size:20px;width:200px;" class="go" @click="go">马上开始</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    go() {
      this.$router.push({
        path: "/create"
      });
    }
  }
};
</script>
<style scoped>
.home {
  position: fixed;
  background-image: url("../assets//images/banner.jpg");
  background-position: center;
  transform-origin: top;
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, 0.5);
}
.banner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;
  text-align: center;
  color: #fff;
}
.intro {
  margin: 0 auto;
}
.slogan {
  font-size: 40px;
  font-weight: inherit;
  animation: right2left 0.5s ease-out both;
}
.sub-slogan {
  font-weight: inherit;
  font-size: 30px;
  animation: left2right 0.5s ease-out both;
}
.go {
  margin-top: 20px;
  animation: toUp 0.5s 0.2s ease-out both;
  /* background: #d22e3e;
  border-color: #d22e3e; */
}
@keyframes right2left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes left2right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
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
