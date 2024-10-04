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