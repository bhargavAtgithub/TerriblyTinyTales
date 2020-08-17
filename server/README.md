## TerriblyTinyTales
# String Shortener

This is a string shortener application developed as a part of the assignment for internship at TerriblyTinyTales.

- This application takes an input of a string and compresses it to a shorter string. The compression algorithm that is used in this application to shorten the string is called **Run Length Encoding.**

- In this Algorithm, the first letter of the string is picked up and then it is compared with its subsequent elements of the string and takes the count of the same subsequent elements and then appends the count of it. This process is repeated till the end of the string.

- The UI of the application is built with React.js.

- Every part of the application in the UI is divided into components(which is the best practise commonly followed in the React community).
- List of components: 
    - Row -> As the name suggests, aligns all the children horizontally
    - Col -> Similar to Row, aligns all the children vertically
    - Container -> Inspired from bootstrap, this is a flex component.
    - TextBox -> This component takes the input as-well-as displays the output. The output component takes the bool value readOnly.
    - Title -> A beautiful text font,Satify, in h1 tag
    - SubTitle -> A 14px span element.
    - The icons in the application are from Material UI.

- The server side of the application is bult on express.js
- This express server contains two different endpoints:
    1. For encrypting the string.
    2. For decrypting the string.

