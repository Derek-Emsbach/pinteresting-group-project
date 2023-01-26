# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Profile
* A logged in user can create, view, or edit their profile.
  * `POST /api/users`
  * `GET /api/users`
  * `PUT /api/users/:userId`
  * `DELETE /api/users/:userId`
## Pins

* A logged in user can get, create, edit or delete a pin with visible confirmation without causing a refresh/redirect.

  * `POST /api/pins`
  * `GET /api/pins`
  * `PUT /api/pins/:pinId`
  * `DELETE /api/pins/:pinId`

  ## Boards

  * A logged in user can get, create, edit or delete a board with visible confirmation without causing a refresh/redirect.

  * `POST /api/boards`
  * `GET /api/boards`
  * `PUT /api/boards/:boardId`
  * `DELETE /api/boards/:boardId`

## Following/Followers
  * `GET /api/followers` current user viewing their followers
  * `GET /api/following` current user viewing their following
  * `GET /api/users/:userId/followers` view anothers user's followers list
  * `GET /api/users/:userId/following` view another user's following list

  * `POST /api/followers/:userId` add a follower
  * `DELETE /api/followers/:userId` delete a follower


##  Discover feed on home page
 * `GET /api/home`
