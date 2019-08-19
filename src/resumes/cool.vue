<template>
  <div class="page-wrapper">
    <div id="cool" class="page">
      <div class="page-inner" v-if="this.person.birth">
        <div class="resume">
          <div class="banner">
            <div
              class="banner__fullname"
            >{{ person.name}}</div>
            <div class="banner__position">{{ person.position }}</div>
            <div
              class="banner__position"
            >{{person.birth.year}} 出生于 {{person.birth.location}}</div>
          </div>

          <div class="content">
            <div class="content__left">
              <div class="section">
                <div class="section-headline">自我简介</div>

                <div class="section-content section-content--plain">
                  {{ person.about }}
                  <br /> 
                  <br />
                  {{ person.knowledge }}
                </div>
              </div>
              <div v-if="person.skills" class="section">
                <div class="section-headline">专业技能</div>

                <div class="section-content-grid">
                  <a
                    v-for="(skill, index) in person.skills"
                    class="grid-item"
                    :key="index"
                    href="skill.url"
                  >
                    <span class="squarred-grid-item">{{ skill.name }}</span>
                  </a>
                </div>
              </div>

              <div v-if="person.jobs" class="section">
                <div class="section-headline">工作经历</div>

                <div class="section-content-grid">
                  <a
                    v-for="(job, index) in person.jobs"
                    class="grid-item"
                    :key="index"
                    href="job.url"
                  >
                    <span class="squarred-grid-item">{{ job.name }}</span>
                  </a>
                </div>
              </div>

              <div class="section">
                <div class="section-headline">联系方式</div>

                <div class="section-content section-content--plain">
                  <div class="section-link">
                    <i class=" el-icon-map-location"></i>
                    {{ person.contact.street }}
                  </div>

                  <a class="section-link" href="contactLinks.email">
                   <i class="el-icon-phone"></i>
                    {{ person.contact.email }}
                  </a>

                  <div class="section-link">
                  <i class="el-icon-phone"></i>
                    {{ person.contact.phone }}
                  </div>

                  <a
                    v-if="person.contact.website"
                    class="section-link"
                    href="person.contact.website"
                  >
                    <i class="el-icon-phone"></i>
                    {{ person.contact.website }}
                  </a>

                  <a
                    v-if="person.contact.linkedin"
                    class="section-link"
                    href="contactLinks.linkedin"
                  >
                    <i class="el-icon-phone"></i>
                    {{ person.contact.linkedin }}
                  </a>

                  <a v-if="person.contact.github" class="section-link" href="contactLinks.github">
                    <i class="el-icon-phone"></i>
                    {{ person.contact.github }}
                  </a>

                  <a v-if="person.contact.medium" class="section-link" href="contactLinks.medium">
                   <i class="el-icon-phone"></i>
                    {{ person.contact.medium }}
                  </a>
                </div>
              </div>
            </div>

            <div class="content__right">
              <div class="section">
                <div class="section-headline">
                  <i class=" el-icon-suitcase"></i>
                 工作经历
                </div>

                <div class="section-content">
                  <a
                    v-for="(experience, index) in person.experience"
                    :key="index"
                    class="section-content__item"
                    href="experience.website"
                  >
                    <span class="section-content__header">{{ experience.position }}</span>
                    <span class="section-content__subheader">
                      {{ experience.company }}
                      <span
                        class="section-content__plain"
                      >{{ experience.location }}</span>
                    </span>

                    <div class="section-content__text">{{ experience.timeperiod }}</div>
                    <span class="section-content__text--light">{{ experience.description }}</span>
                  </a>
                </div>
              </div>

              <div class="section">
                <div class="section-headline">
                 <i class=" el-icon-school"></i>
                  教育经历
                </div>

                <div class="section-content">
                  <a
                    v-for="(item, index) in person.education"
                    class="section-content__item"
                    :key="index"
                    href="education.website"
                  >
                    <span class="section-content__header">{{ item.school }}</span>
                    <span class="section-content__subheader">{{ item.degree }}</span>
                    <span class="section-content__text">{{ item.timeperiod }}</span>
                    <span class="section-content__text--light">{{ item.description }}</span>
                  </a>
                </div>
              </div>

              <div v-if="person.projects" class="section">
                <div class="section-headline">
                 <i class=" el-icon-school"></i>
                  项目经历
                </div>

                <div class="section-content-grid">
                  <a
                    v-for="(project, index) in person.projects"
                    :key="index"
                    class="section-content__item-grid"
                    href="project.url"
                  >
                    <span class="section-content__header">{{ project.name }}</span>
                    <span class="section-content__text" style="display:inline-block;padding-right:10px;padding-top:10px;">开发语言</span><span>{{project.platform}}</span>
                    <span class="section-content__text" style="padding-top:10px;">项目描述</span><p>{{project.description}}</p>
                    <span class="section-content__text" style="display:inline-block;padding-right:10px;padding-top:10px;">项目地址</span><span>{{project.url}}</span>
                  </a>
                </div>
              </div>

              <div v-if="person.contributions.length >1" class="section">
                <div class="section-headline">
                  <i class="section-headline__icon fa fa-heart"></i>
                  贡献
                </div>

                <div class="section-content-grid">
                  <a
                    v-for="(contribution, index) in person.contributions"
                    class="section-content__item-grid"
                    :key="index"
                    href="contribution.url"
                  >
                    <span class="section-content__header">{{ contribution.name }}</span>
                    <span class="section-content__text">{{ contribution.description }}</span>
                    <span
                      class="section-content__text--light"
                      style="word-break: break-all;"
                    >{{ contribution.url }}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <img class="picture" />
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
import { mapGetters } from "vuex";
export default {
  name: "cool",
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
    if(this.personinfo){
      this.person = this.personinfo;
    }else{
       this.person = Person;
    }
  },
  components: {},
  methods: {
    download(){
        
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
@accent-color: #34495e;
@banner-color: #42b883;
@banner-height: 120px;
@picture-size: 120px;
@picture-offset: 35px;
@base-padding: 30px;
@left-column-width: 240px;

a {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}
.resume {
  position: relative;
  font-family: "Roboto" !important;
  font-size: 0.9em;
  
}

.picture {
  position: absolute;
  top: @banner-height - @picture-offset;
  left: @left-column-width + @base-padding * 2 - @picture-size / 2;
  height: @picture-size;
  width: @picture-size;
  border-radius: 50%;
  border: 5px solid @accent-color;
  content: url("../../resume/person.jpg");
  z-index: 2;
}

.banner {
  width: calc(100% - @base-padding * 2);
  height: @banner-height;
  padding: @base-padding;
  background-color: @banner-color;
  /*
    background-image: url('../../resume/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
  */
  color: white;

  &__fullname {
    font-size: 32px;
    text-transform: uppercase;
  }

  &__position {
    font-size: 16px;
  }

  &__location {
    font-size: 12px;
  }
}

.content {
  display: flex;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    height: 100%;
    padding: @base-padding;
  }

  &__left {
    width: @left-column-width;
    color: rgba(255, 255, 255, 0.59);
    background-color: @accent-color;

    .section-headline {
      color: white;
    }
  }

  &__right {
    flex: 1;
  }
}

.section {
  margin: 20px 0;
}

.section-link,
.section-headline {
  display: flex !important;
  align-items: center;
  color: @accent-color;
  display: inline-block;
  font-size: 1.2em;
  margin: 8px 0;

  &__icon {
    margin-right: 8px;
    font-size: 1.4em;
  }
}

.section-link {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.59) !important;

  &__icon {
    color: white;
  }
}

.section-content {
  margin-top: 5px;
  padding-left: 32px;
  font-size: 14px;

  &__item {
    display: block;
    margin-bottom: 20px;
  }

  &__header {
    display: block;
    font-size: 1.1em;
    font-weight: 500;
  }

  &__subheader {
    display: block;
    font-weight: 400;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 12px;

    &--light {
      font-size: 12px;
    }
  }

  &__plain {
    display: inline;
    font-weight: 300;
  }

  &__item-grid {
    // flex: 1 1 0;
    margin-bottom: 40px;
    padding-right: 5px;
  }

  &--plain {
    padding: 0;
  }
}

.section-content-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;
}

.grid-item {
  padding-right: 5px;
}

.squarred-grid-item {
  display: block;
  border: 1px solid white;
  color: white;
  margin-top: 5px;
  padding: 5px;
}
</style>
