const videoContainer = document.querySelector('.video-container');
const galleryControlsContainer = document.querySelector('.video-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.video-slide');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach((el) => {
            el.classList.remove('video-slide-1');
            el.classList.remove('video-slide-2');
            el.classList.remove('video-slide-3');
            el.classList.remove('video-slide-4');
            el.classList.remove('video-slide-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`video-slide-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className.includes('video-controls-previous')) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
    this.carouselControls.forEach((control) => {
        galleryControlsContainer.appendChild(document.createElement('button')).className = `video-controls-${control}`;
        document.querySelector(`.video-controls-${control}`).innerText = '';
    });
}

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach((control) => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(videoContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();