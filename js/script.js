/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//'use strict'

// studentList global variable selects where all students are listed
const studentList = document.querySelector(".student-list"); //selects '.student-list' element class
// note studentList is a class within 'ul' in html
// Selects all children of the ul (students)
console.log(studentList); //test

const pageItems = 10; //limiting 'pageItems' variable to 10
// console.log(pageItems);
// note we want 'pageItems' to store the number of items to show on each "page", (10)


/* Prefunction test
for (let i = 0; i < studentList.length; i++) {
  studentList[i].style.display = 'none';
}
*/
// showPage function test 3
const showPage = (list, page) => { // showPage arrow function
  for (let i = 0; i < studentList.length; i++) {
      //currently unexecuted code *
      if (i < (list * pageItems) && i >= ((list * pageItems) - pageItems)) {
        studentList[i].style.display = 'block';
      } else {
        studentList[i].style.display = 'none';
      }
  }   //*
};


// appendPageLinks function test 2
const appendPageLinks = (list) => {
  const page = document.querySelector('.page'); //selects '.page' class
  const li = document.createElement('li'); //creates 'li' element
  const buttonUl = document.createElement('ul'); //creates 'ul' element
  const div = document.createElement('div'); //creates 'div' element
  page.appendChild(div); //adds 'page' to 'div'
  div.className = 'pagination'; //gives 'div' class of 'pagination'
  div.appendChild(buttonUl); //adds 'buttonUl' to 'div' element

// problem here is loop going uninteruptted to 10 (not linked to student list?)
  for (let i = 0; i < pageItems; i+= 1) { //for loop containing
    const pageLink = document.createElement('a'); //creates 'anchor' element
    pageLink.className = 'active'; //sets 'pageLink' to active
    pageLink.href = '#';
    pageLink.textContent = i + 1;
    li.appendChild(pageLink); //adds pageLink to 'li'
    buttonUl.appendChild(li); //adds 'li' to 'buttonUl'

// problem here is buttons clicked don't function particular lists
// Currently unexecuted code *
    li.addEventListener('click', (event) => { //eventListener click on 'li' element
      let pageNumber = parseInt(event.target.textContent);
      let endIndex = pageNumber * 10;
      let startIndex = endIndex - 10;
      for (let i = 0; i < studentList.length; i++) {
        if (i >= startIndex && i < endIndex) {
          studentList[i].style.display = '';
        } else {
          studentList[i].style.display = 'none';
        } //end if-else statement
      }   //second for loop
    });   //* li.addEventListener *
  }       //first for loop
}         //appendPageLinks arrow-function

//console.log(page); //test
//console.log(div); //test
//console.log(buttonUl); //test
//console.log(pageItems); //test



showPage(studentList, 1); //test
appendPageLinks(studentList); //test - not functioning



/* HTML reference
<!-- pagination HTML to create dynamically -->
<div class="pagination">
  <ul>
    <li>
      <a class="active" href="#">1</a>
    </li>
     <li>
      <a href="#">2</a>
    </li>
     <li>
      <a href="#">3</a>
    </li>
     <li>
      <a href="#">4</a>
    </li>
     <li>
      <a href="#">5</a>
    </li>
  </ul>
</div>
<!-- end pagination -->
*/

/* -----------------notes and test functions ------------------------------------------------------
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.


write one function to add buttons to the bottom of the page
and another to show different sets of student information when each button is clicked

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

/*
loop over items in the list parameter
  if index of list item is >= index of first item that should be shown on page
  && the list item index is <= the index of the last item that
  should be shown on the page, show it
*/

// storing number of items to show on each page (10), hides the rest
// named function showPage with two arguments (list, page), with list linking to studentList
// "list" to represent the actual list of students that you'll pass in as an argument when function is called
// "page" to represent the page number that you'll pass in as an argument when function is called

// inside the function : two variables to store the start index and the end index of list items to be displayed on a given page
// start index = (page parameter * items per page) - items per page
// end index = page parameter * items per page
// loop over list parameter, inside display any 'li' item with an index that is greater than or equal to the start index variable and less than the end index variable


/* test 1 showPage funtion
const showPage = (list, page) => {
  const startIndex = (page * 10) - 10;
  const endIndex = (page * 10) - 1;
  list = studentList;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex){
      list[i].style.display = "none";
    }
  }
};
showPage(); //test 1

------------------

// test 2 showPage function - attempting to hide lists > 10
const showPage = (list, page) => {
  const startIndex = (page * pageItems) - pageItems;
  const endIndex = (page * pageItems);
  const li = document.querySelector('li');
  list = studentList;
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex){
      list[i].style.display = "block";
    }
  }
};
/*

// test 1 appendPageLink function
const appendPageLinks = (list) => {
  const page = document.querySelector('page');
  const div = document.createElement("div");
  const pageList = document.createElement("ul");
  div.classList.add('pagination');
  page.appendChild(div);
  div.appendChild(pageList);

  a.addEventListener('click', showPage);
}

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.

1  list.length / page max
2  create div, give pagination class and append it to the .page div
3  Add a ul to pagination div to store pagination appendPageLinks
   for every page, add li and a tags with page number text
4  Add an event listener to each a tag. When clicked call showPage function
   to display appropriate page
5  Loop over pagination links to remove active class from all links
6  Add the active class to the link that was just clicked.
7  Identify that clicked link using event.target
}

//notes for addEventListener
list = studentList;
list.length
document.addEventListener('click', (e) => {

*/


/* pseudocode:
global studentList variable
global listPageItem variable

function hide all li except current 10
  list parameter
  page parameter
    startIndex = (page parameter * items per page)
    endIndex = page parameter * items per page
    Loop over list parameter
      inside loop, display any li with index >= startIndex and < end index variables
endFunction

function creates and appends functioning pagination appendPageLinks
  single list parameter (e) represents all items
    create and append DOM elements for pagination appendPageLinks
endFunction

call showPage function(global variable for list Items, 1)
call append page links function(global variable for list Items)
*/
