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
         list[i].style.display = 'block';
      }
      else {
         list[i].style.display = 'none';
      }
      

   }
   console.log('I am in show page');
}
// showPage(studentList, 1); //no need to hard code this in, showpage can be called

// /*** 
//    Create the `appendPageLinks function` to generate, append, and add 
//    functionality to the pagination buttons.
// ***/

const appendPageLinks = (list) => {
   const numberOfPages = Math.ceil(list.length/studentsPerPage); //calculates # of pages needed and uses Math.Ceil to round up to whole number 
   
   const div = document.createElement('div'); //creates div node
   div.classname = ('pagination'); // adds pagination class name to div node
   document.querySelector('.page').appendChild(div); //??? received "Uncaught TypeError" alert when using "'.pagination'" instead of "div". WHY? need to research. ANSWER: appendChild Method uses variables only? Can not figure out how to append all nodes of certain class. Will have to rely on just DIV for now :/ but I don't like this cause other divs might be accessed than the ones i intend.
   const ul = document.createElement('ul'); //creates ul node
   div.appendChild(ul); //defines ul as a child node of div node
   

   //for loop to add li and a tags with the page number text (aka to manifest series of Pagination Buttons = numberOfPages)
   for (let i = 0; i < numberOfPages; i += 1) {
      const li = document.createElement('li'); //creates li node
      ul.appendChild(li); //defines li as child node of ul node
      const a = document.createElement('a'); //creates a node
      li.appendChild(a); //defines a as child node of li node
      if (i == 0) {
         a.className = "active"; // this class denotes which page of students will be shown.
         showPage(studentList, i +1); // *** any list length or page start if you call the show page function here rather than right after defining the showpage function
      }
      a.href = '#'; //hyperlink to top of the page
      a.textContent = i +1; //defines text content of hyperlink, +1 because i starts at 0
   }
   //event listener to make pagination buttons respond to user click
   let li = ul.firstElementChild;
   let a = document.getElementsByTagName('a');
   ul.addEventListener('click', (event) => {
      for (let i = 0; i < numberOfPages; i += 1) { //removes active class from all a nodes (should just be first a node per the for loop above)
         let button = a[i]; 
         if (button.className == 'active') { 
            button.classList.remove('active');
            console.log(button.className);
            console.log(a); // to test that active class has been removed from all buttons
         }
      }

      
      event.target.className = 'active'; //adds active class to the node that was clicked  
      let pageNumber = document.querySelector('.active'); //variable to pass as page number parameter to the showpage function
      console.log(pageNumber.textContent);
      console.log(typeof parseInt(pageNumber.textContent)); // uses typeof method to ensure string is being converted to a number using parseItn
      showPage(list, parseInt(pageNumber.textContent));  //converts textContent from string to number and passes number into showPage function               
    });
}
appendPageLinks(studentList);

// // ***Remember to delete the comments that came with this file, and replace them with your own code comments.