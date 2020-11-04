/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Global variables
const studentList = document.querySelectorAll(".student-item"); // Selects node of 'li' elements containing list of students
const pageItems = 10; // Number of students to show on each page


const showPage = (list, page) => { // 'showPage' function to show and hide students
  let startIndex = ( page * pageItems ) - pageItems; // First index item to show
  let endIndex = page * pageItems; // Last index item to show
  for (let i = 0; i < list.length; i++) { // Loop through and index student items
    if (i >= startIndex && i < endIndex) { // If list index is greater or equal fisrt items and list index is less than last item
      list[i].style.display = 'block'; // Display block of list index items 10 at a time
    } else {
      list[i].style.display = 'none'; // Hides all other list index items
    } // if...else statement
  } // for loop
} // showPage arrow function with two parameters to be passed in


const appendPageLinks = (list) => { // Display sets of items unique to each page and determine how many pages to display
  let totalPages = Math.ceil(list.length / pageItems); // Divides total list items by max items on page, determining how many pages to display
  const page = document.querySelector('.page'); // Selects '.page' class
  const ul = document.createElement('ul'); // Creates 'ul' element
  const div = document.createElement('div'); // Creates 'div' element
  div.className = 'pagination'; // Gives 'div' class of pagination
  div.appendChild(ul); // Adds 'ul' to div to store pagination links
  page.appendChild(div); // Appends 'div' to 'page' div
  for (let i = 1; i < totalPages; i++ ) { // For every page, add 'li' and 'a' tags with the page number text
    const li = document.createElement('li'); // Creates 'li' element
    const a = document.createElement('a'); // Creates 'anchor' element
    li.appendChild(a); // Appends 'a' to 'li'
    ul.appendChild(li); // Appends 'li' to 'ul'
    a.className = 'active'; // 'a' link active
    a.href = '#'; // Sets link address
    a.textContent = i; // 'a' links functionality to loop through index
    a.addEventListener('click', () => { // Click eventListener to call with each link clicked, looping through the list
      showPage(studentList, i); // Calls 'showPage' function, passing in students and 'i' to be looped over displaying sets of students
    }); // 'Click' eventListener on anchor elements
  } // for loop
} // 'appendPageLinks' arrow function with single parameter


showPage(studentList, 1); // Call 'showPage' function passing in list of students and how many to show per page
appendPageLinks(studentList); // Call 'appendPageLinks' function passing in list of students to determine number of pages to display
