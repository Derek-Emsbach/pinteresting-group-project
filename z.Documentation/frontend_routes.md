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

##  Discover feed/ Splash/Home Page
## `/`

This page displays discover feed if user is logged in, as well as a navigation bar with login/signup or logout buttons. If the user is not logged in, they will be taken to a splash/home page.

* `GET /`

## Profile

## `/:username`

This page displays a users profile as well as their follwers and following list. If the logged in user owns the profile, this page also displays an update and delete button.


 * `GET /:username/followers`
 * `GET /:username/following`
 * `PUT /:username`
 * `DELETE /:username`

## Pins
## `/pins`

This page displays a form with which a logged in user can create a pin, as well as a navigation bar with login/signup or logout buttons.

  * `POST /pins`
  * `GET /pins`

## `/pin/:pinId`

This page displays an individual pin as well as a navigation bar with login/signup or logout buttons. If the logged in user owns the pin, this page also displays an update and delete button.

* `GET /pins/:pinId`
* `PUT /pins/:pinId`
* `DELETE /pins/:pinId`

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
  * `POST /followers/:username` add a follower
  * `DELETE /followers/:username` delete a follower

## Following

## `/following`

This page displays a users following.

* `GET /following` current user viewing their following
