<template>
 <div class="getinfo">
    <el-dialog
        title="输入你的信息"
        :visible.sync="dialogOpen"
        width="30%"
        :before-close="beforeClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="genegrate">确 定</el-button>
        </span>
    </el-dialog>
 </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "getInfoDialog",
  props: {
       dialogOpen:{
          required:true,
          type:Boolean
      },
      closeDialog:{
          required:true,
          type:Function
      }
  },
  data(){
    return{
      
    }
  },
  components: {},
  methods:{
   beforeClose(){
   },
   genegrate(){
       this.dialogOpen = false;
   }
  },
  created () {
  }
};
</script>
<style scoped>

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
</style>

