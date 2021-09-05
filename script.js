"use strict";

const rows = 10;
const columns = 15;

const elem = document.querySelector('#smart-table');

createTable (elem, columns, rows);

function createTable(parent, cols, rows) {
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        if (i ==0) {
            for (let j = 0; j < cols; j++) {
                
                const th = document.createElement('th');
                if (j == 0 || j == 1) {
                    th.innerHTML = `Fixed Col ${j}`;
                    th.classList.add(`fixed-left-${j}`);
                } else if (j == (cols - 2) || j == (cols - 1)) {
                    th.innerHTML = `Fixed Col ${j}`;
                    th.classList.add(`fixed-right-${j}`);
                } else {
                    th.innerHTML = `Col ${i-1}-${j}`;
                }
                tr.appendChild(th);
            }
        } else {
            for (let j = 0; j < cols; j++) {
                const td = document.createElement('td');
                if (j == 0 || j == 1) {
                    td.innerHTML = `Fixed Col ${j}`;
                    td.classList.add(`fixed-left-${j}`);
                } else if (j == (cols - 2) || j == (cols - 1)) {
                    td.innerHTML = `Fixed Col ${j}`;
                    td.classList.add(`fixed-right-${j}`);
                } else {
                    td.innerHTML = `Col ${i-1}-${j}`;
                }
                
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);      
    }

    parent.appendChild(table);
}

function scrollHorizontally(e) {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.querySelector('#smart-table').scrollLeft -= (delta * 40); 
    e.preventDefault();
}

document.querySelector('#smart-table').addEventListener('mousewheel', scrollHorizontally, false);


  