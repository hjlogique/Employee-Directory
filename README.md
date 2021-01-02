[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/hjlogique/Employee-Directory?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/hjlogique/Employee-Directory?style=flat&logo=appveyor)
  
# Employee-Directory

  ## Description 

  This React app allows users to view the entire employee directory at once to have quick access to employee's non-sensitive information. It generates a table of employees where users can sort the list of employees by name or department, or search for employees by their first names.
 
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation

   To run this app you need to execute `Create React App` by running the following command in your integrated terminal:

   `npx create-react-app Employee-Directory`

   You can use the provided `package.json` for the required `NPM` package dependencies. Once everything is installed and the `React App` is created, replace the `src` folder in it with the provided `src` folder. 
   
   Next run the `npm start` command in your integrated terminal to start the app. `React` opens the app using the `localhost:3000` in your default browser automatically. 

   For this app no database is used, and the `employee` JSON file includes all employee data. For the purpose of the demo, this app links to avatar images provided in the [https://pickaface.net](https://pickaface.net) website (No image is downloaded or necessarily required for this app).

   
  ## Usage 
   
   Once the app is up and running, a table of employees is generated. The table displays a list of rows, each of which includes employee's `image`, `first name and last name`, `job title`, `department`, `email address` and `office number`.

   Above the table on the left, the two `Sort Names` and `Sort Depts` buttons sort the list of employees by their first names and departments respectively. The default sorting is ascending and it can be changed to descending by toggling the buttons.
   
   On the right, by entering any letter in the `Search by first name` entry field, the list of the employees is updated accordingly (see the screenshots below). If no employee with entered terms are found, a message is displayed reading: `No Employee found!`.
   
  ![image 1](/screenshots/img1.png)

  ## Contributing
  
  Please let me know if there are any ways to improve the logic, the code or the features of this application. Please also let me know about any found bugs or issues. I would really appreciate your contributions.
  
  ## Questions
  
  [Link to my GitHub profile](https://github.com/hjlogique)

  If you have any questions, please contact me via email:
  
  Email: hjlogique@yahoo.com
  
  ## License
  
  MIT License
