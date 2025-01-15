function createDiv([divType]) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(divType);
    return newDiv;
}

async function delay(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', async function() {
    
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
    let background = document.getElementById('content');
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

            // remove any existing colour classes
            sections.forEach((section) => {
                if (background.classList.contains(section)) {
                    background.classList.remove(section);
                    console.log("class removed: " + section)
                }
            })

            // change content class to 'hide'
            content.classList.remove('show');
            content.classList.add('hide');
            console.log("content class: ", content.className)
        })
    }
    
    // add buttons logic
    const buttons = document.getElementsByName('buttons');
    const sections = ["web", "ios", "data", "about"]
    if (buttons) {
        buttons.forEach((button) => {

            // add event listener
            button.addEventListener('click', async function(event) {

                // if 'content' is not showing, take a second to hide main content
                if (!content.classList.contains('show')) {
                    // hide title
                    const header = document.getElementById('header');
                    header.hidden = true;
                    const credit = document.getElementById('credit');
                    credit.hidden = true;

                    // delay by .25 of a second
                    await delay(250);
                }

                let mode = event.target.innerText.toLowerCase(); // desired mode (eg. "ios" or "web")

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
                    if (background.classList.contains(section)) {
                        background.classList.remove(section);
                        console.log("class removed: " + section)
                    }
                })
        
                // add desired color class
                background.classList.add(mode);
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
                
                introRow.append(introCol)
                
                // if projects exist...
                if (data[mode]['projects']) {

                    // set projects
                    data[mode]['projects'].forEach((project) => {
                        // create structure
                        const titleRow = document.createElement('div')
                        titleRow.classList.add('row', 'd-flex', 'justify-content-start')
                        titleRow.setAttribute('name', 'projectRow')
                        const titleCol = document.createElement('div')
                        titleCol.classList.add('col-5')
                        const titleElement = document.createElement('h4')
                        titleElement.innerText = project['title']
                        titleCol.append(titleElement)
                        titleRow.append(titleCol)

                        if (project['link']) {                        
                            const linkCol = document.createElement('div')
                            linkCol.classList.add('col-1')
                            const linkIcon = document.createElement('span')
                            linkIcon.innerHTML = `
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        
                        background.append(titleRow)

                        const contentRow = document.createElement('div')
                        contentRow.setAttribute('name', 'projectRow')
                        contentRow.classList.add('row', 'd-flex', 'justify-content-center')
                        const textCol = document.createElement('div')
                        textCol.classList.add('col')

                        // iterate through project paragraphs, creating a <p> for each one
                        project['text'].forEach((paragraph) => {
                            const para = document.createElement('p')
                            para.innerText = paragraph
                            textCol.append(para)
                        })

                        contentRow.append(textCol)

                        if (project['techStack']) {
                            // create a second column
                            const projectColRight = document.createElement('div')
                            projectColRight.classList.add('col') // for the tech stack

                            // create a row for the tech stack title and tech stack
                            const techTitleRow = document.createElement('div')
                            techTitleRow.classList.add('row', 'd-flex', 'justify-content-center')
                            const techTitleCol = document.createElement('div')
                            techTitleCol.classList.add('col')
                            
                            const techStackTitle = document.createElement('h6')
                            techStackTitle.innerText = 'Tech stack';
                            techStackTitle.classList.add('text-end')
                            techTitleCol.append(techStackTitle)
                            techTitleRow.append(techTitleCol)

                            const techStackRow = document.createElement('div')
                            techStackRow.classList.add('row', 'justify-content-end', 'row-cols-auto')
                            
                            // for each tech in the stack, add a col to the techStackRow
                            project['techStack'].forEach((tech) => {
                                const techElement = document.createElement('div')
                                techElement.classList.add('col', 'techStack')
                                techElement.innerText = tech;
                                techStackRow.append(techElement)
                            })

                            projectColRight.append(techTitleRow)
                            projectColRight.append(techStackRow)

                            contentRow.append(projectColRight)
                        }

                        background.append(contentRow)

                    })
                }
        
                // if content is not showing, then show it
                if (!content.classList.contains('show')) {
                    content.classList.add('show');
                }  
                
            })
        })
    }

    // close mobile navbar when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('idOfMainContent');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // check if the window width is less than Bootstrap's breakpoint for small devices
            if (window.innerWidth < 576 && navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
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
                    "So I created a website called Roof which allowed existing tenants to review their landlords.",
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
        intro: [
            "I started my journey in Computer Science during lockdown, when I went through Apple's Swift Playgrounds.",
            "Afterwards, I continued to develop my knowledge of software development specifically, learning Web Development and starting to learn Swift.",
            "In August to November 2024, I completed Le Wagon's full-time Data Analytics Bootcamp. This further refined my SQL and Python, in particular the Pandas library and SciKit Learn for ML.",
            "Outside of Computer Science, I am interested in a wide variety of topics, including economics, politics, and housing."
        ]
    }
}