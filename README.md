# Rick and Morty's characters Single Page App
The Single Page App consists of two pages: Home page and Profile page. It retrieves and displays data from the Rick and Morty API's character endpoint. The Single Page App creates an intuitive and appealing platform for users to explore Rick and Morty characters. It is designed for people who are interested in "the Rick and Morty" TV show to get more information about the characters. Users can easily navigate, search by name and get more detailed information about their favourite characters on Profile Page.

## Structure of the project

## Overview
On the Home page the App fetches character's data from the API and displays it in a table with the following columns: Avatar, Name, Species, and Status.
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/e7801ec2-1350-41cf-89ed-df05e4cba723)


### Navigation and Pagination

There are 2 buttons: Next page and Previous page to navigate between pages. The user can navigate through different pages of characters using the pagination buttons located at the bottom of the table.
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/eb08582c-5bc0-4e24-813f-18a16d286661)


### Search
At the top of the Home page, there's a search bar that can be used to filter the characters by their names. This feature works in real-time, updating the displayed character list as the user types in the search field. The search function helps users filter the characters based on their names.
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/9dae1216-0749-4393-b9e8-9fb5adc72a2c)


### Detailed Character Information
If a user wants to get more information about a specific character, they can click on the character's name in the table. So then they will be navigated to the Profile page, where more detailed information about the character is displayed(character's gender, origin, and current location).
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/2fcd8de7-20c2-4dc5-a322-d377cbbcc72d)


### Returning to Home Page
After seeing a character's profile, the user can return back to the Home page by clicking on the "Back" button located at the bottom of the Profile page. This action will bring the user back to the main character list, maintaining the same page they were viewing before entering the Profile page.
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/7c1f3768-5d74-4fe2-bbd2-a99f6f90dc3b)

## Available Scripts and how to run and test 
Install dependies

### `npm install`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

