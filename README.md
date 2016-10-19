#ANGULAR update to weekend Challenge
- change all the logic from jQuery to Angular



# Weekend Challenge 1

- An application that records employee data, including their salary. We also want to add the salaries up so we know how much we’re spending each month.

The application should first have an input form that collects:

- The Employee's First and Last name
- The Employee's ID Number
- The Employee's Job Title
- The Employee's Salary (Yearly)
- The form should have a submit button that
clears out the form and
stores the submitted information.
Then, that information should be appended to the DOM so the user of the application can see the information they just entered.

- Finally, your logic should calculate all of the employee salaries and report back what the monthly cost of salaries is.


## Hard Mode
- Create a delete button that removes an employee from the DOM. Note that in hard mode, it need not remove that Employee's salary from the reported total.

## Pro Mode
- Once the employee is deleted, also update the total salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. You will need to stretch yourself for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.
