//Created September 23, 2016 by Julie S. Mike

//FORMS
$(document).ready(function(){
  //event listener
  $('#employee-info').on('submit', function(event){
  //to prevent default behavior of adding name labels
  event.preventDefault();

  //variable that takes in employee as object
  var employee = {};

  //method serialize array to take values from form and put into array
  //creates [{name: "employeeFirstName"  (this is the element.name)
  //            value: "Name"}]
  var fields = $('#employee-info').serializeArray();
 //console.log('fields', fields);

//put them into object
  fields.forEach(function(element, index){
    //first input from form, iterates over them to create object
    employee[element.name] = element.value;


  });
  console.log('employee object', employee);

  //clear form, .val('changestext')
  $('#employee-info').find('input[type=text]').val('');

  //appending to the document, call the function creating later
  appendDom(employee);

  //call my new function that calulates monthlySalary
  salaryCalc(employee);

  console.log(employeeSalary.value);

  });
  function appendDom(emp) {

      //employee object is represented by emp, created jQuery object class of employee
      var $emp =$('<div class="employee"></div>');
      //appended paragraph to that div employee
      $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + ' ' + emp.employeeId + ' ' + emp.jobTitle + ' ' + emp.employeeSalary + '</p>');
      //select something on DOM to append it to
      $('#employee-data').append($emp);
  }
//new function to figure out salary calc



function salaryCalc(){
//take in an employee (yearly) salary and you will return a total monthly salary (for all employees).
var annualSalary = 0;
var monthlySalary = 0;



}



});
