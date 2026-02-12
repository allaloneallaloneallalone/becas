const imgContainer = document.getElementById('scroll-container');
const imgContent = document.getElementById('original-content');
const imgClone = imgContent.cloneNode(true);
imgContainer.appendChild(imgClone);

let imgX = 0;
const imgSpeed = 1;

const textContainer = document.getElementById('text-container');
const textContent = document.getElementById('text-original');
const textH1 = textContent.querySelector('h1');

const fillText = () => {
    const singleText = textH1.innerText + " ";
    while (textContent.offsetWidth < window.innerWidth * 2) {
        textH1.innerText += singleText;
    }
};
fillText();

const textClone = textContent.cloneNode(true);
textContainer.appendChild(textClone);

let textX = 0;
const textSpeed = 2;

function animate() {
    imgX -= imgSpeed;
    if (Math.abs(imgX) >= imgContent.offsetWidth) {
        imgX = 0;
    }
    imgContainer.style.transform = `translateX(${imgX}px)`;

    textX -= textSpeed;
    if (Math.abs(textX) >= textContent.offsetWidth) {
        textX = 0;
    }
    textContainer.style.transform = `translateX(${textX}px)`;

    requestAnimationFrame(animate);
}

window.onload = animate;
