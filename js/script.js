/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// For anyone on project 2 who wants to add the search feature 
// We Bos's Vanilla Javascript course day 6 is great practice https://javascript30.com/

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.

      Create a variable to store the student list item elements in the student list.
      Pro Tip: Log out the variable storing the list to ensure it equals the list of 
      li items and not the container of the li elements.
***/

const studentList = document.querySelector('.student-list').children;
console.log(studentList);
const studentsPerPage = 10

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
const showPage = (list, page) => {
   let startList = (page * studentsPerPage) - studentsPerPage; //subtracted "studentsPerPage" instead of "10", this makes code easier to modify if you want to quickly change display per page to a number other than 10
   let endList = (page * studentsPerPage) - 1;
   for (let i = 0; i < list.length; i += 1) {
      if (i >= startList
      && i <= endList) {
         list[i].style.display;
      }
      else {
         list[i].style.display = 'none';
      }
      

   }
}

showPage(studentList, 1);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   const numberOfPages = Math.ceil(studentList.length/studentsPerPage); //calculates # of pages needed and uses Math.Ceil to round up to whole number 
   const div = document.createElement('div');
   div.classname = ('pagination');
   document.querySelector('.page').appendChild('.pagination'); //??? should this be 'div' instead of pagination?//
   const ul = document.createElement('ul');
   div.appendChild(ul);
}



// Remember to delete the comments that came with this file, and replace them with your own code comments.