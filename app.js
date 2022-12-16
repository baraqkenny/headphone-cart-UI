const btn = document.querySelector('.btn');
const popUp = document.querySelector('.pop-up');


btn.addEventListener('click', ()=>{
    popUp.style.display = 'block';

    setTimeout(()=>{
    popUp.style.display = 'none';    
    },1000)
})