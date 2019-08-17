<template>
  <div class="page-wrapper">
    <div id="cool" class="page">
      <div class="page-inner">
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
                    <Icon type="ios-phone-portrait" />
                    {{ person.contact.phone }}
                  </div>

                  <a
                    v-if="person.contact.website"
                    class="section-link"
                    href="person.contact.website"
                  >
                    <Icon type="ios-home-outline" />
                    {{ person.contact.website }}
                  </a>

                  <a
                    v-if="person.contact.linkedin"
                    class="section-link"
                    href="contactLinks.linkedin"
                  >
                    <Icon type="logo-linkedin" />
                    {{ person.contact.linkedin }}
                  </a>

                  <a v-if="person.contact.github" class="section-link" href="contactLinks.github">
                    <Icon type="logo-github" />
                    {{ person.contact.github }}
                  </a>

                  <a v-if="person.contact.medium" class="section-link" href="contactLinks.medium">
                    <i class="section-link__icon fa fa-medium"></i>
                    {{ person.contact.medium }}
                  </a>
                </div>
              </div>
            </div>

            <div class="content__right">
              <div class="section">
                <div class="section-headline">
                 <Icon type="md-list-box" />
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
                 <Icon type="ios-school-outline" />
                  教育经历
                </div>

                <div class="section-content">
                  <a
                    v-for="(education, index) in person.education"
                    class="section-content__item"
                    :key="index"
                    href="education.website"
                  >
                    <span class="section-content__header">{{ education.school }}</span>
                    <span class="section-content__subheader">{{ education.degree }}</span>
                    <span class="section-content__text">{{ education.timeperiod }}</span>
                    <span class="section-content__text--light">{{ education.description }}</span>
                  </a>
                </div>
              </div>

              <div v-if="person.projects" class="section">
                <div class="section-headline">
                  <Icon type="md-code-working" />
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
                    <span class="section-content__subheader">{{ project.platform }}</span>
                    <span class="section-content__text">{{ project.description }}</span>
                  </a>
                </div>
              </div>

              <div v-if="person.contributions" class="section">
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

              <div v-if="person.honors" class="section">
                <div class="section-headline">
                  <i class="section-headline__icon fa fa-sign-language"></i>
                  {{lang.honors}}
                </div>

                <div class="section-content-grid">
                  <a
                    v-for="(honor, index) in person.honors"
                    class="section-content__item-grid"
                    :key="index"
                    href="honor.url"
                  >
                    <span class="section-content__header">{{ honor.name }}</span>
                    <span class="section-content__text">{{ honor.description }}</span>
                    <span
                      class="section-content__text--light"
                      style="word-break: break-all;"
                    >{{ honor.url }}</span>
                  </a>
                </div>
              </div>

              <div v-if="person.advantages" class="section">
                <div class="section-headline">
                  <i class="section-headline__icon fa fa-thumbs-up"></i>
                  {{lang.advantages}}
                </div>

                <div class="section-content-grid">
                  <a
                    v-for="(advantage, index) in person.advantages"
                    class="section-content__item-grid"
                    :key="index"
                    href="advantage.url"
                  >
                    <span class="section-content__header">{{ advantage.name }}</span>
                    <span class="section-content__text">{{ advantage.description }}</span>
                    <span
                      class="section-content__text--light"
                      style="word-break: break-all;"
                    >{{ advantage.url }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <img class="picture" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { person } from "../../resume/data";
export default {
  name: "cool",
  data() {
    return {
      person: {}
    };
  },
  components: {},
  methods: {},
  created() {
    this.person = person;
    console.log(this.person);
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
    margin-bottom: 5px;
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
