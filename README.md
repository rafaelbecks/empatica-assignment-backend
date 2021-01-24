# App Downloads Graphql API

This is an Graphql API for querying app downloads data based on geo-location points. This API is build on top of [Yoga](https://github.com/prisma/graphql-yoga)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

+ NodeJS Installed
+ Nodemon
+ Docker and Docker Compose

### Getting Started

#### Environment

Up docker container for mongo

    docker-compose up -d

Install node modules (we recommend using yarn)

`yarn`

Copy .env.example to .env

`cp .env.example .env`

Setup your environment variables

    PORT=4000
    MONGO_DB_USER=
    MONGO_DB_NAME=
    MONGO_DB_PASSWORD=

#### Running

+ Run dev server with ```yarn dev```
+ Open browser on http://localhost:4000


### Contributing

Using commitizen is **mandatory** to commit to this project.


