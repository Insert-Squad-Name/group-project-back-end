#!/bin/bash

curl --include --request POST http://localhost:3000/examples \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=L+apncDEz2ptz9M+KNUXsQ=="
  --data '{
    "text": "some text"
  }'
