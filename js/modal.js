
const openModal = document.querySelector('.contents__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__container-close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});