# User Stories

## Profile
* As a logged in user, I can create, view, or edit thier profile.
  * `POST /api/users`
  * `GET /api/users`
  * `PUT /api/users/:userId`
  * `DELETE /api/users/:userId`

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the lob-up form.
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying recent pins. So that I can easily log out to keep my information secure.

## Discover Feed on Home Page
* As a logged in user, I want to be able to view the discover feed on the homepage that consists
  * of random pins `/home`

## Pins

### Create Pins

* As a logged in user, I want to be able to post new Pins.
  * When I'm on the `/pins` page:
    * I can write and submit a new pins.
      * So that I can share my thoughts and memes with my friends.

### Viewing Pins

* As a logged in _or_ logged out user, I want to be able to view a selection of the most recent pins.
  * When I'm on the `/pins` page:
    * I can view the ten most recently posted pins.
      * So that I can read and interact with the thoughts and memes of my friends.

* As a logged in _or_ logged out user, I want to be able to view a specific pin, creator, and followers.
  * When I'm on the `/pins/:pinId` page:
    * I can view the content of the pins with a title / caption
    * I can follow the creator
    * I can see the profile picture of the creator

### Updating Pins

* As a logged in user, I want to be able to edit my pins by clicking an Edit button associated with the pins.
  * When I'm on the `/pins/:pinId` page:
    * I can click "Edit" to make permanent changes to pins I have posted.
      * So that I can fix any errors I make in my pins.

### Deleting Pins

* As a logged in user, I want to be able to delete my pins by clicking a Delete button associated with the pins anywhere that pins appears.
  * When I'm on the `/pins/:pinId` page:
    * I can click "Delete" to permanently delete a pin I have posted.
      * So that when I realize I shouldn't have publicly said something, I can easily remove it.

### Create Boards

* As a logged in user, I want to be able to post new Boards.
  * When I'm on the `/Boards` page:
    * I can create a new board
      * So my followers can see my boards and pins

### Viewing Boards

* As a logged in user, I want to be able to view all boards.
  * When I'm on the `/boards` page:
    * I can view the recently posted boards.

* As a logged in user, I want to be able to view a specific board, creator, and followers.
  * When I'm on the `/boards/:boardId` page:
    * I can view the content of the boards with a title / caption
    * I can follow the creator

### Updating Boards

* As a logged in user, I want to be able to edit my boards by clicking an Edit button associated with the boards.
  * When I'm on the `/boards/:boardId` page:
    * I can click "Edit" to make permanent changes to boards I have posted.
      * So that I can fix any errors I make in my boards.

### Deleting Boards

* As a logged in user, I want to be able to delete my boards by clicking a Delete button associated with the boards anywhere that boards appears.
  * When I'm on the `/boards/:boardId` page:
    * I can click "Delete" to permanently delete a board I have posted.
      * So that when I realize I shouldn't have publicly said something, I can easily remove it.

### Followers and following

* As a logged in user, I want to be able to view my followers `/followers` and who I am following `/following`.
* As a logged in user, I want to be able to view other users' followers `/users/:userId/followers`and who they are following `/users/:userId/following`.
* As a logged in user, I want to be able to follow and unfollow a user `/followers/:userId`.
