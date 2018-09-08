## Start
Database Port: 27017
Front-End Port: 3000
Back-End Port: 3001

### Dependencies
Some of them just add by hand.
```json
  "dependencies": {
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-scripts": "1.1.5",
    "axios": "^0.18.0",
    "mongodb": "^3.1.4",
    "mongoose": "^5.2.13",
    "express":"~4.16.3"
  },
```
* axio: `npm install axios --save` (This is for send AJAX request)
* mongoose: `npm install mongoose --save`

###### Start Database
```
mkdir -p ./db/data
mongod --dbpath ./db/data 
```
###### Start Back-End Server
`node ./router`
###### Start Front-End Server
`npm start`


