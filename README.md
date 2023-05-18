# Rick and Morty's characters Single Page App
The Single Page App consists of two pages: Home page and Profile page. It retrieves and displays data from the Rick and Morty API's character endpoint. The Single Page App creates an intuitive and appealing platform for users to explore Rick and Morty characters. It is designed for people who are interested in "the Rick and Morty" TV show to get more information about the characters. Users can easily navigate, search by name and get more detailed information about their favourite characters on Profile Page.
## Home page:
the top:
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/6aff8fdb-b213-4586-9e95-b6a7c18d973e)

the bottom: 
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/bf26639c-4b07-43a0-a724-414240edcd02)

## Profile Page:
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/4e7c7be9-dd98-492f-b706-ba20614a7e6c)


## Structure of the project

## Overview
On the Home page the App fetches character's data from the API and displays it in a table with the following columns: Avatar, Name, Species, and Status.

![image](https://github.com/zhypargulk/genesys_task/assets/130022154/f391c185-f281-4f8c-9758-e90b7d3db697)

![image](https://github.com/zhypargulk/genesys_task/assets/130022154/e00a2f57-f77c-4f93-b3f4-5dcee341f680)


### Navigation and Pagination

There are 2 buttons: Next page and Previous page to navigate between pages. The user can navigate through different pages of characters using the pagination buttons located at the bottom of the table.
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/fa3938d5-f0cf-4595-bf42-b8ba844c1423)
### Search
At the top of the Home page, there's a search bar that can be used to filter the characters by their names. This feature works in real-time, updating the displayed character list as the user types in the search field. The search function helps users filter the characters based on their names.
![image](https://github.com/zhypargulk/genesys_task/assets/130022154/04bc44f6-0e0f-426f-994e-9906e90dbe68)

![image](https://github.com/zhypargulk/genesys_task/assets/130022154/9662aee3-4fcb-44ee-a0f1-6d3dcdbbf1bc)


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
