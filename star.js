const form = document.getElementById("form");
const  tv = document.getElementById("tv");
const  dv = document.getElementById("dv");

let result = document.getElementById("result");


function onSubmit(event) {
    event.preventDefault();
    let theoryVal=tv.value;
    let realVal=dv.value;
    let res=(theoryVal-realVal)/theoryVal*100;
    console.log(res);
    result.innerHTML='오차율은 ' + res +'%입니다';
}
    form.addEventListener("submit", onSubmit );



