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
{
    [
    {
        "id": 1,
        "title": "Job Interview",
        "status": "To Do",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae ",
        "user": {
            "username": "Abigail Williams"
        },
        "createdDate": "October 10, 2023",
        "createdTime": "06:12"
    },
    {
        "id": 2,
        "title": "Job Interview",
        "status": "To Do",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro ",
        "user": {
            "username": "Bruno Mraz"
        },
        "createdDate": "October 10, 2023",
        "createdTime": "06:12"
    },
    {
        "id": 3,
        "title": "Job Interview",
        "status": "To Do",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae nesciunt explicabo earum nisi delectus rem. Vel adipisci mollitia voluptate quaerat eos officia omnis corrupti illo porro? Praesentium debitis harum voluptates est doloremque quaerat earum, fugiat, blanditiis necessitatibus perferendis ducimus. Suscipit ipsam blanditiis molestiae, assumenda quis voluptatem ad. Explicabo, porro hic. Dolores quod, sunt accusantium tempore illo iure eligendi nisi totam qui obcaecati excepturi eveniet, odio voluptatum ipsum fuga? Officiis tempore itaque nesciunt reprehenderit, quis distinctio odio quasi modi consectetur cupiditate minima facere.",
        "user": {
            "username": "Charlie Chaplin"
        },
        "createdDate": "October 10, 2023",
        "createdTime": "06:12"
    }
]
}
```
