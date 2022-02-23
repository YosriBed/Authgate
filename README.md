# Authgate

An authentication interface


* Client:  [React.js](https://reactjs.org/)
* Server: [Node.js](https://nodejs.org/en/)
* Database: [Mongodb](https://www.mongodb.com/)


## Installation

### client
```
cp .env.example .env #don't forget to change the envrionment variables
npm install
npm start
```
### server
```
cd server/
cp .env.example .env #don't forget to change the envrionment variables
docker-compose up -d #a mongodb image
npm install
npm start
```
# Client

## Used Libraries

| Library | Description | Link |
| --- | --- | --- |
| React.js | For building UI | https://github.com/facebook/react/ |
| tailwindcss | CSS Framework | https://github.com/tailwindlabs/tailwindcss |
| redux-saga | state + action management | https://github.com/reduxjs/redux-toolkit |
| @redux/toolkit | Toolset for redux | https://github.com/reduxjs/redux-toolkit |
| @loadable/component | Code splitting (a bit overkill) | https://github.com/gregberge/loadable-components |
| @redux/toolkit | Redux utility library | https://github.com/reduxjs/redux-toolkit |
| Formik (+Yup) | Form management | https://github.com/jaredpalmer/formik |
| Yup | Data validation | https://github.com/jquense/yup |

# Server

## Used Libraries

| Library | Description | Link |
| --- | --- | --- |
| Node.js | APIs | https://expressjs.com/ |
| Mongoose | Mongodb Object modeling | https://github.com/Automattic/mongoose |
| Jest | for testing | https://github.com/facebook/jest |
| Passport-jwt | to manage json web tokens | https://github.com/mikenicholson/passport-jwt |
| Joi | data validation | https://github.com/sideway/joi |


## Contributing
Pull requests are welcome. 

## License
[ISC](https://www.isc.org/licenses/)