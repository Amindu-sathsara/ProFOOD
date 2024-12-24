# //Planning for food ordering app development 
* Header
    * Logo
    * Nav Items
*Body
    * Search
    * Restaurant container
        * Restaurant cards
             *img
             *Name, star rating ,cuision, delivery type 

*Footer
    * Copyrights
    * Links 
    * Address
    * Contacts



# Parcel 
-Dev build 
-Local server
-HMR- hot module replacement 
-HMR is help to refrech the page automatically ,once it changed .

-How this HMR working is :it use file watching algorithm that written using C++

-parcel is catching things and it helps to faster build

-Image optimization
-minification
-Bundling
-Compress
-consistent hashing >>> do more reading on this

-code splitting
-differential bundling -it helps to work with older browser

-gives diagnostics
-gives help in terms of good way of error handling 
-parcel is also help in https 

- just read dabout parcel from parcel.org

-There are another important stuff to note down , parcel is not just use main in package json file and 
- remove it since parcel buid it in terminal

# to give our app to control what the exact browsers and browser versions should added there is 
-can be done adding browserList configuration within package.json file 
-Read more about from browserList.dev web site 


# Code beautifier extesion that Akshay Saini Sir Suggest Us
1.ES lint
2.Better Comments 


# how the react is work behind the scence of jsx world 

Jsx transfiled before it reached the js =>Parcel-->Babel
Jsx =>React transfiles it to React.createElement =>ReactElewment==Wich is js Object and =>HTML element (render)

JSX is HTML-like or XML-like element not the exact one 



# There are two types of Import and Export in React
- 1.Defualt import /excport 

  ex: export default component;
      import Component from "path";



- 2.Named export/import 
  ex: Export const Component ;
      import {component} from "path";




# React hooks - just a normal JS functions that written by facebook developers 
(those utility functions we get to our project from node modules )

there are two most important React hooks
1.useState() = this is use to create super powerfull react state variables

2.useEffect() = this is use to


# Use State is an super Power full variable 
search about the ,
    1.Reconcilitiation Algorithm or React Fiber -Which is the core concept of react 
    2.Diff algorithm in React 


# Virtusl Dom :
- Virtual DOM is a representation of actual DOM 





# Episode 6:  😍😍😍😍😍😍

  ➡️two types of architecture   -search about these things 
 1.Monolithic architecture   2.Microsservices architecture

 (use different different tech stack to implement different microservices in the same application and then use different port and after that when deploy all microservices can seperate with  / and name )


 😎😎 there are two types of approaches to connect with backend and fetch data

 👀  Approach 01:    ➡️When the application is load 😊

 Loads➡️ API room ➡️ Render        (As my understanding here What is happening is once we loads the page it automatically call the API and  render the UI accordingly)

👀  Approach 02: (This approach is using in the React most of the time )


💡💡What is fetch();
fetch is a super powerfull function that given to us by js engine or browser ti fetch the data

# use Effecft has three different ways to behavior according to the dependecy array in it's as arguments 

 1- without an dependency array -iy called useEffect when rendering component
 2.with an empty dependency array -only useEffect will called only one time - (in intial compoennt rendering)
 3.with an array of dependencies-if the dependency changes then for each changing time it called for use effect 
 (note that all these time , when the initial component render then this will called for useEffect definatly )
 


 # there are two types of routing in web apps
 1-client side routing
 2-server side routing



 # Episode 08-Let's get classy

1.To add props to the route we just use constructor in there
 constructor(props){
    super(props); //What is the use of this super keyword and Why must we need this .

 }


 2.If you need to update the state in class component then don't update the state variale directly
 

 # Let's understand the life cycle of react class component
 

 # Just install react developer tool chrome extension 
 - it gives you super powers to build react project

 
# Redux -  React redux toolkit (It is the latest way to work with react )
-install react js tool kit and react redux - we need thsee two different libraries 
-Build our store 
-Connect our store to our app 
-Slice 
-dispatch (action)
-selector 



# Types of testing ... (Developer testing)
-Unit testing 
-Integration testing
-End to end testing (e2e testing   )



# Setting up testing in our app 
-Installing react testing library 
-install jest to our app 
-Installed babel dependencies
-configure babel 

-to slove conflict betweeen default parcel dependencies and our own custom parcel dependencies just add .parcelrc in our code base and copy the content from offcial parcel documentation 

-jest configuration added => npx jest --init 
