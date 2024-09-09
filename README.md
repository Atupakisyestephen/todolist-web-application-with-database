# todolist-web-application-with-database
This is a simple web-based Todo List application built using Node.js, Express, EJS, and MongoDB. The app allows users to create custom todo lists, add items to them, and delete completed tasks.<br />

Features<br />
Default List: A predefined "Today" list with default tasks.<br />
Custom Lists: Create custom todo lists by typing a unique name in the URL.<br />
Add/Delete Tasks: Add tasks to any list and delete them upon completion.<br />

Technologies Used<br />
Backend: Node.js, Express<br />
Frontend: EJS (Embedded JavaScript templating)<br />
Database: MongoDB (local or cloud-based with MongoDB Atlas)<br />
Other: Body-parser for handling form data, Lodash for utility functions<br />

![1](https://github.com/user-attachments/assets/488ac07b-a339-495c-9cc4-b3b07b42ef89)
![2](https://github.com/user-attachments/assets/47126c17-9dfa-46fa-8829-a5674e5b3e85)

Getting Started<br />
Prerequisites<br />
Node.js<br />
MongoDB (Either a local instance or MongoDB Atlas)<br />

Installation<br />
1.Clone the repository:<br />
git clone https://github.com/Atupakisyestephen/todolist-web-application-with-database.git<br />

2.Navigate to the project directory:<br />
cd todolist-web-application-with-database-main<br />

3.Install dependencies:<br />
npm install<br />

4.Set up MongoDB:<br />
Ensure MongoDB is running locally on mongodb://localhost:27017/todolistDB.<br />
Alternatively, for MongoDB Atlas, update the MongoDB connection string in app.js:<br />
mongoose.connect("your-mongodb-connection-string");<br />

Running the Application<br />
1.Start the server:<br />
node app.js<br />

2.Open your browser and visit:<br />
http://localhost:3000<br />

Usage<br />
Visit the home page to see the default "Today" list.<br />
To create a custom list, navigate to:<br />
http://localhost:3000/your-list-name<br />
Add items using the input field.<br />
Delete items by checking them off.<br />

License<br />
This project is licensed under the MIT License
