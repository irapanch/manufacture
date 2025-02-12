const accordeonTitles = document.querySelectorAll('.accordeon-title')

accordeonTitles.forEach( function(accordeonTitle){
    accordeonTitle.addEventListener('pointerdown', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.accordeon-item-answers')

        accordeonTitle.classList.toggle('accordeon-title--active')
        currentText.classList.toggle('accordeon-item-answers--visible')

        if (currentText.classList.contains('accordeon-item-answers--visible')) {
          currentText.style.maxHeight = currentText.scrollHeight + 'px'  
        } else {
            currentText.style.maxHeight = null
        }
    })
})