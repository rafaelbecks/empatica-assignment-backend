# App Downloads Graphql API

This is an Graphql API for querying app downloads data based on geo-location points. This API is build on top of [Yoga](https://github.com/prisma/graphql-yoga)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

+ NodeJS Installed
+ Nodemon
+ SQlite 3

### Getting Started

#### Environment

Install node modules (we recommend using yarn)

`yarn`

Copy .env.example to .env

`cp .env.example .env`

Setup your environment variables

    PORT=4000

#### Setting up database and generating data

This example uses a local SQlite database, for create the database with the tables run

    npx sequelize-cli db:migrate

For creating data run the following seeds

    npx sequelize-cli db:seed --seed src/seeders/20210127033545-demo-apps.js

And then for generating app downloads just run:

    npx sequelize-cli db:seed --seed src/seeders/20210127033551-demo-app-downloads.js

WIth that you generate 50 random app downloads, for changing the number change GENERATED_DATA_LENGTH on the same file

#### Running

+ Run dev server with ```yarn dev```
+ Open browser on http://localhost:4000


### Contributing

Using commitizen is **mandatory** to commit to this project.


