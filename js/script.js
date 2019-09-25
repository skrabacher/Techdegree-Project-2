/******************************************
Sarah Krabacher
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//global variables
const studentList = document.querySelector('.student-list').children; //const to query the student list from the html file
console.log(studentList); //logs list of students to console to check that the query is working
const studentsPerPage = 10; //const to define number of students that will be displayed per page

//showPage function hides entire list of students except for one set of 10(or whatever number the studentsPerPage variable is defined as)
const showPage = (list, page) => {
   let startList = (page * studentsPerPage) - studentsPerPage; //subtracted "studentsPerPage" instead of "10", this makes code easier to modify if you want to quickly change display per page to a number other than 10
   let endList = (page * studentsPerPage) - 1;
   for (let i = 0; i < list.length; i += 1) { //for loop iterates through the student list in sets of 10 (or whatever number the studentsPerPage const is defined as)
      if (i >= startList
      && i <= endList) {
         list[i].style.display = 'block'; 
      }
      else {
         list[i].style.display = 'none';
      }
   }
   console.log('I am in show page');//logs to console everytime showPage is run (used for troubleshooting the code)
}
// showPage(studentList, 1); //no need to hard code this in, showpage can be called in the for loop that generates the li and a tags


//appendPageLinks function creates pagination buttons and uses eventlistener to make the buttons respond to user input
const appendPageLinks = (list) => {
   const numberOfPages = Math.ceil(list.length/studentsPerPage); //calculates # of pages needed and uses Math.Ceil to round up to whole number 
   
   const div = document.createElement('div'); //creates div node
   div.className = 'pagination'; // adds pagination class name to div node
   document.querySelector('.page').appendChild(div); // appends div node to 
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
      for (let i = 0; i < numberOfPages; i += 1) { //loop created to remove active class from all a nodes (should just be first a node per the for loop above)
         let button = a[i]; 
         if (button.className == 'active') { 
            button.classList.remove('active');//removes active class if a button has active class
            console.log(button.className); //to check that active class has been removed from all buttons            
         }
      }

      
      event.target.className = 'active'; //adds active class to the node that was clicked  
      let pageNumber = document.querySelector('.active'); //variable to pass as page number parameter to the showpage function
      console.log(pageNumber.textContent); //to check that textContent is returning as intended (should be numerical string corresponding to the button clicked on)
      console.log(typeof parseInt(pageNumber.textContent)); // uses typeof method to ensure string is being converted to a number using parseItn
      showPage(list, parseInt(pageNumber.textContent));  //converts textContent from string to number and passes number into showPage function               
    });
}
appendPageLinks(studentList);

//EXCEEDS EXPECTATIONS CODE BELOW

//creates and appends search bar

   const searchDiv = document.createElement('div'); //creates searchDiv node
   document.querySelector('.page-header').appendChild(searchDiv);//appends searchDiv node to parent div with page-header class
   searchDiv.className = ('student-search'); //adds student-search class name to searchDiv node
   const searchBoxInput = document.createElement('input'); //creates searchBoxInput node
   searchBoxInput.placeholder = "Search for students..."; //defines placeholder text for searchBoxInput node
   searchDiv.appendChild(searchBoxInput);//appends searchBoxInput node to searchDiv (no need to do this: document.querySelector('.student-search').appendChild(searchBoxInput);)
   const searchButton = document.createElement('button');
   searchButton.textContent = 'search';
   searchDiv.appendChild(searchButton); //appends searchButton node to searchDiv node

   let searchInput = searchBoxInput.textContent; //variable to store text content of searchBoxInput *** NOT SURE I NEED THIS?
   console.log(searchInput);
   
   const names = document.querySelectorAll('h3');// Variable to store h3 tags(aka student names) as a list *** NOT SURE I NEED THIS?
   console.log(names);
   


   const performSearch = (searchInput, names) => {
      console.log('You are in performSearch');
      // 1a. Create two `console.log` statements to log out the `parameters` — searchInput, names 
      console.log(searchInput); 
      console.log('searchInput above');
      console.log(names);
      // 1b. Loop over the `names` parameter
      for (let i = 0; i < names.length; i += 1) {
          // 1b. Remove the 'match' class name from each `names[i]` 
          let namesLooped = names[i]; 
             if (namesLooped.className == 'match') { 
               namesLooped.classList.remove('match');//removes match class if a name has active class
                console.log(namesLooped.className); //to check that match class has been removed from all names            
             }
      
      // 1c. Create a conditional that checks two conditions:
        // 1ca. If the `searchInput.value.length` does not equal the digit zero AND `names[i].textContent.toLowerCase()` `includes` `searchInput.value.toLowerCase())`
        if ((searchInput.length !== 0) && (names[i].textContent.toLowerCase().includes(searchInput.toLowerCase()) )) { 
          // 1cb. Add the class name 'match` to `names[i]` 
          names[i].className = 'match';
        }
      }
      };
   

//Click Event and Keyup Listeners for the Search Bar and Search Button
   searchButton.addEventListener('click', (event) => {
      event.preventDefault();
      performSearch(searchInput, nameList);
      console.log('Search button is functional!');
      
   });   
   searchBoxInput.addEventListener('keyup', (event) => {
      event.preventDefault();
      performSearch(searchInput, names);
      console.log('Search Box keyup is functional!');
      
   });
// };

// <!-- student search HTML to add dynamically -->
// <div class="student-search">
//   <input placeholder="Search for students...">
//   <button>Search</button>
// </div>
// <!-- end search -->//</div>

// const div = document.createElement('div'); //creates div node
//    div.className = ('pagination'); // adds pagination class name to div node
//    document.querySelector('.page').appendChild(div); // appends div node to 
//    const ul = document.createElement('ul'); //creates ul node
//    div.appendChild(ul); //defines ul as a child node of div node
