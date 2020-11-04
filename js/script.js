/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Global variables
const studentList = document.querySelectorAll(".student-item"); //selects node of 'li' elements containing'students
console.log(studentList); // test

const pageItems = 10; // Number of students to show on each page


//showPage function to show and hide students
const showPage = (list, page) => { //list, page parameters to be passed in
  let startIndex = ( page * pageItems ) - pageItems; //first item to show
  let endIndex = page * pageItems; //last item
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block'; //show block of 'li' 10 at a time
    } else {
      list[i].style.display = 'none'; //hides the rest
    }
  }
}


//appendPageLinks function
const appendPageLinks = (list) => {
  let totalPages = Math.ceil(list.length / pageItems); //divides total list items by max items on page
  const page = document.querySelector('.page'); //selects '.page' class
  const ul = document.createElement('ul'); //creates 'ul' element
  const div = document.createElement('div'); //creates 'div' element
  div.className = 'pagination'; //gives 'div' class of pagination
  div.appendChild(ul); //adds 'ul' to 'div' to store pagination links
  page.appendChild(div); //appends 'div' to 'page' div

  for (let i = 1; i < totalPages; i++ ) { //for every page, add li and a tags with the page number text
    const li = document.createElement('li'); //creates 'li' element
    const a = document.createElement('a'); //creates 'anchor' element
    a.className = 'active'; //'a' link active
    a.href = '#'; //sets link address
    a.textContent = i; //'a' links to start at page 1
    li.appendChild(a); //adds 'a' to 'li'
    ul.appendChild(li); //adds 'li' to 'ul'

    a.addEventListener('click', () => {
      for (let i = 0; i < totalPages; i++) {
      if (a.target.tagName === 'a')
      a.className.remove = '';
      a.target.className = 'active';
      showPage(studentList, 1); //2nd argument should be text content of 'a' element that was just clicked
      }
    }); //eventListener click on anchor elements
  }
}

//nested UL element needs to contain one LI element for every 10 students in the list
//the active class name should be added to the link that was just clicked.

showPage(studentList, 1);
//not hiding groups of students

appendPageLinks(studentList);
//shows button, clickable, doen't have functionality
