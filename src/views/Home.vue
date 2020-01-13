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
    <footer>
      <div>
        <div>
          Copyright 2019 - present xieyezi All Rights Reserved
          <a href="http://www.beian.miit.gov.cn/" class="highlight-name_beian" target="_blank">渝ICP备17013916号</a>
          <span style="margin-left:30px;margin-right:10px;">联系我:</span>
          <a href="https://github.com/xieyezi" class="highlight-name" target="_blank">Github</a>
          <a href="https://juejin.im/user/5c1cfe85e51d4511851c478d" class="highlight-name" target="_blank">掘金</a>
          <a href="https://www.zhihu.com/people/xie-ye-zi-47/activities" class="highlight-name" target="_blank">知乎</a>
        </div>
      </div>
    </footer>
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
  background-image: url("https://cdn.xieyezi.com/banner.jpg");
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
  background-color: rgba(7, 17, 27, 0.6);
}
.banner {
  position: relative;
  width: 100%;
  height: 92%;
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
}
footer {
    position: relative;
    width: 100%;
    height: 8%;
    padding: 20px 0;
    background: rgba(7, 17, 27, 0.2);
    font-size: 12px;
    color: #fff;
    margin: 0 auto;
    font-weight: 400;
    text-align: center;
}
.highlight-name_beian{
    color: #0e90d2;
    font-size: 12px;
    font-weight: 400;
    transition: all 0.3s;
    margin-right: 10px;
}
.highlight-name {
    color: #0e90d2;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s;
    margin-right: 10px;
}
.highlight-name:hover{
  color: #095f8a;
}
footer a {
  text-decoration: none;
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
