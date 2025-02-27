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
                    "In my job as a Caseworker, there are all sorts of improvements that could be made to the way we work. I created a web app to see if I could build an alternative option, while also giving me an opportunity to learn Go and TypeScript for the first time."
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
            "I started my journey in Computer Science during lockdown, when I went through Apple's Swift Playgrounds.",
            "Afterwards, I continued to develop my knowledge of software development specifically, learning Web Development and starting to learn Swift.",
            "In August to November 2024, I completed Le Wagon's full-time Data Analytics Bootcamp. This further refined my SQL and Python, in particular the Pandas library and SciKit Learn for ML.",
            "Outside of Computer Science, I am interested in a wide variety of topics, including economics, politics, and housing."
        ]
    }
}