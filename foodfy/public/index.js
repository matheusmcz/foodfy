const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modalContent = document.querySelector('.modal-content');

for (let card of cards) {
    card.addEventListener('click', function () {
        const cardImgSrc = card.getElementsByClassName('cardImage')[0].src;
        const modalImage = document.createElement('img');
        modalImage.classList.add('modalImage')
        modalContent.appendChild(modalImage);
        modalImage.src = cardImgSrc;

        const menuDesciption = card.getElementsByClassName('menuDescription')[0];
        const modalDescription = document.createElement('div');
        modalDescription.classList.add('description')
        modalContent.appendChild(modalDescription);
        modalDescription.textContent = menuDesciption.textContent

        const menuAuthor = card.getElementsByClassName('menuAuthor')[0];
        const modalAuthor = document.createElement('div');
        modalAuthor.classList.add('author')
        modalContent.appendChild(modalAuthor);
        modalAuthor.textContent = menuAuthor.textContent

        modalOverlay.classList.add('active');

        // scroll da pagina ao abrir o modal
        window.scrollTo({ top: 355, behavior: 'smooth' });


    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    const modalImg = modalContent.getElementsByTagName('img')[0];
    modalContent.removeChild(modalImg);

    const textDescription = modalContent.getElementsByClassName('description')[0];
    const textAuthor = modalContent.getElementsByClassName('author')[0];
    modalContent.removeChild(textDescription);
    modalContent.removeChild(textAuthor);

})
