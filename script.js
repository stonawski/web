const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const photoItems = document.querySelectorAll('.flex-photo-item')
const images = document.querySelectorAll('.gallery-pic')

for(let i = 0; i < photoItems.length; i++){
    photoItems[i].addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = images[i].src
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
}

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})