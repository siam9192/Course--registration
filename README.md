the features of my project
1.courses on the site can be added on the list
2.the same course can't be added to the list more than once,it will display a toast when adding more than once.
3.A total or maximum 20 hours course can be added.


* How i manage useState in my project

i have declared the useState in a jsx file,used props to send the value of useState to any child elements and to send the function of useState,if i need to pass the function of useState i have to  declared a new  function and put the useState function in a new function (because it is not possible to pass the useState function directly as a  props) and  pass that new function as a props object to the child elements.
after pass  them using props i need to destructure the props from a child elements.
so i destructure props from the child element where i had sent it.Then i used them as per my need.

