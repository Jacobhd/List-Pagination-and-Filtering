/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

'use strict'

// Global variables
const studentList = document.querySelectorAll(".student-item");
const pageItems = 10;

// Displays groups of students per page for any length of list
const showPage = (list, page) => {
  let startIndex = ( page * pageItems ) - pageItems;
  let endIndex = page * pageItems;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

//Display sets of items unique to each page and determine how many pages to display
const appendPageLinks = (list) => {
  let totalPages = Math.ceil(list.length / pageItems);
  const page = document.querySelector('.page');
  const ul = document.createElement('ul');
  const div = document.createElement('div');
  div.className = 'pagination';
  div.appendChild(ul);
  page.appendChild(div);
  for (let i = 1; i <= totalPages; i++ ) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.appendChild(a);
    ul.appendChild(li);
    a.className = 'active';
    a.href = '#';
    a.textContent = i;
    a.addEventListener('click', () => {
      showPage(studentList, i);
    });
  }
}

showPage(studentList, 1);
appendPageLinks(studentList);
