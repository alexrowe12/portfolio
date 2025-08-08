document.addEventListener("DOMContentLoaded", function() {
    // List of dropdown IDs that actually exist
    const dropdownIds = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11];

    function openDropdown(num) {
        let element = document.getElementById(`dropdownInfo${num}`);
        let arrow = document.getElementById(`ddb${num}`);
        let arrowImg = document.getElementById(`dda${num}`);
        
        // Skip if elements don't exist
        if (!element || !arrow || !arrowImg) {
            return;
        }

        let eduWrapper = document.getElementById(`ew${num}`);

        arrow.addEventListener("click", function () {
            if (element.classList.contains('show')) {
                // Closing: start animations simultaneously
                element.classList.remove('show');
                arrowImg.style.transform = 'rotateX(0deg)';
                if (eduWrapper) {
                    eduWrapper.style.backgroundColor = 'rgb(10, 10, 10)';
                }
            } else {
                // Opening: start animations simultaneously
                element.classList.add('show');
                arrowImg.style.transform = 'rotateX(180deg)';
                if (eduWrapper) {
                    eduWrapper.style.backgroundColor = 'rgb(26, 26, 26)';
                }
            }
        });

        // Determine the correct content element based on dropdown type
        let eduContent;
        if (num >= 7 && num <= 9) {
            // Projects use pd elements
            eduContent = document.getElementById(`pd${num}`);
        } else {
            // Education, experience, and extracurriculars use ec elements
            eduContent = document.getElementById(`ec${num}`);
        }

        if (eduContent && arrow) {
            arrow.addEventListener("mouseover", function () {
                eduContent.style.backgroundColor = 'rgb(26, 26, 26)';
            });

            arrow.addEventListener("mouseout", function () {
                if (!element.classList.contains('show')) {
                    eduContent.style.backgroundColor = 'rgb(10, 10, 10)';
                }
            });
        }
    }

    // Only initialize dropdowns that actually exist
    dropdownIds.forEach(id => {
        openDropdown(id);
    });

    document.getElementById('contactNav').addEventListener('click', function () {
        imgs = document.getElementsByClassName('socialbarImg');
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = 'scale(1.1)';
            imgs[i].classList.add('shaker');
        }
        for (let i = 0; i < imgs.length; i++) {
            setTimeout(() => {
                imgs[i].style.transform = 'scale(1.0)';
                imgs[i].classList.remove('shaker');
            }, 300);
        }
    });

    const wipBubble = document.getElementById('wipWrapper');

    document.getElementById('closeWip').addEventListener('click', function () {
        wipBubble.classList.remove('show');
        setTimeout(function () {
            wipBubble.style.width = '0px';
            wipBubble.style.height = '0px';
        }, 400);
    });

    setTimeout(function () {
        wipBubble.classList.add('show');
    }, 1000)
});

let linkMap = new Map();
linkMap.set(1, 'https://github.com/Alfr3doK1ng/congress-tracker');
linkMap.set(2, 'https://github.com/maxbeyer1/AICryptoBot');
linkMap.set(3, '#');

function openLink(num) { 
    if (num === 3) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.open(linkMap.get(num), '_blank'); 
    }
}