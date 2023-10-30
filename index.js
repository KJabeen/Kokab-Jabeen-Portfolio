const navbar = document.getElementById('navbar');
const welcome = document.getElementById('welcome');
const education = document.getElementById('education');
const work = document.getElementById('work');
const projects = document.getElementById('projects');
var resume = document.getElementById('resume');
var contactMe= document.getElementById('contact');

const welcomePage= document.querySelector('.welcomePage');
const educationPage= document.querySelector('.educationPage');
var workPage = document.querySelector('.workPage');
var contactPage = document.querySelector('.contactPage');
var projectsPage = document.querySelector('.projectsPage');
var resumePage = document.querySelector('.resumePage');
var container = document.querySelector('.container');

setTimeout(() => {
  navbar.style.display = 'block';
  welcome.style.display = 'block';
  education.style.display = 'none';
  work.style.display = 'none';
  projects.style.display = 'none';
  contactMe.style.display= ' none';
  projects.style.display= 'none';
  resume.style.display= 'none';
  const list= container.classList;
  list.add('hide');


}, 6000); 

welcomePage.addEventListener('click', () =>{
    welcomePage.classList.add('clicked');
    educationPage.classList.remove('clicked');
    workPage.classList.remove('clicked');
    projectsPage.classList.remove('clicked');
    resumePage.classList.remove('clicked');
    contactPage.classList.remove('clicked');

    welcome.style.display= 'block';
    education.style.display='none';
    work.style.display='none';
    projects.style.display= 'none';
    resume.style.display= 'none';
    contactMe.style.display='none';
    container.classList.add('hide');
    
});

educationPage.addEventListener('click', () => {
    
    welcomePage.classList.remove('clicked');
    educationPage.classList.add('clicked');
    workPage.classList.remove('clicked');
    projectsPage.classList.remove('clicked');
    resumePage.classList.remove('clicked');
    contactPage.classList.remove('clicked');

    welcome.style.display= 'none';
    education.style.display='block';  
    work.style.display='none';
    projects.style.display= 'none';
    resume.style.display= 'none';
    contactMe.style.display='none';
    container.classList.add('hide');
    
});

workPage.addEventListener('click', () => {
   
    welcomePage.classList.remove('clicked');
    educationPage.classList.remove('clicked');
    workPage.classList.add('clicked');
    projectsPage.classList.remove('clicked');
    resumePage.classList.remove('clicked');
    contactPage.classList.remove('clicked');

    welcome.style.display= 'none';
    education.style.display='none';
    work.style.display='block';
    projects.style.display= 'none';
    resume.style.display= 'none';
    contactMe.style.display= ' none';
    container.classList.add('hide');
});

projectsPage.addEventListener('click', () => {

    welcomePage.classList.remove('clicked');
    educationPage.classList.remove('clicked');
    workPage.classList.remove('clicked');
    projectsPage.classList.add('clicked');
    resumePage.classList.remove('clicked');
    contactPage.classList.remove('clicked');

    welcome.style.display= 'none';
    education.style.display='none';
    work.style.display='none';
    projects.style.display= 'block';
    resume.style.display= 'none';
    contactMe.style.display='none';
    container.classList.add('hide');
});

resumePage.addEventListener('click', () => {

    welcomePage.classList.remove('clicked');
    educationPage.classList.remove('clicked');
    workPage.classList.remove('clicked');
    projectsPage.classList.remove('clicked');
    resumePage.classList.add('clicked');
    contactPage.classList.remove('clicked');

    welcome.style.display= 'none';
    education.style.display='none';
    work.style.display='none';
    projects.style.display= 'none';
    resume.style.display= 'block';
    contactMe.style.display='none';
    container.classList.add('hide');
});


contactPage.addEventListener('click', () => {
    
    welcomePage.classList.remove('clicked');
    educationPage.classList.remove('clicked');
    workPage.classList.remove('clicked');
    projectsPage.classList.remove('clicked');
    resumePage.classList.remove('clicked');
    contactPage.classList.add('clicked');

    welcome.style.display= 'none';
    education.style.display='none';
    work.style.display='none';
    projects.style.display= 'none';
    resume.style.display= 'none';
    contactMe.style.display='block';
    container.classList.add('hide');
});



// let circle = document.querySelector(".circle")
// function move(e){
//     circle.style.left = e.clientX + "px"
//     circle.style.top = e.clientY + "px"
// }

// setTimeout(() => {
//     circle.style.visibility = 'visible';
//     document.addEventListener("mousemove",move);

// },6000);

