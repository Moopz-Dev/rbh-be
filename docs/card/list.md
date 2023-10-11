# List Cards

Return paginated cards response sorted by created date. 

**URL** : `/api/cards/`

**Method** : `GET`


**Request Query**:
* page : specifies page number 



**Request Example(s)**:

* `localhost:8000/api/cards`

* `localhost:8000/api/cards?page=2`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "id": 3,
        "title": "Job Interview",
        "status": "To Do",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus ",
        "user": {
            "username": "Charlie Chaplin"
        },
        "createdDate": "October 10, 2023",
        "createdTime": "06:12"
    },
    {
        "id": 4,
        "title": "test Update",
        "status": "To Do",
        "description": "test Update Desccc",
        "user": {
            "username": "David Beckham"
        },
        "createdDate": "October 10, 2023",
        "createdTime": "06:12"
    },
    {
        "id": 5,
        "title": "Job Interview",
        "status": "To Do",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus ",
        "user": {
            "username": "Emma Watsons"
        },
        "createdDate": "October 10, 2023",
        "createdTime": "06:12"
    }
]
```
