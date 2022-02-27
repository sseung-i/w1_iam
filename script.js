const get = (target) => {
  return document.querySelector(target)
}

const imgNode = document.querySelectorAll('.carousel_img')
const imgArray = Array.from(imgNode);
const $roller = get('.roller');


let moveX = 0;

const moveleft = () => {
    const roll = () => {
        const width = imgArray[0].offsetWidth;
        if(moveX <= width) {
            moveX++;
            $roller.style.left = -moveX + 'px';
        } else if(moveX = width) {
            const prevImg = imgArray.shift();
            imgArray.push(prevImg);
            $roller.innerHTML = '';
            imgArray.forEach((item) => {
                $roller.appendChild(item)
            })
            $roller.style.left = '0px';
            moveX = 0;
            // console.log(moveX, $roller.style.left, imgArray[0]);
        }
    }
    
    setInterval(roll, 1);
    
}

moveleft();


topClick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

portBtn = () => {
    alert('포트폴리오 정리중')
}



// console.log(imgArray[0], $roller.style.left)

/*
const rollImg = () => {
    const width = imgArray[0].offsetWidth;


    roll = () => {
        if (imgX == width) {
            clearInterval(moveleft);
        } else {
            imgX++;
            $roller.style.left = -imgX + 'px' ;
        }
    }
    setInterval(roll,1);
    rollImg();

    
    // setInterval(ani, 10);
    // const thisLeft = $roller.style.left;
    // $roller.style.transform = `translateX(${(thisLeft-firstWidth)}px)` ;
    const prevImg = imgArray.shift();
    imgArray.push(prevImg);
    $roller.innerHTML = '';
    imgArray.forEach((item) => {
        $roller.appendChild(item)
    })
}

rollImg();

// const roll = setInterval(rollImg, 3000);

*/