const expandBtns = document.querySelectorAll('.expand-btn');
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const skillsBtn = document.getElementById("skills-btn");

const homeWindow = document.getElementById("home-window");
const aboutWindow = document.getElementById("about-window");
const skillsWindow = document.getElementById("skills-window");

homeBtn.addEventListener("click", function() {
  homeBtn.classList.add("active_btn");
  aboutBtn.classList.remove("active_btn");
  skillsBtn.classList.remove("active_btn");
  
  homeWindow.classList.add("active_btn");
  aboutWindow.classList.remove("active_btn");
  skillsWindow.classList.remove("active_btn");
});

aboutBtn.addEventListener("click", function() {
  homeBtn.classList.remove("active_btn");
  aboutBtn.classList.add("active_btn");
  skillsBtn.classList.remove("active_btn");
  
  homeWindow.classList.remove("active_btn");
  aboutWindow.classList.add("active_btn");
  skillsWindow.classList.remove("active_btn");
});

skillsBtn.addEventListener("click", function() {
  homeBtn.classList.remove("active_btn");
  aboutBtn.classList.remove("active_btn");
  skillsBtn.classList.add("active_btn");
  
  homeWindow.classList.remove("active_btn");
  aboutWindow.classList.remove("active_btn");
  skillsWindow.classList.add("active_btn");
});

expandBtns.forEach(function(btn) {

  btn.addEventListener('click', function() {
    expandBtns.forEach(function(btn) {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
  
  let expandBtnSpan = btn.nextElementSibling;
  
  expandBtnSpan.addEventListener('click', function() {
    expandBtns.forEach(function(btn) {
        btn.classList.remove('active');
        btn.nextElementSibling.classList.remove('active_span');
      });
    btn.classList.add('active');
    btn.nextElementSibling.classList.add('active_span');
  });
});

document.getElementById("downloadButton").addEventListener("click", function() {
  // Создание ссылки на PDF-файл
  var link = document.createElement('a');
  link.href = './images/Picsart_24-02-27_23-25-56-998.pdf';
  link.download = 'резюме_Ивана_Полоцкого.pdf';
  document.body.appendChild(link);
  // Имитация нажатия на ссылку для скачивания
  link.click();
  // Удаление ссылки из документа
  document.body.removeChild(link);
});


document.addEventListener("DOMContentLoaded", function() {
  let skills = document.querySelectorAll('.skill-level');

  skills.forEach(function(skill) {
    let randomColor = getRandomColor();
    skill.style.backgroundColor = randomColor;
  });
  let htmlSkill = document.querySelector('.skill-level.html');
  let cssSkill = document.querySelector('.skill-level.css');
  let jsSkill = document.querySelector('.skill-level.js');
  let javaSkill = document.querySelector('.skill-level.java');
  let pythonSkill = document.querySelector('.skill-level.python');
  let vueSkill = document.querySelector('.skill-level.vue');
  let cSkill = document.querySelector('.skill-level.c');
  if (htmlSkill) {
    htmlSkill.style.width = '85%'; 
  }
  if (cssSkill) {
    cssSkill.style.width = '85%'; 
  }
  if (jsSkill) {
    jsSkill.style.width = '90%'; 
  }
  if (javaSkill) {
    javaSkill.style.width = '60%'; 
  }
  if (pythonSkill) {
    pythonSkill.style.width = '55%'; 
  }
  if (vueSkill) {
    vueSkill.style.width = '20%'; 
  }
  if (cSkill) {
    cSkill.style.width = '30%'; 
  }
  
});
function getRandomColor() {
  // Массив с яркими оттенками основных цветов
  var brightColors = ['#FF5733', '#FFC300', '#36DB6A', '#2E86C1', '#A569BD', '#E74C3C', '#3498DB', '#27AE60', '#F39C12', '#7D3C98', '#C0392B', '#1ABC9C', '#8E44AD', '#2C3E50', '#E67E22', '#16A085', '#2980B9', '#F1C40F', '#D35400', '#8E44AD'];

  // Выбираем случайный яркий цвет из массива
  var randomIndex = Math.floor(Math.random() * brightColors.length);
  return brightColors[randomIndex];
}
