/*
Java Script Function
*/
function myFunction() {
    var resource1 = new Array('ABA Therapy', 'ABA Center1', 'ABA Therapy', 'ABA Center2', 'ABA Therapy', 'ABA Center3');
    var tbl = document.createElement('table');
    var tblBody = document.createElement('tbody');
    var j = 0;
    var k = 1;

    for (var i = 0; i < resource1.length; i++) {
        // creates a table row
        var row = table.createElement('tr');

        for (var j = 0; j < 2; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement('td');
            var cellText = document.createTextNode(resource1[j]);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute('border', '2');
}

function addTable() {

    var resource1 = new Array('ABA Therapy', 'ABA Center1', 'ABA Therapy', 'ABA Center2', 'ABA Therapy', 'ABA Center3');
    var resource2 = new Array('ABA Therapy', 'ABA Center4', 'Occupation Therapy', 'OT Center1', 'Physical Therapy', 'PT Center1');

    var e = document.getElementById('city');
    var result = e.options[e.selectedIndex].value;

    if (result == 'ba') {
        var resource3 = [...resource1];
    }
    if (result == 'mh') {
        var resource3 = [...resource2];
    }

    var myTableDiv = document.getElementById('myDynamicTable');

    var table = document.createElement('TABLE');

    table.border = '1';

    var tableBody = document.createElement('TBODY');

    table.appendChild(tableBody);
    var k = 0;

    for (var i = 0; i < (resource3.length / 2); i++) {
        var tr = document.createElement('TR');

        tableBody.appendChild(tr);

        for (var j = 0; j < 2; j++) {
            var td = document.createElement('TD');

            td.width = '75';
            //           td.appendChild(document.createTextNode("Cell " + i + "," + j));
            td.appendChild(document.createTextNode(resource3[k]));
            tr.appendChild(td);
            k += 1;
        }
    }
    myTableDiv.appendChild(table);

}