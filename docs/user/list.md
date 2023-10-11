# List Cards

Returns all users inside the db. 

**URL** : `/api/users/`

**Method** : `GET`



**Request Example(s)**:

* `localhost:8000/api/users`


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "users": [
        {
            "id": 1,
            "username": "Abigail Williams",
            "email": "abigail@gmail.com",
            "createdAt": "2023-10-10T06:12:43.000Z",
            "updatedAt": "2023-10-10T06:12:43.000Z"
        },
        {
            "id": 2,
            "username": "Bruno Mraz",
            "email": "bruno@gmail.com",
            "createdAt": "2023-10-10T06:12:43.000Z",
            "updatedAt": "2023-10-10T06:12:43.000Z"
        },
        {
            "id": 3,
            "username": "Charlie Chaplin",
            "email": "charlie@gmail.com",
            "createdAt": "2023-10-10T06:12:43.000Z",
            "updatedAt": "2023-10-10T06:12:43.000Z"
        },
        {
            "id": 4,
            "username": "David Beckham",
            "email": "david@gmail.com",
            "createdAt": "2023-10-10T06:12:43.000Z",
            "updatedAt": "2023-10-10T06:12:43.000Z"
        },
        {
            "id": 5,
            "username": "Emma Watsons",
            "email": "emma@gmail.com",
            "createdAt": "2023-10-10T06:12:43.000Z",
            "updatedAt": "2023-10-10T06:12:43.000Z"
        }
    ]
}
```
