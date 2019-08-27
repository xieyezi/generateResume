<template>
  <div class="createResume">
    <div class="filter"></div>
    <div class="logo">
      <img src="../assets/logo.png" @click="back" />
    </div>
    <h3 class="title">先来看看我们有哪些漂亮的简历吧💁‍♂️</h3>
    <div class="previews">
      <div class="preview">
        <router-link v-bind:to="'/cool'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-cool.jpg" />
            <span>清爽</span>
          </div>
        </router-link>
      </div>
      <div class="preview">
        <router-link v-bind:to="'/material-dark'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-material-dark.jpg" />
            <span>暗灰</span>
          </div>
        </router-link>
      </div>
      <div class="preview">
        <router-link v-bind:to="'/left-right'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-left-right.jpg" />
            <span>纯白1</span>
          </div>
        </router-link>
      </div>
      <div class="preview">
        <router-link v-bind:to="'/left-right-rtl'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-left-right-rtl.jpg" />
            <span>纯白2</span>
          </div>
        </router-link>
      </div>
      <div class="preview">
        <router-link v-bind:to="'/side-bar'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-side-bar.jpg" />
            <span>左右1</span>
          </div>
        </router-link>
      </div>
      <div class="preview">
        <router-link v-bind:to="'/side-bar-rtl'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-side-bar-rtl.jpg" />
            <span>左右2</span>
          </div>
        </router-link>
      </div>
      <div class="preview">
        <router-link v-bind:to="'/oblique'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-oblique.jpg" />
            <span>上下</span>
          </div>
        </router-link>
      </div>
      <div class="preview">
        <router-link v-bind:to="'/creative'">
          <div class="preview-wrapper">
            <img src="https://cdn.xieyezi.com/resume-creative.jpg" />
            <span>深紫</span>
          </div>
        </router-link>
      </div>
    </div>
     
    <div class="start">
     <div>
          <el-button
        type="primary"
        style="font-size:18px;width:160px;font-weight:300;"
        @click="openDialog"
      >
        开始动手吧
        <i class="el-icon-right el-icon--right"></i>
      </el-button>
     </div>

     <div style="margin-top:20px;">
        <el-button
        type="primary"
        style="font-size:18px;width:160px;font-weight:300;"
        @click="toIndex"
      ><i class="el-icon-back el-icon--back"></i>返回首页  
      </el-button>
     </div>
    </div>
    <GetInfoDialog :dialogOpen="dialogOpen" @closeDialog="closeDialog"></GetInfoDialog>
  </div>
</template>
<script>
// @ is an alias to /src
import GetInfoDialog from "./GetInfoDialog";
import { deletePersonInfo } from  '../utils/cache';
import { mapActions } from "vuex";
export default {
  name: "createResume",
  data() {
    return {
      dialogOpen: false
    };
  },
  components: { 
    GetInfoDialog 
  },
  computed: {
  },
  methods: {
    back() {
      this.$router.back();
    },
    openDialog() {
      this.dialogOpen = true;
    },
    closeDialog(val) {
      this.dialogOpen = val;
    },
    toIndex(){
      this.$router.back();
      //返回首页之前清空用户输入
      this.deletePerson();
    },
    ...mapActions([
      'deletePerson'
    ])
  },
  created() {}
};
</script>
<style scoped>
.createResume {
  width: 100%;
  height: 100%;
}
.logo {
  text-align: center;
  cursor: pointer;
  animation: right2left 0.5s ease-out both;
}

.logo img {
  height: 50px;
  margin-top: 40px;
}

.title {
  font-weight: normal;
  text-align: center;
  width: 100%;
  color: black;
  font-weight: 300;
  font-size: 30px;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
  margin-top: 0px;
  margin-bottom: 40px;
  animation: left2right 0.5s ease-out both;
}

.previews {
  width: 60%;
  margin: 0 auto;
}

.preview {
  width: 20%;
  float: left;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-bottom: 1.5%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.3);
  height: 100%;
  overflow: hidden;
}

.preview-wrapper {
  position: relative;
  background: white;
}

.preview img {
  width: 100%;
  opacity: 0.5;
  filter: blur(2px);
}

.preview span {
  position: absolute;
  max-width: 100%;
  font-size: 24px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.9);
  width: 100%;
  text-align: center;
  display: block;
  top: 50%;
  transform: translateY(-50%);
}
.start {
  margin-left: 30px;
  animation: toUp 0.5s ease-out both;
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

