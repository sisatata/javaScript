function printRev(arr) {

    for (var i = arr.length; i >= 0; i--)
        console.log(arr[i]);

}


function isUniform(arr) {

    var first = arr[0];
    var x = 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != first) {
            x = 0;
            break;
        }
    }

    if (x == 0)
        console.log("Not uniform");
    else
        console.log("Uniform");


}

function sumArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);

}

function maxx(arr) {
    var now = -1;
    for (var i = 0; i < arr.length; i++) {
        now = Math.max(now, arr[i]);
    }
    console.log(now);
}

var nums = [1, 2, 3, 4, 5];
nums.forEach(function (num) {

    console.log(num);

})

printRev([1, 2, 3, 4, 5]);
isUniform(['1', '2']);
sumArr([1, 2, 3, 4, 5]);
maxx([1, 4, 5, 2]);