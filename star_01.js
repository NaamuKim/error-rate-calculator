
    window.onload = function(){
    let  tv = document.getElementById("tv");
    let  rv = document.getElementById("rv");

    let result = document.getElementById("result");
    let button = document.querySelector(".startBtn");
    button.addEventListener("click", function(){
    interval();
});



    function interval(){
    clearInterval(timer);

    value = input.value * 10000;
    secValue = value / 365 / 24 / 60 / 60;

    var secNum = 0;
    timer = setInterval(function(){
    secNum ++;
    // console.log(secNum, secValue * secNum)
    // sec.innerHTML = (secValue * secNum).toFixed(1) +"원";
    sec.innerHTML = "당신은 "+secNum+"초에 "+ (secValue * secNum).toFixed(1) +"원 벌고 있습니다";
}, 1000)
}
}