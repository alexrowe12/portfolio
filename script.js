document.addEventListener("DOMContentLoaded", function() {
    const numDropdowns = 9;

    function openDropdown(num) {
        let element = document.getElementById(`dropdownInfo${num}`);
        let arrow = document.getElementById(`ddb${num}`);
        let arrowImg = document.getElementById(`dda${num}`);
        let eduWrapper = document.getElementById(`ew${num}`);

        arrow.addEventListener("click", function () {
            if (element.classList.contains('show')) {
                element.classList.remove('show');
                arrowImg.style.transform = 'rotateX(0deg)';
                eduWrapper.style.backgroundColor = 'rgb(10, 10, 10)';
            } else {
                element.classList.add('show');
                arrowImg.style.transform = 'rotateX(180deg)';
                eduWrapper.style.backgroundColor = 'rgb(26, 26, 26)';
            }
        });

        let eduContent = num >= 7 ? document.getElementById(`pd${num}`) : 
            document.getElementById(`ec${num}`);

        arrow.addEventListener("mouseover", function () {
            eduContent.style.backgroundColor = 'rgb(26, 26, 26)';
        });

        arrow.addEventListener("mouseout", function () {
            if (!element.classList.contains('show')) {
                eduContent.style.backgroundColor = 'rgb(10, 10, 10)';
            }
        });
    }

    for (let i = 0; i < numDropdowns; i++) {
        openDropdown(i + 1);
    }

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