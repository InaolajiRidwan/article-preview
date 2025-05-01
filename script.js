const shareBtn = document.querySelector(".card__share--big__screen")
const activeState = document.querySelector('.active-state')
const shareIconClose = document.querySelector('.share-icon')


shareBtn.addEventListener('click', function(){
    activeState.classList.toggle('show')
})

shareIconClose.addEventListener("click", function(){
    activeState.classList.toggle('show')
})
