let divTable = document.createElement('div');
let table = document.createElement('table');
document.body.append(divTable);
divTable.append(table);
table.style.width = '50%';
table.style.height = '300px';
let count = 1;

for(let i=0; i<10; i++) {
    let tableRow = document.createElement('tr');
    for(let y=0; y<10; y++ ) {
        let tableCell = document.createElement('td');
        tableCell.style.border = '1px solid black';
        let number = count++;
        let tableCellText = document.createTextNode(number);
        tableCell.append(tableCellText);
        tableRow.append(tableCell);
    }
    table.append(tableRow);
};