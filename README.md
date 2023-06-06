### Request

#### Endpoint
```text
GET /api/v2/tags
```
#### Parameters

Name | Type | Required| Description | Schema
------------ | ------------- | ------------- | ------------- | ------------- |  
historianName |Query | Yes | The name of the historian to list tags of. | string

### Response

HTTP Code | Description | Required | Schema
------------ | ------------- | ------------- | ------------- |  
200 | OK | Yes | Array of TagDetails | 
500 | Server Error | Yes | SystemException |

#### TagDetails

Name | Required | Description | Schema
------------ | ------------- | ------------- |  ------------- | 
Description | Yes | The description of the tag | string |
Name | Yes | The name of the tag | string |
Type | Yes | The tag type | enum (ANALOG, DIGITAL, DISCRETE, STRING) |
Units | Yes | The unit the tag belongs to | string |


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
