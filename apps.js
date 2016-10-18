//Created October 18, 2016 by Julie S. Mike

var app = angular.module('basicApp', []);

app.controller('BasicController',function(){
  console.log('basic controller loaded');

  var employee = this;
  employee.employeesList = [];
  employee.totalSalary = 0;
  employee.monthlySalary =0;



employee.createList = function(){
  employee.employeesList.push(angular.copy(employee.list));

  employee.totalSalary += parseInt(employee.list.salary);
  employee.monthlySalary = (employee.totalSalary/12).toFixed(2)

  employee.employee-info.$setPristine();

}

employee.deleteEmployee = function($index){
  employee.employeesList.splice($index,1);
  var thisSalary = employee.list.salary;
  employee.totalSalary -= thisSalary;
  employee.monthlySalary = (employee.totalSalary/12).toFixed(2)
}

});
