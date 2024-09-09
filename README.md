# todolist-web-application-with-database
This is a simple web-based Todo List application built using Node.js, Express, EJS, and MongoDB. The app allows users to create custom todo lists, add items to them, and delete completed tasks.

Features
Default List: A predefined "Today" list with default tasks.
Custom Lists: Create custom todo lists by typing a unique name in the URL.
Add/Delete Tasks: Add tasks to any list and delete them upon completion.

Technologies Used
Backend: Node.js, Express
Frontend: EJS (Embedded JavaScript templating)
Database: MongoDB (local or cloud-based with MongoDB Atlas)
Other: Body-parser for handling form data, Lodash for utility functions

![1](https://github.com/user-attachments/assets/488ac07b-a339-495c-9cc4-b3b07b42ef89)
![2](https://github.com/user-attachments/assets/47126c17-9dfa-46fa-8829-a5674e5b3e85)

Getting Started
Prerequisites
Node.js
MongoDB (Either a local instance or MongoDB Atlas)

Installation
1.Clone the repository:

2.Navigate to the project directory:

3.Install dependencies:
npm install

4.Set up MongoDB:
Ensure MongoDB is running locally on mongodb://localhost:27017/todolistDB.
Alternatively, for MongoDB Atlas, update the MongoDB connection string in app.js:
mongoose.connect("your-mongodb-connection-string");

Running the Application
1.Start the server:
node app.js

2.Open your browser and visit:
http://localhost:3000

Usage
Visit the home page to see the default "Today" list.
To create a custom list, navigate to:
http://localhost:3000/your-list-name
Add items using the input field.
Delete items by checking them off.

License
This project is licensed under the MIT License
