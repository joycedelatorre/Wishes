# Wishes
##express app using MYSQL and handlebars

![sample](https://github.com/joycedelatorre/Wishes/blob/master/images/sample.png)

### Create a schema.sql file and create the following inside of the file
1. Make a database called "wishes.db"
2. Inside of that database, make a table called "wishes" which will have a wish column and an id column. The id will be automatically incremented while also being primary key.
3. Run your schema.sql file with in MYSQL workbench before moving onto the next steps 
4. In your server.js file, you will have to create 2 routes: a GET route for '/' & a POST route for '/'
5. Render all of the wishes from the wishes table when the '/' get route is hit. Additionally show the form that the user can use to create a new wish.
6. The form will POST to the '/' route. 
7. The '/' post route will insert the wish from the form into the wishes table & will redirect the user back to the '/' get route. 