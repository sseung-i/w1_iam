const get = (target) => {
  return document.querySelector(target)
}

let imgArray = [];
const $roller = get('.roller');
const $topbtn = get('.top_btn');


let moveX = 0;
const imgElement = () => {
    const addElement = [];
    const imgnum = 9;
    let num = 0;
    while(num<imgnum) {
        num++;
        addElement.push(`<img class="carousel_img" src="./img/mylike/mylike_${num}.jpeg" alt="mylike images" />`);
    }
    const joinArray = addElement.join().replace(/,/g , '');
    $roller.innerHTML = joinArray;
    const imgtags = document.querySelectorAll('.carousel_img');
    imgArray = Array.from(imgtags);
}
imgElement();


const moveleft = () => {
    const roll = () => {
        const width = imgArray[0].offsetWidth;
        if(moveX <= width) {
            moveX++;
            $roller.style.left = -moveX + 'px';
        } else if(moveX >= width) {
            const prevImg = imgArray.shift();
            imgArray.push(prevImg);
            $roller.innerHTML = '';
            imgArray.forEach((item) => {
                $roller.appendChild(item)
            })
            $roller.style.left = '0px';
            moveX = 0;
        }
    }
    
    setInterval(roll, 10);
    
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

let opavalue = 0;

window.addEventListener('scroll', () => {
    if(window.scrollY >= 400) {
        $topbtn.style.display = 'block';
        $value = (window.scrollY - 400)/3
        $value > 100 ? opavalue = 1 : opavalue = $value/100;
        $topbtn.style.opacity = opavalue.toFixed(1);
    }
})