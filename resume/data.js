//定义个人简历的信息

const Person = {
    name: 'xieyezi', //姓名
    about: 'hi,我是写夜子，这是我设计的网站。', //个人简介
    position: 'web 开发工程师', //职位
    birth: {
        year: '1996',
        location: '中国重庆'
    },
    experience: [
        {
            company: "连尚网络科技有限公司",
            position: "web 前端开发工程师",
            timeperiod: "2018.8-2018.12",
            description: "在大数据部门做数据可视化",
            website: "https://example.com"
        },
        {
            company: "东信北邮信息科技有限公司",
            position: "web 开发工程师",
            timeperiod: "2019.6-至今",
            description: "负责本部门的前台开发和后台开发",
            website: "https://example.com"
        }
    ],
    education: [
        {
            degree: "计算机科学与技术学士学位",
            timeperiod: "2015.9-2019.6",
            description: "毕业于重庆理工大学",
            website: "https://example.com"
        }
    ],
    skills: [
        {
            name: "HTML5",
            level: "70"
        },
        {
            name: "CSS3",
            level: "70"
        },
        {
            name: "JavaScript",
            level: "70"
        },
        {
            name: "TypeScript",
            level: "60"
        },
        {
            name: "Node.js",
            level: "60"
        },
        {
            name: "Vue",
            level: "80"
        }
    ],
    knowledge: "同时我还是个网易云音乐人",
    projects: [
        {
            name: "generateResume",
            platform: "Vue",
            description: "输入个人信息，自动生成优美简历。",
            url: "www.xieyezi.com/reume"
        },
        {
            name: "vueMusic APP",
            platform: "Vue",
            description: "利用vue做的音乐Web APP，支持热门推荐、歌手选择、歌曲播放、播放模式选择、歌曲歌手的搜索、主题换肤、个人收藏、播放历史等功能。",
            url: "www.xieyezi.com"
        }
    ],
    hobbies: [
        {
            name: "音乐"
        },
        {
            name: "羽毛球"
        }
    ],
    contributions:[
        {
            name: "best-resume-ever",
            description: "👔 💼 Build fast 🚀 and easy multiple beautiful resumes.",
            url: "https://github.com/salomonelli/best-resume-ever"
        }
    ],
    contact:{
        email: "1435398529@qq.com",
        phone: "17783887443",
        street: "成都.武侯区",
        city: "成都.四川.中国",
        website: "www.xieyezi.xyz",
        github: "xieyezi"
    }
}
export { Person }