import htmllogo from './assets/techlogo/html.png';
import cssLogo from './assets/techlogo/css.png'
import  javaLogo from './assets/techlogo/java.png'
import jsLogo from './assets/techlogo/javascript.png'
import reactLogo  from './assets/techlogo/React.png'
import nodeLogo from './assets/techlogo/nodejs.png'
import mySqlLogo from './assets/techlogo/sql.png'
import githubLogo from './assets/techlogo/github.png'
import vsCodeLogo from './assets/techlogo/Vs.png'
import  reactRouterLogo from './assets/techlogo/reactrouter.png'
import vercelLogo from './assets/techlogo/vercel.png'
import PostmanApi from './assets/techlogo/postmanapi.png'
import Strapi from './assets/techlogo/strapi-2.svg'
import API from './assets/techlogo/Api.png'
import typescript from './assets/techlogo/typescript.png'
import EmailJs from './assets/techlogo/Emailjs.png'
import SCSS from './assets/techlogo/scss.png'
import ExpressLogo from "./assets/techlogo/Express.png"
import MongosseLogo from "./assets/techlogo/Mongoose.js.png"
import MongoDBLogo from "./assets/techlogo/MongoDB.png"
import ViteLogo from "./assets/techlogo/Vite.js.png"


import ecoomercelogo from './assets/worklogo/Ecommerc.png'
import newspaperclone from './assets/worklogo/Newspaperc.png'
import cryptologo from './assets/worklogo/cryptoconverter.png'
import videoplayer  from "./assets/worklogo/VideoPlayer.png"
import Githubviewer from "./assets/worklogo/Github_viewer.png"


import cbselogo from './assets/Educationlogo/CBSE-Black.png'
import aktulogo from './assets/Educationlogo/Dr._A.P.J._Abdul_Kalam_Technical_University_logo.png'

export const SkillsInfo = [
    {
        title : 'Frontend',
        skills : [
            {name : 'HTML' ,logo : htmllogo},
            {name : 'CSS' ,logo : cssLogo},
            {name : 'JavaScript' ,logo : jsLogo},
            {name : 'SCSS' ,logo : SCSS},
            {name : 'React' ,logo : reactLogo},
            {name : 'React Router' ,logo : reactRouterLogo},
            {name : 'Vite',logo: ViteLogo}
        ]
    }, 
    {
        title : 'Backend',
        skills : [
            {name : 'Node.Js' ,logo : nodeLogo},
            {name : 'Express' ,logo : ExpressLogo},
            {name : 'MongoDB' ,logo : MongoDBLogo},
            {name : 'Mongoose' ,logo : MongosseLogo},
            {name : 'MySQL' ,logo : mySqlLogo},
            {name : 'Strapi' ,logo : Strapi},
            {name : 'REST API' ,logo : API},
        ]
    },

    {
        title : 'Languages',
        skills : [
            {name : 'Java' ,logo : javaLogo},
            {name : 'JavaScript' ,logo : jsLogo},
            {name : 'TypeScript' ,logo : typescript},

        ]
    },
    {
        title : 'Tools',
        skills : [
            {name : 'GitHub' ,logo : githubLogo},
            {name : 'Vs Code' ,logo : vsCodeLogo},
            {name : 'Vercel' ,logo : vercelLogo},
            {name : 'Postman' ,logo : PostmanApi},
            {name : 'EmailJs' ,logo : EmailJs},
        ]
    }
]

export const projects = [
    {
    id : 1,
    title : "NovaPlay - Video Player",
    description : "A modern and responsive video player built with custom controls, playlists, smooth UI, and fast performance. Frontend uses React + Vite + Tailwind, while backend is powered by Node.js, Express, and Mongoose.",
    img : videoplayer,
    tags : ["React","Vite","Tailwind","Node.js","Express","Mongoose","API"],
    github : "https://github.com/HimanshuP13/NovaPlay-Frontend"
},

    
    {
        id : 4,
        title : "E-commerce",
        description : "A simple and responsive e-commerce platform with product listings, dynamic cart functionality, quantity updates, and smooth checkout UI — built for seamless browsing and buying experience.",
        img : ecoomercelogo,
        tags : ["Html","JavaScript","API","SCSS","Typescript","Strapi"],
        github : "https://github.com/HimanshuP13/E-commerce"

    },
    {
        id : 3,
        title : "Crypto-converter",
        description : "A crypto-to-fiat currency converter that fetches live exchange rates using external APIs, allowing users to compare real-time prices of major cryptocurrencies. ",
        img : cryptologo,
        tags : ["Html","CSS","JavaScript","API"],
        github : "https://github.com/HimanshuP13/crypto-converter"

    },
    {
        id : 2,
        title : "Github Profile-viewer",
        description : "A Simple and resposnive github profile viewer with functionality like user can access anyone github progile details bu using usernaming have search button and 2 tabs profile and repos with pagination and show basic details like name,floower following and link if avialibale ",
        img : Githubviewer,
        tags : ["React","Vite","Tailwind","API","Javascript"],
        github : "https://github.com/HimanshuP13/github-profile-viewer"

    },
    {
        id : 5,
        title : "Newspaper website",
        description : "A modern news portal that fetches real-time headlines using APIs, organized into categories like politics, sports, and entertainment, with a clean, responsive UI. ",
        img : newspaperclone,
        tags : ["Html","CSS","JavaScript","API"],
        github : "https://github.com/HimanshuP13/Newspaperclone"

    }
]



// Edcation Information

 export const Educations  = [
      {
        degree: "B.Tech in Information Technology",
        institution: "A.K.T.U University",   
        year: "2021 - 2025",
        img : aktulogo,
        description: "CGPA: 8.2 | Major in Infomation Technology ",
        desc : "Completed a four-year undergraduate program in Information Technology, focusing on software development, networking, databases, and system design. Gained a solid understanding of computer fundamentals and practical skills through academic projects, lab work, and internships."
      },
      {
        degree: "Senior Secondary (12th) with PCM",
        institution: "Children Senior Secondary School",
        img : cbselogo,
        year: "2019 - 2021",
        description: "Percentage: 89% | CBSE",
        desc : "Completed Class 12th under CBSE with Physics, Chemistry, and Mathematics as main subjects. Developed strong analytical and problem-solving skills, laying a solid foundation for engineering and technical studies."
      },
      {
        degree: "Secondary (10th)",
        institution: "Children Senior Secondary School",
        img : cbselogo,
        year: "2017 - 2019",
        description: "Percentage: 89.2% | CBSE",
        desc  : "Successfully completed Class 10th education with a strong emphasis on foundational subjects, building the base for future academic pursuits in science and technology."
      },
    ]