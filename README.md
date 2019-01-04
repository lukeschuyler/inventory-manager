# Inventory Manager
API and web client revamp for old inventory project. Running as a multi-container Docker setup using docker-compose. API written with NodeJS/Express with Knex and Bookshelf using node:alpine, front end written in React with Redux also using node:alpine. Each being served/routed by an instance of the nginx docker image. Lastly, the db being used is an instance of the Postgres docker image.

## Using Docker
Only dev environment is set up for time being. From a machine running Docker, run `docker-compose up --build`. This will build the environment, including the node/express api, the React client, the nginx server/router, and the postgres instance. This will take a moment to finish.

## Database setup
Once built, for you must manually run migrations and seed the db (for now). In a new terminal instance, type `docker ps`. Copy the image hash for the api service, then run `docker exec -it <image hash> sh`. This will take you into the shell of the api,
from there run `knex migrate:latest` and then `knex seed:run`. You can then detach from the api shell instance.
