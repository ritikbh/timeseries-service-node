<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# timeseries-service

The timeseries-service is an API service that implements the [TrendMiner Connector API](https://developer.trendminer.com/connector-api/) to provide time series data.
The application has four API endpoints that provide relevant time series data to TrendMiner.

#### API Endpoints:

* GET /api/version
* GET /api/database
* GET /api/v2/tags
* GET /api/v2/tags/indexvalues

This project uses the NestJS framework.
If you want to learn more about NestJS, you can visit its website: https://docs.nestjs.com/first-steps


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
