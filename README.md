
# README #

Hi! I made this API in javascript, im more comfortable to do in JS (to do quickly). I made using Express , Swagger , Sequelize, JWT as token and POSTGRE as Database.

I made three endpoints: Login, Items and Groups

The swagger can be viewed in http://localhost:8080/

This is my first project with Postgre and i started learning how to install and create database and tables. Only after finish my project i have looked for how to use migrations and run on docker. I saw that migrations in sequelize recreates all models, but my models was already created. So i put the table scripts in the docker-compose to create all tables when the docker starts, but using my existing models.

regards,

Rafael Spessotto

# Execute #

to start the project, just execute this command:

docker-compose up --build


#To see the application running (swagger)
http://localhost:8080

#To see the database (adminer)
http://localhost:8050/
