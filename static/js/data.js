export const data = {
    web : {
        intro: ["My first introduction to Web Development was when I took Harvard's CS50 (Introduction to Computer Science) course online in 2022-23. As well as C, this covered Python, HTML, CSS, JavaScript, Flask, and Jinja."],
        projects : [
                {
                title : "Roof (web app)",
                type : "Web app",
                techStack : ["Python", "Flask", "Jinja", "Postgres", "Heroku", "JavaScript", "HTML", "CSS"],
                text : [
                    "While working as an estate agent, I noticed that the information that tenants had about their property and their landlord would be immensely valuable to prospective tenants",
                    "So I created a website called Roof which allowed existing tenants to review their landlords.",
                ],
                link : "https://www.rooflondon.uk"
            },
            {
                title : "Roof (API)",
                type : "API",
                techStack : ["RESTful API", "Python", "Postgres", "Heroku"],
                text : [
                    "I also created a RESTful API to accompany the Roof website, which allowed for the creation, deletion, and updating of reviews."
                ],
            },
            {
                title : "Caseworker (web app)",
                type : "Web app",
                techStack : ["Go", "TypeScript"],
                text : [
                    "In my job as a Caseworker, I inevitably noticed all sorts of inefficiencies in the software that we use that slow us down in our day-to-day tasks and kill momentum. So I created a web app to see if I could build an alternative option which fixes these problems, and optimises speed, simplicity, and ease-of-use. This project is also giving me an opportunity to learn Go and TypeScript for the first time."
                ]
            }
        ]     
    },
    data : {
        intro: ["After using Python to do some basic data extraction from our CRM system at work, I began to explore the potential of data analytics. This led to me complete Le Wagon's three-month full time Data Analytics bootcamp from August to November 2024."],
        projects : [
            {
                title : "A Deep Dive into the UK Housing Market",
                type : "Looker",
                techStack : ["Python", "Pandas", "SciKit Learn", "SQL", "BigQuery", "Looker"],
                text : [
                    "For my final project in the Le Wagon Bootcamp, I teamed up with three other students to create an in-depth analysis of the UK Housing market spanning thirty years.",
                ],
                link : "https://lookerstudio.google.com/s/rMkJOwMPm84"
            },
            {
                title : "Linear Regression of UK House Prices",
                type : "Google Colab Notebook",
                techStack : ["Python", "Pandas", "SciKit Learn", "SQL", "BigQuery"],
                text :[
                    "In this project, I used SciKit Learn to run a Linear Regression model on Zoopla data from 2022/23 to determine which features had the biggest impact on my target, house prices."
                ],
                link : "https://colab.research.google.com/drive/1ajbOpS4G1YdpyVnL798KcpmryosohQmp?usp=sharing"
            },
        ]   
    },
    ios : {
        intro: ["Swift was the first programming language I learned - during lockdown I started going through Swift Playgrounds, and got hooked"],
        projects : [
                {
                title : "Roof (iOS app)",
                type : "iOS app",
                techStack : ["Swift", "SwiftUI", "SwiftData", "MapKit"],
                text : [
                    "In 2024, I developed a corresponding iOS app to accompany the Roof website."
                ]
            }
        ]   
    },
    about : {
        intro: [
            "My name is Rob. I am interested in software development, web development, data analytics, UK politics, and housing policy.",
            "I started my journey in Computer Science during lockdown, when I completed Apple's Swift Playgrounds.",
            "In the years afterwards, I completed Harvard's online CS50 course (Introduction to Computer Science). This offered a fantastic introduction to C, algorithms, and thinking programmatically. I also learned Python, SQL, HTML, CSS, JavaScript, Flask, and Jinja.",
            "In August to November 2024, I completed Le Wagon's full-time Data Analytics Bootcamp. This further refined my SQL and Python, in particular the Pandas library and SciKit Learn for ML.",
            "I am currently working on a web app called Caseworker, which is built using Go and TypeScript.",]
    }
}