var cnt1 = 0;
var x = document.querySelector("button");
x.addEventListener("click", function () {

    var now = document.querySelector("h1");
    now.textContent = cnt1;
    cnt1++;

});
