var selectedRow = null;

document.getElementById("add").addEventListener('click', () => {
    var students = readformdata();
    if (selectedRow == null)
        insertnew(students);
    else
        update(students);

    selectedRow = null;

    document.getElementById("entry").style = 'display: none;'

});

function readformdata(){
    var students = {};
    students["fullname"] = document.getElementById("fullname").value;
    students["ci"] = document.getElementById("ci").value;
    students["career"] = document.getElementById("career").value;
    students["materia"] = document.getElementById("materia").value;
    students["notas"] = document.getElementById("notas").value;
    students["asis"] = document.getElementById("asis").value;
    return students;
}

function insertnew(students){
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = students.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = students.ci;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = students.career;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = students.materia;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = students.notas;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = students.asis;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)" class="mod-edit">Edit</a>
                       <a onClick="onDelete(this)" class="mod-delete">Delete</a>`;
    
    document.querySelectorAll("input").forEach(element => { 
        element.value = "";
    });
}
    
document.getElementById("addnew").addEventListener('click', () => {
    document.getElementById("entry").style = 'display:block;';
})

function onEdit(td) {
    document.getElementById("entry").style = 'display:block';
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ci").value = selectedRow.cells[1].innerHTML;
    document.getElementById("career").value = selectedRow.cells[2].innerHTML;
    document.getElementById("materia").value = selectedRow.cells[3].innerHTML;
    document.getElementById("notas").value = selectedRow.cells[4].innerHTML;
    document.getElementById("asis").value = selectedRow.cells[5].innerHTML;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
    }
}

function update(students) {
    selectedRow.cells[0].innerHTML = students.fullname;
    selectedRow.cells[1].innerHTML = students.ci;
    selectedRow.cells[2].innerHTML = students.career;
    selectedRow.cells[3].innerHTML = students.materia;
    selectedRow.cells[4].innerHTML = students.notas;
    selectedRow.cells[5].innerHTML = students.asis;
}
