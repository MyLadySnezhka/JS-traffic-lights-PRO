const redcar = document.querySelector('.lightcar > div[name=red]');
const yellowcar = document.querySelector('.lightcar > div[name=yellow]');
const greencar = document.querySelector('.lightcar > div[name=green]');
//const count1 = document.querySelector('.light1 > .count');
const redpeople = document.querySelector('.lightpeople > div[name=redpeople]');
//const yellow2 = document.querySelector('.light2 > div[name=yellow]');
const greenpeople = document.querySelector('.lightpeople > div[name=greenpeople]');
const countpeople = document.querySelector('.lightpeople > .count');
const btnStart = document.querySelector('button[name=btnStart]');
const btnStop = document.querySelector('button[name=btnStop]');
const mainRoad = document.querySelector('.mainroad');
const elCar = document.querySelector('.car');

// світлофор для автівок на 3 кольори

const redc = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.remove('black');
    colordiv1.classList.add('red');
    colordiv2.classList.remove('yellow');
    colordiv2.classList.add('black');
    colordiv3.classList.remove('green');
    colordiv3.classList.add('black');
    elCar.classList.add('carstop');
    elCar.classList.remove('carright');
};

const redyellowc = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.add('red');
    colordiv2.classList.remove('black');
    colordiv2.classList.add('yellow');
    colordiv3.classList.remove('green');
    colordiv3.classList.add('black');
};

const yellowc = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.remove('red');
    colordiv1.classList.add('black');
    colordiv2.classList.remove('black');
    colordiv2.classList.add('yellow');
    colordiv3.classList.remove('green');
    colordiv3.classList.add('black');
};

const greenc = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.remove('red');
    colordiv1.classList.add('black');
    colordiv2.classList.remove('yellow');
    colordiv2.classList.add('black');
    colordiv3.classList.remove('black');
    colordiv3.classList.add('green');
    elCar.classList.remove('carstop');
    elCar.classList.add('carright');

};

const blackc = (colordiv3) => {
    colordiv3.classList.remove('green');
    colordiv3.classList.add('black');
};

const blinkGreenc = (colordiv3) => {
    colordiv3.classList.add('blinkGreen');
};

// світлофор для пішоходів

const redp = (colordiv1, colordiv2, count) => {
    colordiv1.classList.remove('black');
    colordiv1.classList.add('redp');
    colordiv2.classList.remove('blinkGreen');
    colordiv2.classList.add('black');
    count.classList.remove('greentext');
    count.classList.add('redtext');
};

const greenp = (colordiv1, colordiv2, count) => {
    colordiv1.classList.remove('redp');
    colordiv1.classList.add('black');
    colordiv2.classList.remove('black');
    colordiv2.classList.add('greenp');
    count.classList.remove('redtext');
    count.classList.add('greentext');
};

const blinkGreenp = (colordiv2) => {
    //colordiv2.classList.remove('greenp');
    colordiv2.classList.add('blinkGreen');
};

// const blackp = (colordiv2) => {
//     colordiv2.classList.remove('green');
//     colordiv2.classList.add('black');
// };

const delay = 5000;
let id;
const delayshag = delay + 6000;

const timer = (count, delayshag) => {
    delayshag = delayshag - 1000;
    if (delayshag>0) {
            id = setTimeout(timer, 1000, count, delayshag);
            count.innerHTML = delayshag/1000;    
    } else {
        count.innerHTML = '--';  
        clearTimeout(id);
        //console.log(delayshag);
        return;
    }  
};
                        
const render = () => {
    
    setTimeout(() => redc(redcar, yellowcar, greencar), delay);       
    setTimeout(() => redyellowc(redcar, yellowcar, greencar), delay+5000);
    setTimeout(() => greenc(redcar, yellowcar, greencar), delay+10000);
    //setTimeout(() => blinkGreenc(greencar), delay+15000);
    //setTimeout(() => yellowc(redcar, yellowcar, greencar), delay+20000);

    setTimeout(() => greenp(redpeople, greenpeople, countpeople), delay);
    setTimeout(() => timer(countpeople, delayshag), delay);
    setTimeout(() => blinkGreenp(greenpeople), delay+5000);
    setTimeout(() => redp(redpeople, greenpeople, countpeople), delay+10000);
    setTimeout(() => timer(countpeople, delayshag), delay+10000);
};


btnStart.addEventListener('click', () => {
    render();

    setInterval( () => {
        render();
    }, delay+10000);
})

