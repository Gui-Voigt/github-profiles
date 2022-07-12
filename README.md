# GITHUB PROFILE - Api consumer

## The project
This project intends to consume the github API and return in a pleasant and responsive interface in an organized way.

The project is being carried out using the Vue.js 3 framework.

## Author's comment

I'm working on this project as part of the selection process of the company Yeb market intelligence.

Although I already know some of the fundamentals of the Vue framework, this was my first opportunity to implement them in practice, in a real usability application.

I intend to continue the project as a way to continue studying the framework so that I can see the real impact of the concepts, libraries and the like that will build the application ecosystem.




#### Warning: we have a bug in this project

symptom:

When loading elements that use the responses of the get request, the previous state of the response is passed as parameters.


Possible solutions:

I believe the problem can be solved...

(i) Implementing a state manager such as Vuex.

(ii) Triggering the request from the rendering of the views that use it, and not from the one that "invokes" it. This would require code refactoring.

(iii) Creating a Model for the variable that stores the request responses and consulting its state before calling the routes.
