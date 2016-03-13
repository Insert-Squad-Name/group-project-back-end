#!/bin/bash

curl --include --request PATCH http://localhost:3000/entries/56e5c7872d102efe3356ab00 \
  --header "Authorization: Token token=azi6hl7AawqiNpWVajJCLA==" \
  --header "Content-Type: application/json" \
  --data '{
    "content": {
      "title": "Some different shit",
      "body": "some other shittttttt"
    }
  }'
