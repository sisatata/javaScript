var todos = ["Buy new turtle"];
var x = prompt("whattt");

while (x !== "quit") {

    if (x === "list") {
        todos.forEach(function (name) {
            alert(name);
        });
    } else if (x === "new") {
        var y = prompt("type");
        todos.push(y);
        alert("Added Successfully");

    } else if (x === 'del') {

        deleteTodo();
    }
    x = prompt("What");

}

function deletTodo() {
    var idx = prompt("What index ?");
    todos.splice(idx, 1);
    alert("Delted Successfully");
}

alert("thank You");



