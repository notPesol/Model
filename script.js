const openBtn = document.querySelector('.btn-model');
const closeBtn = document.querySelector('.close-btn');
const modelContainer = document.querySelector('.model-container');

openBtn.addEventListener('click', ()=>{
    modelContainer.classList.add('show-model');
});

closeBtn.addEventListener('click', ()=>{
    modelContainer.classList.remove('show-model');
});