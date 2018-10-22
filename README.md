# Zoopla Developer test
Here is my take on the Zoopla Developer test

To install:
```
clone repo
cd app
npm install
```
then either
```
npm build
npm start
```
or
```
npm dev
```

To run tests in Jest:
```
npm test
```
Test results and code coverage can be viewed by opening
```
app/coverage/lcov-report/index.html
```

### Requirements notes
* search results are keyboard accessible via up and down arrow keys.  Currently it applies a class to the focussed result.
* search form autofocuses on load and is submittable via keyboard
* `N11` (or `n11`) is the only valid postcode to search on.  This checks against `area` attribute of the mock data.
 

## Personal notes
I spent about 12-14 hours on this total.  This was largely due to me choosing to try 
out a new framework - Next JS.  It was not the right tool for this job, as it turned 
out but I wanted to try to as I was considering using it for my personal site.

### Tests
Tests could improve slightly but I don't want this sucking up more time.  Variations 
of submissions are put through the Results page, which cover most logical routes.

### Other notes
This probably should have been done in either vanilla ES6 or with a simple React app 
and Express handling the routing.
