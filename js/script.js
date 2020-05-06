/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

// Create studentList global variable
const studentList();

// Create 2nd global variable, storing number of items to show on each page (10)
const pageItems();

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

function showPage(list, page) {}


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

function appendPageLinks(e) {}


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
// Remember to delete the comments that came with this file, and replace them with your own code comments.
