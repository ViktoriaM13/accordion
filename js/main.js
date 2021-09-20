var accordion = document.getElementsByClassName('card-btn'),
    contents = document.getElementsByClassName('content');
    
for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        for(content of contents) {
            if (content != this.nextElementSibling) {
                content.classList.remove('active')
            }
        };
        for(cardBtn of accordion) {
            if (cardBtn != this) {
                cardBtn.classList.remove('active')
            }
        };
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active')
    })
}