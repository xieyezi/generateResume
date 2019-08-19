<template>
  <div class="page-wrapper">
    <div id="left-right" class="page">
      <div class="page-inner" v-if="this.person.contact">
        <div class="resume" id="resume1">
          <div class="row text-center">
            <span class="name">{{person.name}}</span>
          </div>
          <div class="row text-center">
            <p class="position center">{{person.position}}</p>
          </div>
          <div class="row">
            <div class="image center">
              <div class="img"></div>
            </div>
          </div>
          <div class="left half">
            <div class="experience">
              <h3>工作经历</h3>
              <div
                class="experience-block"
                v-for="experience in person.experience"
                :key="experience.company"
              >
                <span class="company">{{experience.company}}</span>
                <span class="job-title">{{experience.position}}</span>
                <span class="time-period">{{experience.timeperiod}}</span>
                <span class="job-description">{{experience.description}}</span>
              </div>
            </div>
            <div class="contact">
              <h3>联系方式</h3>
              <table>
                <tr>
                  <td>
                    <a href="contactLinks.email">{{person.contact.email}}</a>
                  </td>
                  <td>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="contactLinks.phone">{{person.contact.phone}}</a>
                  </td>
                  <td>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr>
                  <td>
                    {{person.contact.street}}
                    <br />
                    {{person.contact.city}}
                  </td>
                  <td>
                    <i class="fa fa-home" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr v-if="person.contact.website">
                  <td>
                    <a href="person.contact.website">{{person.contact.website}}</a>
                  </td>
                  <td>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                  </td>
                </tr>
                <tr v-if="person.contact.github">
                  <td>
                    <a href="contactLinks.github">{{person.contact.github}}</a>
                  </td>
                  <td>
                    <i class="fa fa-github" aria-hidden="true"></i>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="right half">
            <div class="education">
              <h3>教育经历</h3>
              <div
                class="education-block"
                v-for="education in person.education"
                :key="education.degree"
              >
                <span class="degree">{{education.degree}}</span>
                <span class="degree-description">{{education.description}}</span>
              </div>
            </div>
            <h3>专业技能</h3>
            <div class="skills">
              <div class="skill-block" v-for="skill in person.skills" :key="skill.name">
                <span class="skill">{{skill.name}}</span>
                <div class="skill-bar">
                  <div :style="'width: '+skill.level+'%'" class="level"></div>
                </div>
              </div>
            </div>
            <span class="skills-other">{{person.knowledge}}</span>
          </div>
        </div>
      </div>
    </div>
     <div class="start">
      <el-button type="primary" class="start" style="font-size:16px;width:140px;font-weight:300;" @click="download">下载<i class="el-icon-download el-icon--right"></i></el-button>
    </div>
  </div>
</template>

<script>
import { Person } from "../../resume/data";
import {downloadPDF} from '../utils/htmlToPdf';
import { mapGetters } from "vuex";
export default {
  name: "left-right",
  data() {
    return {
     person:{}
    };
  },
  computed: {
    ...mapGetters([
      "personinfo"
    ])
  },
  mounted(){
    console.log(this.personinfo);
    if(this.personinfo.name){
      this.person = this.personinfo;
    }else{
       this.person = Person;
    }
    this.htmlTitle = `${this.person.name}的个人简历`
  },
  components: {},
  methods: {
    download(){
       //导出PDF
        downloadPDF( document.querySelector('#left-right'), this.htmlTitle);
    }
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  padding-bottom: 50px;
  a,
  a:focus,
  a:hover,
  a:visited {
    color: #616161;
  }
  h3 {
    margin-bottom: 0;
  }
  span {
    display: inline-block;
  }
  .row {
    width: 100%;
  }
  .half {
    width: 44%;
  }
  .half.left {
    float: left;
    text-align: right;
    padding-left: 4%;
    padding-right: 2%;
  }
  .half.right {
    float: right;
    text-align: left;
    padding-right: 4%;
    padding-left: 2%;
  }
  .center {
    margin-left: auto;
    margin-right: auto;
  }
  .text-center {
    text-align: center;
  }
  .name {
    border: 1px solid black;
    text-transform: uppercase;
    padding: 10px 20px;
    margin-top: 80px;
    margin-bottom: 5px;
    font-family: "Open Sans", sans-serif;
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 10px;
  }
  .position {
    text-transform: uppercase;
    font-family: "Open Sans", sans-serif;
    font-size: smaller;
    color: #757575;
    margin-bottom: 40px;
  }
  .image {
    width: 100px;
    height: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
    .img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-image: url("../../resume/person.jpg");
      background-repeat: none;
      background-position: center;
      background-size: cover;
    }
  }
  .contact {
    width: 100%;
    table {
      text-align: right;
      float: right;
      margin-top: 5px;
      color: #616161;
      font-size: 20px;
      i {
        padding: 2px;
        color: #616161;
      }
      tr td:nth-child(2) {
        vertical-align: top;
      }
    }
  }
  .experience .experience-block span {
    width: 100%;
    color: #616161;
  }
  .experience .experience-block span.company {
    font-weight: bold;
    padding-bottom: 5px;
    padding-top: 10px;
    color: #424242;
  }
  .experience .experience-block span.job-title {
    font-style: italic;
  }
  .education-block span {
    color: #616161;
  }
  .education-block span.degree {
    font-weight: bold;
    padding-bottom: 5px;
    padding-top: 10px;
    color: #424242;
  }
  .skills-other {
    color: #616161;
    margin-bottom: 10px;
  }
  .skills {
    margin-top: 20px;
    margin-bottom: 10px;
    .skill-block {
      padding-bottom: 10px;
      display: inline-block;
      .skill {
        width: 100px;
        color: #616161;
        float: left;
      }
      .skill-bar {
        float: right;
        background: #e0e0e0;
        overflow: hidden;
        height: 8px;
        border-radius: 3px;
        margin-top: 6.5px;
        position: relative;
        width: 249px;
        .level {
          background: #757575;
          height: 100%;
        }
      }
    }
  }
}
</style>
