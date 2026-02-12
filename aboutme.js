function initInfiniteScroll(containerId, speed) {
            const container = document.getElementById(containerId);
            const content = container.querySelector('.scroll-content');
            const item = content.querySelector('.scroll-item');

            const repeatCount = Math.ceil(window.innerWidth / item.offsetWidth) + 2;
            const originalHTML = item.outerHTML;
            content.innerHTML = originalHTML.repeat(repeatCount);

            const clone = content.cloneNode(true);
            container.appendChild(clone);

            let xPos = 0;

            function animate() {
                xPos -= speed;
                
                if (Math.abs(xPos) >= content.offsetWidth) {
                    xPos = 0;
                }
                
                content.style.transform = `translateX(${xPos}px)`;
                clone.style.transform = `translateX(${xPos}px)`;
                
                requestAnimationFrame(animate);
            }

            animate();
        }
        window.addEventListener('load', () => {
            initInfiniteScroll('scroll-likes', 2);
            initInfiniteScroll('scroll-albums', 2.5);
        });