# Discover Flats

## Project Overview
Full stack apartment search application utilizing rails and react.
* Frontend: React, React Router v6, Material UI
* Backend: Ruby on Rails, Active Record, PostgreSQL

User Stories
* General user can create a profile
* General user can login and logout via sessions
* General user can add and delete favorites
* General user can add reviews
* User with manager access can create, update, and delete a property
* User with manager access can add and remove property images

## Project Preview

### Deployed Web Application: [Discover Flats](https://discover-flats-app.onrender.com)

### Home Page
![Home](https://imgur.com/VpQnVPI.jpg)

### Property Detail Page
![Property Detail](https://imgur.com/P0S4pJv.jpg)

### Property Manager Dashboard
![Property Manager Dashboard](https://imgur.com/loyqGI0.jpg)

## Database Overview
Database is setup to use the following seed data:
* 3 Sample Properties in the Indianapolis Area
* 4 Property Images for one of the properties

## Database Relations
![ERD](https://imgur.com/qWnK7X6.png)

## Routes

### Properties - CRUD: Create, Read, Update, Delete
**INDEX** /properties \
**SHOW** /properties/:id \
**CREATE** /properties (Must Be Logged In) \
**UPDATE** /properties/:id (Must Be Logged In) \
**DESTROY** /properties/:id (Must Be Logged In)
### Images - CRUD: Create, Delete
**CREATE** /images (Must Be Logged In) \
**DESTROY** /images/:id (Must Be Logged In)
### Users - CRUD: Create, Read
**SHOW** /users/:id (Must Be Logged In) \
**CREATE** /users
### Favorites - CRUD: Create, Read, Delete
**INDEX** /favorites (By User and Must Be Logged In)  \
**CREATE** /favorites (Must Be Logged In) \
**DESTROY** /favorites/:id (Must Be Logged In)
### Reviews - CRUD: Create, Read
**INDEX** /reviews (By User Must Be Logged In)  \
**CREATE** /reviews (Must Be Logged In) \

## Attributions

The information used to populate both the seed data and the data showcased on the deployed web application is derived from Apartments.com and various individual property websites. However, it is important to note that the data was gathered at different points in time and may not accurately represent the current state of the properties. For up-to-date information, kindly visit either Apartments.com or the respective property websites.