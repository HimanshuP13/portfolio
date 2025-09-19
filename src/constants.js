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
import Clogo from './assets/techlogo/C.png'
import EmailJs from './assets/techlogo/Emailjs.png'
import SCSS from './assets/techlogo/scss.png'


import ecoomercelogo from './assets/worklogo/Ecommerc.png'
import newspaperclone from './assets/worklogo/Newspaperc.png'
import cryptologo from './assets/worklogo/cryptoconverter.png'


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
        ]
    }, 
    {
        title : 'Backend',
        skills : [
            {name : 'Node.Js' ,logo : nodeLogo},
            {name : 'MySQL' ,logo : mySqlLogo},
            {name : 'Strapi' ,logo : Strapi},
            {name : 'REST API' ,logo : API},
        ]
    },

    {
        title : 'Languages',
        skills : [
            {name : 'Java' ,logo : javaLogo},
            {name : 'C' ,logo : Clogo},
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
        title : "Newspaper website",
        description : "A modern news portal that fetches real-time headlines using APIs, organized into categories like politics, sports, and entertainment, with a clean, responsive UI. ",
        img : newspaperclone,
        tags : ["Html","CSS","JavaScript","API"],
        github : "https://github.com/HimanshuP13/Newspaperclone"

    },
    {
        id : 2,
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