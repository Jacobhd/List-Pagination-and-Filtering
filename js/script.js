/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.
***/

// studentList global variable selects where all students are listed
const studentList = document.querySelector(".student-list");
// note studentList is a class within 'ul' in html
// console.log(studentList);

// Selects all children of the ul (students)
const pageItems = studentList.children;
// console.log(pageItems);

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
// storing number of items to show on each page (10), hides the rest
// named function showPage with two arguments (list, page), with list linking to studentList

const showPage = (list, page) => {
  list = studentList;
  for (let i = 0; i <= list.length; i++) {
    if (i >= 10){
      li[i].style.display = "none"
    } else {
      li[i].style.display = "block"
    }
  }
}

// showPage(list, 1);
/*
loop over items in the list parameter
  if index of list item is >= index of first item that should be shown on page
  && the list item index is <= the index of the last item that
  should be shown on the page, show it
*/


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
/*
const appendPageLinks = (list) => {
  list = studentList;
  list.length
  document.addEventListener('click', (e) => {

}


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
*/

showPage(studentList, 1);
appendPageLinks(studentList);

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
