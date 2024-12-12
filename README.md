# Missing Error Handling in Express.js POST Request

This repository demonstrates a common error in Express.js applications: missing error handling for invalid user data in POST requests.  The bug showcases a scenario where the server accepts POST requests to create users but lacks validation and error handling for invalid input.

## Bug Description

The `bug.js` file contains an Express.js server that handles POST requests to `/users`.  It expects user data in the request body but lacks validation or error handling. If the request body is malformed or missing required fields, the server will either fail silently or crash, providing a poor user experience.

## Solution

The `bugSolution.js` file demonstrates a corrected version with improved error handling.  It validates the user data before processing it. If the data is invalid, it sends an appropriate error response to the client.