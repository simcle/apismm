
# BACKEND SERVER




## Deployment

[NodeJS v20](https://nodejs.org/en)

Ubah file .env_example menjadi .env


```bash
  npm install
  npm run server.js atau node server.js
```


## API Reference

### AUTH
#### User register

```http
  POST /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | User name |
| `email`| `string`| User email |
| `password` | `string` | User password |  

Example:
```javascript
// axios
const axios = require('axios');
let data = JSON.stringify({
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "password": "123456"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/auth/register',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

Response 
```javascript
// success
"OK"

// error
[
    {
        "type": "field",
        "value": "",
        "msg": "Invalid value",
        "path": "name",
        "location": "body"
    }
]
```

#### User login

```http
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. user email |
| `password`      | `string` | **Required**. user password |

Example:
```javascript
// axios
const axios = require('axios');
let data = JSON.stringify({
  "email": "johndoe@gmail.com",
  "password": "123456"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/auth/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

```
Response
```javascript
// success
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJqb2huZG9lQGdtYWlsLmNvbSIsImlhdCI6MTcxNzgxMjcxNH0.aDXLefAfUrRnC7K0eNmo5ZoVclQSIJmr1jcArwlccUs",
    "user": {
        "id": 4,
        "name": "John Doe",
        "email": "johndoe@gmail.com"
    }
}

// error
password salah
```




