// get elemaet 

const sec =document.querySelector('.s')
const min =document.querySelector('.m')
const hour =document.querySelector('.h')
const AMPM =document.querySelector('.ampm')






setInterval(() => {
let time=new Date()
let gets =time.getSeconds()
let getm =time.getMinutes()
let geth=time.getHours()
let ampm =''
geth>=12?ampm='PM':ampm='AM';

AMPM.innerHTML =`${ampm}`




console.log(`Time : ${geth} : ${getm} :${gets}`);
    
    sec.style.transform = `rotate(${gets*6}deg)`
    min.style.transform = `rotate(${getm*6}deg)`
    hour.style.transform = `rotate(${geth*30}deg)`
    
}, 1000);





 

