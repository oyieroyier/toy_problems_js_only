# Wk1 Code Challenge - Toy Problems

## Prerequisites

1. Create a repository on your GitHub account.

   _**NB: One folder, with 3-4 files for each solution. Please note that a single file should only hold one solution.**_

2. Use JavaScript to wire down the solution.

3. Push the solution to the above repository once done.

4. Submit the repository link for grading.

5. Ensure your repository has a well written README.

## System Requirements

- Node 18+
- A browser capable of running JavaScript (Chrome, Firefox, Safari, or Edge)
- Operating System (Windows 10+, MacOS, Linux, etc.)
- A text editor capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
- RAM >= 4GB
- Disk space >= 1GB

## Installation

To use this repo, follow these steps:

### Alternative One

1.  Open the terminal/CLI on your computer.

2.  Clone the repository by running the following command:

        git clone https://github.com/oyieroyier/toy_problems_js_only.git

3.  Change directory to the repo folder:

        cd toy_problems_js_only

4.  Open it in your Code Editor of choice. If you use VS Code, run the command:

        code .

### Alternative Two

- On the top right corner of this page there is a button labelled `Fork`.

- Click on that button to create a copy of the repository to your own account.

- Follow the process described in `Alternative One` above.

- Remember to replace your username when cloning.

      git clone https://github.com/your-github-username-here/toy_problems_js_only.git

## Challenge 1: Student Grade Generator

### Description

Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

```
- A = 80 to 100
- B = 60 to 79
- C = 50 to 59
- D = 40 to 49
- E = less 40.
```

### Running the application

- Open the index.html file in Mozilla Firefox, Safari or any Chromium-based browser.

- If using VS Code, you can use the Live Server extension to run the file on the browser for live reloading.

- Click [HERE](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to install the Live Server extension and to read instructions on how to use it.

- Open the context menu by right clicking anywhere on the page and select `Inspect` to launch the Developer Tools.

- Inside `grade_calculator.js`, invoke/call each of the functions, one at a time and with varied inputs, to test the different logic implementations and check the output on the console.

- Remember to comment out each execution once done to avoid confusion with the outputs.

## Challenge 2: Speed Detector

### Description

Write a program that takes as input the speed of a car e.g 80.
If the speed is less than 70, it should print “Ok”.
Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

### Running the application

- With the `index.html` file still running in your browser (Check Challenge 1 above on how to do it), open the `speed_calculator.js` file.
- Invoke/call the function with different inputs/arguments, to test the different logic implementations and check the output on the console.

- Remember to comment out each function execution once done to avoid confusion with the outputs.

## Challenge 3: Net Salary Calculator (Toy Problem)

### Description

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
Calculate the PAYE (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the links [HERE](https://www.aren.co.ke/payroll/taxrates.ht 'LINK') and [HERE](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)

### Running the application

- With the `index.html` file still running in your browser (Check Challenge 1 above on how to do it), open the `salary_calculator.js` file.
- Invoke/call the functions, one at a time and with different inputs/arguments, to test the different logic implementations and check the output on the console.

- Remember to comment out each function execution once done to avoid confusion with the outputs.

## Authors

This project was contributed to by:

- [Bob Oyier](https://github.com/oyieroyier/)

## License

[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
