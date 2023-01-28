# User-facing routes

## `/login`

### Log in page

This page displays a log in form

* `GET /login`
* `POST /login`

## `/signup`

This page displays a signup form.

### Sign up page

* `GET /signup`
* `POST /signup`

##  Discover feed
## `/home`

This page displays discover feed, as well as a navigation bar with login/signup or logout buttons.

* `GET /home`

## Profile

## `/users`

This page displays a users profile as well as their follwers and following list. If the logged in user owns the profile, this page also displays an update and delete button.


 * `GET /users/:userId/followers`
 * `GET /users/:userId/following`
 * `PUT /users/:userId`
 * `DELETE /users/:userId`

## Pins
## `/pins`

This page displays a form with which a logged in user can create a pin, as well as a navigation bar with login/signup or logout buttons.

  * `POST /pins`
  * `GET /pins`

## `/pin/:pinId`

This page displays an individual pin as well as a navigation bar with login/signup or logout buttons. If the logged in user owns the pin, this page also displays an update and delete button.

* `GET /pin/:pinId`
* `PUT /pin/:pinId`
* `DELETE /pin/:pinId`

## boards
## `/boards`

This page displays a form with which a logged in user can create a board, as well as a navigation bar with login/signup or logout buttons.

  * `POST /boards`
  * `GET /boards`

## `/boards/:boardId`

This page displays an individual board as well as a navigation bar with login/signup or logout buttons. If the logged in user owns the board, this page also displays an update and delete button.

* `GET /boards/:boardId`
* `PUT /boards/:boardId`
* `DELETE /boards/:boardId`

## Followers

## `/followers`

This page displays a users followers, add and delete followers buttons as well as a navigation bar with login/signup or logout buttons.

  * `GET /followers` current user viewing their followers
  * `POST /followers/:userId` add a follower
  * `DELETE /followers/:userId` delete a follower

## Following

## `/following`

This page displays a users following.

* `GET /following` current user viewing their following
