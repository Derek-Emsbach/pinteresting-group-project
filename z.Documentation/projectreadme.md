# Pinterest Clone

Check out a live version of Pinterest here:
[Pinterest Clone Live][Render]

[Render]: https://pinteresting-project.onrender.com/

Pinterest is a clone of the website PinterestApp, application where uis a visual discovery engine for finding ideas like recipes, home and style inspiration,
 and more.
The backend of Pinterest is built on python with a PostgreSQL database. Frontend
rendering is handled with React.

## Features & Implementation

### Single-Page App

*React router and components*

Pinterest is a multipage app. All “pages” are first rendered at a root url “/” then routed to the associated from user interaction.
The React router handles the logic associated with component navigation, and directs to the corresponding route.
Re-rendering of child components is done through the React API.

*Frontend and Backend Interaction*

Pinterest server interactions are limited to retrieval of data from and
modification of the database. The front end stores the necessary information for
rendering upon site entry. Other requests are made on a “need to know” basis by
various React components. This minimizes info passed between the frontend
and backend and allows for speedy re-rendering handled by React.

###Authentication

*Auth Page*

![Auth Preview](https://github.com/Derek-Emsbach/pinteresting-group-project/blob/main/z.Documentation/homepage%20sample.JPG)

*Normal Authentication*

Users of the site are required to authenticate or sign up. User will not be able to view content without signing up or loggin in.
The user model requires a unique username and password for
sign up. Upon account creation, user passwords are using the flask libraries.
Authentication uses flask libraries to match user and passwords stored on the database

*Attributes*

Pins and Boards are the most important Models of this application.

The Board table has columns for `Title`, `pinId`, `owner_id`, and
`imageUrl`. `userId` is the identifier for users in the
application interface.

Pins consist of a `userId`, `title`, `save`, `url`, and `imageUrl`.
`userId` is a foreign key pointing to the pin belongs to.

Followers and following consist of foreign keys pointing to `users.id`.

*CRUD architecture*

Pinterest lets users create, read, update, and delete boards / pins. Then follow and unfollow users of interest.
React components exist for each corresponding action in the app. Information
needed for all components or user actions performed.

[Backend Routes]
[Backend Routes]: https://github.com/Derek-Emsbach/pinteresting-group-project/blob/main/z.Documentation/backend_routes.md

**Discover Page: Shows recent pins from users**

Pictures of recent pins are displayed once logged in. User can select pins that they are intested in. It will be directed to Pin Detail where
user can click url link which directs user to the source of the pin.

*Example Discover Page*
![Discover Page Preview](https://github.com/Derek-Emsbach/pinteresting-group-project/blob/main/z.Documentation/DiscoverPage%20Sample.JPG)

The user can...
1. Select and view pins that they are interested in.
2. Pin can be saved and added to user's board of their choice.
3. Pin can be edited if it belongs to the user
4. follow creator of the pin


**Pins**
Pins are items that user are interested such as food items, pets, photos, etc. User can create, and add information associated.
Once created, it will be displayed on their my pins page, and added to the dicovery page.

**Boards**
Board is a collection of pins that user adds. They can create their a board of a certain description, and add pins to it.
Boards can be created, edited, and deleted as needed.

**User Profile**

User profile displays general information of the current user such as their username, first name, last name, email.
Profile can be updated.

From here, user can view
1) Followers and people that they follow.
2) Boards
3) Pins

**Following / Follwers**
User can click and display list of users that they follow or people that follow them.
