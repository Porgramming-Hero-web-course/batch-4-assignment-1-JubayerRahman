# The significance of union and intersection types in Typescript.

Types are the main reason for using typescript so here I will try my best to explain the uniuon time and intersection types. I besically try to remember them with their names like union is that type which will be either a or b and we defined this with | symble.

Suppouse I am typing a function which will take a input from the usere Now I didnt insert specification for the user to insert any specifinc type they can insert sting or number in that case we can use this type 
like 

```
const input = (data: string | number)=>{}
```


Now lets talk about intersection type. well it is also defined by its name intersection is a connectin of 2 things right? instersection type is just like this it hepls us to set two or more types in one class. Like we have a class type which is a student and another type which is a teach but they both have one type is common which is human so we can add 2 types like in both student and teacher with the intersection type 
like this:
```
class Student: person & Student  {}
class Teacher : person & tracher {}
```