# sampleApp
this app accepts a POST request to the route "/test", which accepts one argument "string_to_cut"
it returns a JSON object with the key "return_string" and a string containing every third letter from the original string
## How to use
- start app: `node app.js`
- send post request: `curl -X POST http://localhost:3000/test -d'{"string_to_cut":"HeyEverybody"}' -H 'Content-Type: application/json'`
