#!/bin/bash

curl --include --request PATCH http://localhost:3000/pages/56e6de3ddb290b0f1e0df3e5 \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=RjAVl4D7DAsnwNtQ/6YyHA==" \
  --data '{
    "_entryId": ["56e6e11b25a321e02233f1e9","56e6deaddb290b0f1e0df3e6"]
  }'
