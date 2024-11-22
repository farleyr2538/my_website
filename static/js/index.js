


// tabs logic

document.addEventListener('DOMContentLoaded', function() {
    
    const typingSpeed = 80;
    const initialDelay = 500;
    const text = "Rob Farley";
    let index = 0;

    // find header
    const target = document.getElementById('header');
    
    // set up 'typing' effect
    function type() {
        if (index < text.length) {
            target.innerText += text.charAt(index);
            index++;
            const adjustedTypingSpeed = typingSpeed + Math.floor(Math.random() * 25)
            setTimeout(type, adjustedTypingSpeed)
        }
    }

    // if header exists, type
    if (target) {
        console.log("'target' found")
        setTimeout(type, initialDelay)
    }

    // identify container elements
    let content = document.getElementById('content');
    let title = document.getElementById('title');
    let introRow = document.getElementById('introRow');

    // identify close button
    const closeButton = document.getElementById('close')
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            // show header
            const header = document.getElementById('header');
            header.hidden = false;
            const credit = document.getElementById('credit');
            credit.hidden = false;

            // change content class to 'hide'
            closeButton.parentElement.parentElement.parentElement.classList.remove('show');
            closeButton.parentElement.parentElement.parentElement.classList.add('hide');
            console.log('Class list after close: ' + content.classList);
        })
    }
    
    // add buttons logic
    const buttons = document.getElementsByName('buttons');
    const sections = ["web", "ios", "data", "about"]
    if (buttons) {
        buttons.forEach((button) => {

            // add event listener
            button.addEventListener('click', function(event) {

                let mode = event.target.innerText.toLowerCase(); // desired mode

                // remove any existing content
                introRow.innerHTML = "";
                title.innerHTML = "";
                projectRows = document.getElementsByName('projectRow')
                console.log("projectRows length: " + projectRows.length)
                while (projectRows.length > 0) {
                    projectRows[0].remove();
                }

                // remove any existing colour classes
                sections.forEach((section) => {
                    if (content.classList.contains(section)) {
                        content.classList.remove(section);
                        console.log("class removed: " + section)
                    }
                })
        
                // add desired color class
                content.classList.add(mode);
                console.log("class added: " + mode);

                // remove 'hide', if present
                if (content.classList.contains('hide')) {
                    content.classList.remove('hide');
                }
        
                // set header
                title.innerText = event.target.innerText;

                // create column
                const introCol = document.createElement('div')
                introCol.classList.add('col')

                // set intro
                const intro = data[mode]['intro'];
                if (intro) {
                    intro.forEach((paragraph) => {
                        let introElement = document.createElement('p');
                        introElement.innerText = paragraph;
                        introCol.append(introElement);
                    })
                }

                if (mode == "about") {
                    const interests = ["start-ups", "economics", "UK politics"]
                    const bulletPoints = document.createElement('ul')
                    interests.forEach((interest) => {
                        const bulletPoint = document.createElement('li')
                        bulletPoint.innerText = interest;
                        bulletPoints.append(bulletPoint)
                    })
                    introCol.append(bulletPoints)
                }
                
                introRow.append(introCol)
                
                // if projects exist...
                if (data[mode]['projects']) {

                    // set projects
                    data[mode]['projects'].forEach((project) => {
                        // create structure
                        const projectRow = document.createElement('div')
                        projectRow.classList.add('row', 'justify-content-between')
                        projectRow.setAttribute('name', 'projectRow')
                        const projectColLeft = document.createElement('div') // for the title and text
                        projectColLeft.classList.add('col-8') 

                        const titleRow = document.createElement('div')
                        titleRow.classList.add('row')
                        const titleCol = document.createElement('div')
                        titleCol.classList.add('col-auto')
                        
                        
                        // add a projectTitle header
                        const titleElement = document.createElement('h4')
                        titleElement.innerText = project['title']
                        titleCol.append(titleElement)
                        titleRow.append(titleCol)

                        if (project['link']) {                        
                            const linkCol = document.createElement('div')
                            linkCol.classList.add('icon')
                            const linkIcon = document.createElement('span')
                            linkIcon.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <!-- First chain link -->
                                    <path 
                                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        stroke-width="2" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round"
                                    />
                                    <!-- Second chain link -->
                                    <path 
                                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        stroke-width="2" 
                                        stroke-linecap="round" 
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            `
                            linkIcon.addEventListener('click', function() {
                                window.open(project['link'], '_blank')
                            })
                            linkCol.append(linkIcon)
                            titleRow.append(linkCol)
                        }
                        
                        projectColLeft.append(titleRow)

                        // iterate through project paragraphs, creating a <p> for each one
                        project['text'].forEach((paragraph) => {
                            const para = document.createElement('p')
                            para.innerText = paragraph
                            projectColLeft.append(para)
                        })

                        projectRow.append(projectColLeft)

                        if (project['techStack']) {
                            // create a second column
                            const projectColRight = document.createElement('div')
                            projectColRight.classList.add('col-auto') // for the tech stack

                            // create a row for the tech stack title and tech stack
                            const techTitleRow = document.createElement('div')
                            techTitleRow.classList.add('row')
                            const techTitleCol = document.createElement('div')
                            techTitleCol.classList.add('col')
                            
                            const techStackTitle = document.createElement('h6')
                            techStackTitle.innerText = 'Tech stack';
                            techStackTitle.classList.add('text-end')
                            techTitleCol.append(techStackTitle)
                            techTitleRow.append(techTitleCol)

                            const techStackRow = document.createElement('div')
                            techStackRow.classList.add('techStackGrid')
                            
                            // for each tech in the stack, add a col to the techStackRow
                            project['techStack'].forEach((tech) => {
                                const techElement = document.createElement('div')
                                techElement.classList.add('techStack')
                                techElement.innerText = tech;
                                techStackRow.append(techElement)
                            })

                            projectColRight.append(techTitleRow)
                            projectColRight.append(techStackRow)

                            projectRow.append(projectColRight)
                        }

                        content.append(projectRow)

                    })
                }
        
                // if content is not showing, then show it
                if (!content.classList.contains('show')) {
                    content.classList.add('show');
                }  
                
                // hide title
                const header = document.getElementById('header');
                header.hidden = true;
                const credit = document.getElementById('credit');
                credit.hidden = true;
            })
        })
    }
});
    
const data = {
    web : {
        intro: ["My first introduction to Web Development was when I took Harvard's CS50 (Introduction to Computer Science) course online in 2022-23. As well as C, this covered Python, HTML, CSS, JavaScript, Flask, and Jinja."],
        projects : [
                {
                title : "Roof - web app",
                type : "Web app",
                techStack : ["Python", "Flask", "Jinja", "Postgres", "Heroku", "RESTful API", "JavaScript", "HTML", "CSS"],
                text : [
                    "While working as an estate agent, I noticed that the information that tenants had about their property and their landlord would be immensely valuable to prospective tenants",
                    "So I created a website called Roof which allowed existing tenants to review their landlords. It can be found at www.rooflondon.uk",
                ],
                link : "https://www.rooflondon.uk"
            }
        ]     
    },
    ios : {
        intro: ["Swift was the first programming language I learned - during lockdown I started going through Swift Playgrounds, and got hooked"],
        projects : [
                {
                title : "Roof - iOS app",
                type : "iOS app",
                techStack : ["Swift", "SwiftUI", "SwiftData", "MapKit"],
                text : [
                    "In 2024, I developed a corresponding iOS app to accompany the Roof website"
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
                    "I used SciKit Learn to run a Linear Regression model on Zoopla data from 2022/23 to determine if there were any additional features we should be aware of."
                ],
                link : "https://lookerstudio.google.com/s/rMkJOwMPm84"
            }
        ]   
    },
    about : {
        intro: ["I am interested in a wide variety of topics, including:"]
    }
}