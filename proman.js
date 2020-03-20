




const Task1 = GetTaskObj();
Task1.ID = 1;
Task1.Name = "Task1";
Task1.Description = "Do whatever";

console.log(Task1);


function GetTaskObj() {
    return {
        ID: 0,
        Name: "",
        Description: ""
    }
}

readSourceFile();


function readSourceFile(event) {
    alert("reading source file ...");
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        alert(reader.result);
    }
    reader.readAsText(input.files[0]);
}