#!/bin/bash

curl --include --request POST http://localhost:3000/entries \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=azi6hl7AawqiNpWVajJCLA==" \
  --data '{
    "content": {
      "title": "First Blog entry",
      "body": "Look at this fucking blog entry"
    }
  }'
