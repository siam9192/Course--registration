* Add at least 3 Project features

1.courses on the site can be added on the credit
2.the same course can't be added to the credit more than once,it will display a toast when adding more than once.
3.Course can be added on the credit  until credit limit of 20 hours is exceeded,after credit limit exceeds 20 hours it will show a toast as a warning.

* Discuss how you managed the state in your assignment project.

First of all i have declared the useState in a jsx file,used props to send the value of useState to any child elements(if i need ).if i need to pass the function of useState i have to  declared a new  function and put the useState function in a new function (because it is not possible to pass the useState function directly as a  props) and  pass that new function as a props object to the child elements.
after pass  them using props i need to destructure the props from a child elements.
so i destructure props from the child element where i had pass it.Then i used them as per my need.

Here is a example :
i had to pass my api data to the other components to show the courses on the site.So i declared a useState (const [courses,setCourse] = useState([])).After declaration i pass my data to useState variable (courses) using useState function(setCourse).After passing api data I need to send the data to another components.So i pass useState variable(courses) to the components using props  where i need it.After passing i destructure the props and get the useState variable  to which components i sent.then i map inside the useState variable and i display all courses data in the site.


