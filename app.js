const nav = document.querySelector('.navbar');
const times_btn = document.querySelector('.navbar .icon');
const bars_btn = document.querySelector('.toggle-menu');
const portfolio_btn = document.querySelector('.portfolio-btn');
const portfolio = document.querySelector('.portfolio');
const skill_btn = document.querySelector('.skill-btn');
const skill = document.querySelector('.skill');

		
bars_btn.addEventListener("click", toggleMenu);
times_btn.addEventListener("click", toggleMenu);

function toggleMenu(){
	nav.classList.toggle("slide");
}

portfolio_btn.addEventListener("click", function(){
    active(portfolio_btn);
    inactive(skill_btn);
    show(portfolio);
    hide(skill);
});

skill_btn.addEventListener("click", function(){
    active(skill_btn);
    inactive(portfolio_btn);
    show(skill);
    hide(portfolio);
});

        
//ACTIVE / HIDE FUNCTION

function active(element){
    element.classList.add('active');
}
function show(element){
    element.classList.remove('hide');
}
function inactive(element){
    element.classList.remove('active');
}
function hide(element){
    element.classList.add('hide');
}