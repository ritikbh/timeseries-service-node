## Support for retrieving tag metadata in `timeseries-service`

We would like to provide industrial analytics to our users using a third party product called TrendMiner.
To enable this feature we need to implement an API to provide data to the third party. One of the required services must return tag metadata.
Our [`timeseries-service`](https://github.com/YaraCG/timeseries-service) is the API service that implements these endpoints.

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

### Example Response

```json
[
  {
    "Name":"React5_temp001",
    "Description":"Reactor 5 - Cooling water temperature",
    "Units":"C",
    "Type":"ANALOG"
  },
  {
    "Name":"React5_press",
    "Description":"Reactor 5 - Top pressure",
    "Units":"",
    "Type":"ANALOG"
  },
  {
    "Name":"React5_phas",
    "Description":"Reactor 5 - Production Phases",
    "Units":"",
    "Type":"STRING"
  }
]
```
## Your challange
Build a REST API service that returns a list of tag metadata based on the documentation above.


### Notes about the implementation
- The responses specified above is the minimum required responses needed in the implementation. If you decide to implement additional responses (e.g. 4xx client errors and/or 5xx server errors) you are welcome to do so.
- Tests and updating the `README` to describe the functionality are expected.

### How to submit your solution
- Do not fork the timeseries-service repository on GitHub or submit a pull request directly, as that would make your solution public for others to see. Instead, clone the repo and work locally on it.
- When done, squash your work into a single commit and use `git format-patch` to generate a patch file. Email the patch file to us as your work sample submission. If you prefer to provide a GitHub's private gist or do your work in a private repo and add us to it, that's also totally fine

## Built with

- node 16
- [Nestjs](https://nestjs.com/)
- Jest 


## Getting started

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


# Good luck!