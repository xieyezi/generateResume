<template>
  <div class="getinfo">
    <el-dialog
      title="输入你的信息,可能这会花费一些时间,但是效果决定让你惊艳😀"
      :visible.sync="dialogVisiable"
      width="60%"
      :before-close="beforeClose"
    >
      <el-form
        :model="personFrom"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="你的大名" prop="name">
          <el-input v-model="personFrom.name" placeholder="你的大名" style="width:50%;"></el-input>
        </el-form-item>

        <el-form-item label="生日和城市" prop="birth">
          <el-date-picker v-model="personFrom.birth.year" type="month" placeholder="出生年月" style="width:40%;display:inline-block;"></el-date-picker>
          <p style="display:inline-block;padding:0px 5px 0px 5px;">出生于</p>
          <el-input v-model="personFrom.birth.location" placeholder="出生城市" style="width:30%;display:inline-block;"></el-input>
        </el-form-item>

        <el-form-item label="个人简介" prop="about" style="width:60%;">
          <el-input
            v-model="personFrom.about"
            type="textarea"
            placeholder="用一句话介绍你自己"
            maxlength="20"
            show-word-limit
          ></el-input>
        </el-form-item>

        <el-form-item label="职位" prop="position">
          <el-input v-model="personFrom.position" placeholder="你现在想要应聘的职位" style="width:50%;"></el-input>
        </el-form-item>



        <el-form-item label="最高学历" prop="education">
          <el-input v-model="personFrom.education.degree" placeholder="最高学位" style="width:60%;"></el-input>
          <el-input v-model="personFrom.education.description" placeholder="毕业学校" style="width:60%;padding-top:10px;"></el-input>
         <el-date-picker v-model="personFrom.education.timeperiod" type="monthrange" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" style="width:60%;margin-top:10px;"></el-date-picker>
          <el-input v-model="personFrom.education.website" placeholder="学校官网" style="width:60%;padding-top:10px;"></el-input>
        </el-form-item>

        <el-form-item label="工作经历"  prop="experience"  v-for="(experice,index) in personFrom.experience">
          <el-input v-model="personFrom.experience[index].company" placeholder="公司名称" style="width:60%;"></el-input>
          <el-input v-model="personFrom.experience[index].position" placeholder="你的职位" style="width:60%;padding-top:10px;"></el-input>
          <el-date-picker v-model="personFrom.experience[index].timeperiod" type="monthrange" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" style="width:60%;margin-top:10px;"></el-date-picker>
          <el-input v-model="personFrom.experience[index].website" placeholder="公司官网" style="width:60%;padding-top:10px;"></el-input>
          <el-input v-model="personFrom.experience[index].description" placeholder="工作描述" rows="4" type="textarea" maxlength="50" show-word-limit style="width:60%;padding-top:10px;"></el-input>
          <el-button type="primary" style="margin-left:20px;" @click="addExperience">添加工作经历</el-button>
          <el-button v-if="index>0" type="primary" style="margin-left:10px;" @click="removeExperience(index)">删除</el-button>
        </el-form-item>

        <el-form-item label="项目经历" prop="projects" v-for="(project,index) in personFrom.projects">
          <el-input v-model="personFrom.projects[index].name" placeholder="项目名称" style="width:60%;"></el-input>
          <el-input v-model="personFrom.projects[index].platform" placeholder="开发平台(例如Vue)" style="width:60%;padding-top:10px;"></el-input>
          <el-input v-model="personFrom.projects[index].url" placeholder="项目地址" style="width:60%;padding-top:10px;"></el-input>
          <el-input v-model="personFrom.projects[index].description" placeholder="项目描述" rows="4" type="textarea" maxlength="50" show-word-limit style="width:60%;padding-top:10px;"></el-input>
          <el-button type="primary" style="margin-left:20px;" @click="addProject">添加项目经历</el-button>
          <el-button v-if="index>0" type="primary" style="margin-left:10px;" @click="removeProject(index)">删除</el-button>
        </el-form-item>

        <el-form-item label="专业技能" prop="skills" v-for="(skill,index) in personFrom.skills">
          <el-input v-model="personFrom.skills.name" placeholder="名称" style="width:60%;"></el-input>
          <el-input v-model="personFrom.skills.level" placeholder="程度(满分为100)" style="width:60%;padding-top:10px;"></el-input>
          <el-button type="primary" style="margin-left:20px;" @click="addSkill">添加专业技能</el-button>
          <el-button v-if="index>0" type="primary" style="margin-left:10px;" @click="removeSkill(index)">删除</el-button>
        </el-form-item>

        <el-form-item label="兴趣爱好" prop="hobbies" v-for="(hobby,index) in personFrom.hobbies">
          <el-input v-model="personFrom.hobbies.name" placeholder="名称" style="width:60%;"></el-input>
          <el-button type="primary" style="margin-left:20px;" @click="addHobby">添加兴趣爱好</el-button>
          <el-button v-if="index>0" type="primary" style="margin-left:10px;" @click="removeHobby(index)">删除</el-button>
        </el-form-item>



        <el-form-item label="联系方式" prop="hobbies">
          <el-input v-model="personFrom.contact.email" placeholder="电子邮件" style="width:60%;"></el-input>
          <el-input v-model="personFrom.contact.phone" placeholder="电话" style="width:60%;padding-top:10px;"></el-input>
          <el-input v-model="personFrom.contact.city" placeholder="城市" style="width:60%;padding-top:10px;"></el-input>
          <el-input v-model="personFrom.contact.street" placeholder="街道" style="width:60%;padding-top:10px;"></el-input>
          <el-input v-model="personFrom.contact.website" placeholder="个人网站" style="width:60%;padding-top:10px;"></el-input>
          <el-input v-model="personFrom.contact.github" placeholder="GitHub" style="width:60%;padding-top:10px;"></el-input>
        </el-form-item>
    </el-form> 
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">生成简历</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "getInfoDialog",
  props: {
    dialogOpen: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      dialogVisiable: false,
      personFrom: {
        name: "", //姓名
        about: "", //个人简介
        position: "", //职位
        birth: {
          year: "",
          location: ""
        },
        experience: [
          {
            company: "",
            position: "",
            timeperiod: "",
            description: "",
            website: ""
          }
        ],
        education: [
          {
            degree: "",
            timeperiod: "",
            description: "",
            website: ""
          }
        ],
        skills: [
          {
            name: "",
            level: ""
          }
        ],
        knowledge: "",
        projects: [
          {
            name: "",
            platform: "",
            description:"",
            url: ""
          }
        ],
        hobbies: [
          {
            name: "",
          }
        ],
        contributions: [
          {
            name: "",
            description:"",
            url: ""
          }
        ],
        contact: {
          email: "",
          phone: "",
          street: "",
          city: "",
          website: "",
          github: ""
        }
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name:[{ required: true, message: "请输入你的名字", trigger: "blur" }],
        about:[{ required: true, message: "请输入你的个人简介", trigger: "blur" }],
        birth:[{ required: true, message: "请输入你的出生年月和城市", trigger: "blur" }],
        position:[{ required: true, message: "请输入你想要应聘的职位", trigger: "blur" }],
        education:[{ required: true, message: "请输入你的最高学历", trigger: "blur" }],
        experience:[{ required: true, message: "请输入你的工作经历", trigger: "blur" }],
        projects:[{ required: true, message: "请输入你的项目经历", trigger: "blur" }],
        skills:[{ required: true, message: "请输入你的专业技能", trigger: "blur" }],
        hobbies:[{ required: true, message: "请输入你的兴趣爱好", trigger: "blur" }],
        contact:[{ required: true, message: "请输入你的联系方式", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    beforeClose() {
      this.dialogVisiable = false;
      this.$emit("closeDialog", this.dialogVisiable);
    },
    closeDialog() {
      this.dialogVisiable = false;
      this.$emit("closeDialog", this.dialogVisiable);
    },
    genegrate() {
      this.dialogVisiable = false;
      this.$emit("closeDialog", this.dialogVisiable);
    },
    addExperience(){
      this.personFrom.experience.push({
        company: "",
        position: "",
        timeperiod: "",
        description: "",
        website: ""
      });
    },
    addProject(){
      this.personFrom.projects.push({
         name: "",
         platform: "",
         description:"",
         url: ""
      });
    },
    addSkill(){
      this.personFrom.skills.push({
        name: "",
        level: ""
      });
    },
    addHobby(){
      this.personFrom.hobbies.push({
        name:""
      });
    },
    removeExperience(index){
      if(index >= 1){
        this.personFrom.experience.splice(index,1);
      }else{
        return;
      }
    },
    removeProject(index){
      if(index >=1){
        this.personFrom.projects.splice(index,1);
      }else{
        return;
      }
    },
    removeSkill(index){
      if(index >=1){
        this.personFrom.skills.splice(index,1);
      }else{
       return;
      } 
    },
    removeHobby(index){
      if(index >=1){
        this.personFrom.hobbies.splice(index,1);
      }else{
        return;
      }
    },
    submitForm() {},
    resetForm() {}
  },
  created() {},
  watch: {
    dialogOpen(val) {
      this.dialogVisiable = val;
    }
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

