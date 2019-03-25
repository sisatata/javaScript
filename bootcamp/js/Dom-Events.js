var btn = document.querySelector("button");
btn.addEventListener("click", function () {

    var para = document.getElementsByClassName("btn-p");  //using anonymous function
    para[0].textContent = "Thanks;"
    para[0].style.color = "red";

});


var liItem = document.querySelectorAll("li");
for (var i = 0; i < liItem.length; i++) {
    liItem[i].addEventListener("click", function () {   //using anonymous function
        this.style.color = "red";
    });


}


var pItem = document.querySelector("p");
pItem.addEventListener("click", changeColor);

function changeColor() {                                      //using user function

    this.style.color = "red";

}