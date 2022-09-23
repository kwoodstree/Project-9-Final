//step 1 Declare variables
var url = 'https://randomuser.me/api/?results=12';

//These variables point to specific classes on your DOM (Layout or HTML view)
var directoryContainer = document.querySelector('.directory-container');
var overlay = document.querySelector('.overlay');
var modalText = document.querySelector('.modal-content');
var Close_button = document.querySelector('.close');


//Step 2
// FETCH DATA FROM API

fetch(url)
  .then(response => response.json())
  .then(response => response.results)
  .then(displayEmployees)
  .catch(
    error =>
      (directoryContainer.innerHTML = `Sorry, there has been an error pulling data from the API`)
  );


  //step 3
// DISPLAY EMPLOYEES on DOM

function displayEmployees(employeeData) {
  employees = employeeData;
  // STORE EMPLOYEE HTML
  let employeeHTML = '';
  // LOOP THROUGH EACH EMPLOYEE AND CREATE MARKUP
  employees.forEach((employee, i) => {

    let name = employee.name;
    let email = employee.email;
    let city = employee.location.city;
    let state = employee.location.state;
    let picture = employee.picture;

  //  console.log('The Pizza ingredients are: ' + name.first +'  '+ email+'  ' + city)

  // creating the DOM (HTML layout or View)
    employeeHTML += "<div class= 'directory-container__card'" +"data-index="+ i +">"
       +" <img src="+picture.medium+" alt="+name.first + " " + name.last + " class='card__img'" + " />"
        + "<div class='card__info'>"
         + "<h2 class='card__info-name'>" +name.first+ " " +name.last+ " </h2>"
          + "<p class='card__info-email'>"+ email+ "</p>"
         + " <p class='card__info-address'>"+city +", " +state +"</p>"
        +"</div>"
     +" </div> "
     ;


  });

  // appending to the dom
  directoryContainer.innerHTML = employeeHTML;
}


//Step 4 creating the Modal(overlay)
function modalDisplay(index) {
  let {
    name,
    dob,
    phone,
    email,
    location: { city, street, state, postcode },
    picture
  } = employees[index];

  let date = new Date(dob.date);
  var modalContent = '';
  modalContent +=
"<div class='modal-individual data-index='" + index +">"
+" <img src="+picture.large+" alt="+name.first + " " + name.last + " class='img-modal'" + " />"
    + "<div>"
      + "<h2 class='modal__info-name' >" + name.first+ " "+ name.last + "</h2>"
       +"<p class='modal__info-email'>"+ email+ "</p>"
       +"<p class='modal__info-city'>"+ city+ "</p>"
       +"<hr />"
       +"<p class='modal__phone'>"+phone+ "</p>"
       + "<p class='modal__info-address'>"+ street.number+ " "+ street.name+ " " +state+ " "+ postcode +"</p>"
       +"<p class='modal__info-birthday'><strong>Birthday :</strong> " +date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()+"</p>"
    +" </div>"
   +"</div>"
;


  overlay.classList.remove('hide');
  modalText.innerHTML = modalContent;
}



directoryContainer.addEventListener('click', e => {
  if (e.target !== directoryContainer) {
    const card = e.target.closest('.directory-container__card');
    const index = card.getAttribute('data-index');

    modalDisplay(index);
  }
});


Close_button.addEventListener('click', () => {

  overlay.classList.add('hide');

});

// When the user clicks anywhere outside of the modal, close it
overlay.addEventListener('click', (event) => {

  if (event.target == overlay) {
    overlay.classList.add('hide');

}

});
