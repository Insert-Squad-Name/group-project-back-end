#!/bin/bash

curl --include --request POST http://localhost:3000/pages \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=EuyraCQhALS0DIkTjiA9og==" \
  --data '{
    "title": "My first page"
  }'
