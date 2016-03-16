# CMS

Our content management system application is able to make new blogs and posts by
communicating with our MongoDB database. For our have three different models and
controllers (entries, pages, and users). In our pages controller we have a
dynamic query on the url params to signal when to index all pages or the pages
belonging only to the user. The Express api framework is used to save and
retrieve data, more on installation and routes is listed below.

## Routes

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |

### Controller Routes

| Verb   | URI Pattern            | Controller#Action    |
|--------|------------------------|----------------------|
| GET    | `/{controller}`        | `controller#index`   |
| GET    | `/{controller}/:id`    | `controller#show`    |
| POST   | `/{controller}`        | `controller#create`  |
| PATCH  | `/{controller}/:id`    | `controller#update`  |
| DELETE | `/{controller}/:id`    | `controller#destroy` |

** Pages controller has a custom dynamic route listener

## Front End

[Have a Look at the Front End](https://github.com/Insert-Squad-Name/group-project-front-end)

## ERD

![ERD](http://i.imgur.com/6SazDqy.jpg)

## Dependencies

Install with `npm install`.

-   [`express`](http://expressjs.com/)
-   [`mongoose`](http://mongoosejs.com/)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.
