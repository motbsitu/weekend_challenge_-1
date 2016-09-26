//Created September 24, 2016 by Julie S. Mike

//
$(document).ready(function(){

  //variable for adding salary and deleting salary
  var totalSalary = 0;
  //event listener
  $('#employee-info').on('submit', function(event){
  //to prevent default behavior of adding name labels
  event.preventDefault();

  //variable that takes in employee as object
  var employee = {};

  //method serialize array to take values from form and put into array
  var fields = $('#employee-info').serializeArray();
 //console.log('fields', fields);

//put them into object
  fields.forEach(function(element, index){
    //first input from form, iterates over them to create object
    employee[element.name] = element.value;

  });

  //clear form, .val('changestext' and number) had to add both to clear all
  $('#employee-info').find('input[type=number], [type=text]').val('');


  //appending to the document, call the function creating later
  appendDom(employee);

  });
  function appendDom(emp) {

      //employee object is represented by emp, created jQuery object class of employee
      var $emp =$('<tr class="employee"></tr>');

      //append table. class for salary used
      $emp.append('<td>' + emp.employeeFirstName +  '</td>');
      $emp.append('<td>' + emp.employeeLastName + '</td>');
      $emp.append('<td>' + emp.employeeId + '</td>');
      $emp.append('<td>' + emp.jobTitle + '</td>');
      $emp.append('<td>' + emp.employeeSalary + '</td>');
      $emp.append('<td >  <button class="deleteButton"> Delete Employee </button>  </td>');

      //select something on DOM to append it to
      $('#employeeTable').append($emp);

      //go to last delete button add salary temp data file, salary data
      //added here when append, stored on that element on DOM
      $('.deleteButton').last().data("salary", emp.employeeSalary);
        //console.log($('.deleteButton').last().data("salary"));
      //add total salary on each click
      totalSalary += parseInt(emp.employeeSalary);
      var $monthlySalary = totalSalary/12
      //display monthly salary
          console.log(typeof(totalSalary));
      $('#monthly-salary').empty();
      $('#monthly-salary').append(($monthlySalary).toFixed(2));
  }

//delete table row

    $("#employeeTable").on('click','.deleteButton',function(){
      //goes to data field and grab salary info to delete & recalc.
      //click event this bound to button
      var recalcSalary = $(this).data("salary");
      totalSalary -= recalcSalary;

      $('#monthly-salary').text((totalSalary/12).toFixed(2));
      //removes table row , td, (the button is wrapped in td, within a tr)
      //row is what we want to remove
      $(this).parent().parent().remove();
      //or $(this).closest('tr').remove();   better
})


});

//.toLocaleString('en-US', { currency: 'USD', style: 'currency'});
//.tofixed(2);
