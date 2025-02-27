import { data } from './data.js';

async function delay(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', async function() {
    
    // find header
    const target = document.getElementById('header');
    
    // set up 'typing' effect
    async function type() {
        const typingSpeed = 80;
        const initialDelay = 500;
        const text = "Rob Farley";
        let index = 0;
        await delay(initialDelay);
        while (index < text.length) {
            // remove space, previously needed to hold the space
            if (index == 0) {
                target.innerText = "R";
            } else {
                target.innerText += text.charAt(index);
            }
            
            index++;
            const adjustedTypingSpeed = typingSpeed + Math.floor(Math.random() * 25)
            await delay(adjustedTypingSpeed);
        }
    }

    // if header exists, type
    if (target) {
        type()
    }

    // identify container elements
    let background = document.getElementById('background');
    let content = document.getElementById('content');
    let header = document.getElementById('header');
    let credit = document.getElementById('credit');
    let title = document.getElementById('title');
    let introRow = document.getElementById('introRow');
    let headerRow = document.getElementById('headerRow');

    // identify close button
    const closeButton = document.getElementById('closeButton')
    if (closeButton) {
        closeButton.addEventListener('click', async function() {

            // hide 'background'
            background.classList.remove('visible');
            await delay(250)
            // remove main content
            headerRow.classList.remove('d-none');
            credit.classList.remove('d-none');
            await delay(100)
            // show header and credits
            header.classList.add('show');
            credit.classList.add('show');

            // remove any existing colour classes
            sections.forEach((section) => {
                if (content.classList.contains(section)) {
                    content.classList.remove(section);
                }
            })
        })
    } else {
        console.log("error: closeButton not found")
    }
    
    // add buttons logic
    const buttons = document.getElementsByName('buttons');
    const sections = ["web", "ios", "data", "about"]
    if ((buttons) || (buttons.length != 4)) {
        buttons.forEach((button) => {

            // add event listener
            button.addEventListener('click', async function(event) {

                // -1 if 'blog', then allow to leave the site before doing anything
                let mode = event.target.innerText.toLowerCase(); // desired mode (eg. "ios" or "web")
                if (mode == "blog") {
                    window.open("https://burnt-drug-7f9.notion.site/c4d3ba7118014b468a2016d5ac358d07?v=0b2d953545fb47f29f074afa571ab39c", "_blank");
                    return;
                }

                // 0. hide 'options' menu
                const options = document.getElementById('options');
                const bsCollapse = new bootstrap.Collapse(options, {toggle: false});
                bsCollapse.hide();

                // 1. HIDE MAIN PAGE

                // if 'background' is not already showing, hide the header and credits, before waiting .25 of a second
                if (background.classList.contains('visible') == false) {

                    // hide header and credits
                    header.classList.remove('show');
                    credit.classList.remove('show');
                    
                    // remove header and credit
                    headerRow.classList.add('d-none');
                    credit.classList.add('d-none');
                }

                // create space for hidden card, by changing its display

                // 2. PREPARE CONTENT FOR CARD

                

                // remove any existing content
                introRow.innerHTML = "";
                title.innerHTML = "";
                const projectRows = document.getElementsByName('projectRow')
                if (projectRows.length != 0) {
                    while (projectRows.length > 0) {
                        projectRows[0].remove();
                    }
                }

                // remove any existing colour classes
                sections.forEach((section) => {
                    if (content.classList.contains(section)) {
                        content.classList.remove(section);
                    }
                })
        
                // add desired color class
                content.classList.add(mode);

                // set title
                title.innerText = event.target.innerText;

                // if intro exists, add it
                const intro = data[mode]['intro'];
                if (intro) {
                    // create column
                    const introCol = document.createElement('div')
                    introCol.classList.add('col', 'mt-2')

                    // create a <p> for each paragraph in the intro
                    intro.forEach((paragraph) => {
                        let introElement = document.createElement('p');
                        introElement.innerText = paragraph;
                        introCol.append(introElement);
                    })

                    introRow.append(introCol)
                }
                                
                // if projects exist...
                if (data[mode]['projects']) {

                    // create and add a 'Projects' title
                    const projectsTitleRow = document.createElement('div')
                    projectsTitleRow.classList.add('row', 'd-flex', 'justify-content-center', 'mt-4')
                    projectsTitleRow.setAttribute('name', 'projectRow')
                    const projectsTitleCol = document.createElement('div')
                    projectsTitleCol.classList.add('col')
                    const projectsTitle = document.createElement('h3')
                    projectsTitle.innerText = "Projects"
                    projectsTitleCol.append(projectsTitle)
                    projectsTitleRow.append(projectsTitleCol)
                    content.append(projectsTitleRow)

                    // set projects
                    data[mode]['projects'].forEach((project) => {
                        // create structure
                        const titleRow = document.createElement('div')
                        titleRow.classList.add('row', 'd-flex', 'justify-content-start', 'mt-2')
                        titleRow.setAttribute('name', 'projectRow')
                        const titleCol = document.createElement('div')
                        titleCol.classList.add('col-11')
                        const titleElement = document.createElement('h4')
                        titleElement.innerText = project['title']
                        titleCol.append(titleElement)
                        titleRow.append(titleCol)

                        if (project['link']) {                        
                            const linkCol = document.createElement('div')
                            linkCol.classList.add('col-1')
                            const linkIcon = document.createElement('span')
                            linkIcon.innerHTML = `
                                <svg id="linkIcon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                        
                        content.append(titleRow)

                        const contentRow = document.createElement('div')
                        contentRow.setAttribute('name', 'projectRow')
                        contentRow.classList.add('row', 'd-flex', 'justify-content-center')
                        const textCol = document.createElement('div')
                        textCol.classList.add('col-8')

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

                        content.append(contentRow)
                    })
                }

                await delay(300);

                // 3. SHOW CARD
                background.classList.add('visible');
            })
        })
    } else {
        console.log("error: tab buttons not found")
    }
});
