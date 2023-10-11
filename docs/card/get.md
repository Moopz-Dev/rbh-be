# Get One Card 

Return Card of the given id.

**URL** : `/api/card/:id/`

**Method** : `GET `


**Request Example(s)**:

* `localhost:8000/api/card/4`


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 4,
    "title": "Job Interview",
    "status": "To Do",
    "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae nesciunt explicabo earum nisi delectus rem. Vel adipisci mollitia voluptate quaerat eos officia omnis corrupti illo porro? Praesentium debitis harum voluptates est doloremque quaerat earum, fugiat, blanditiis necessitatibus perferendis ducimus. Suscipit ipsam blanditiis molestiae, assumenda quis voluptatem ad. Explicabo, porro hic. Dolores quod, sunt accusantium tempore illo iure eligendi nisi totam qui obcaecati excepturi eveniet, odio voluptatum ipsum fuga? Officiis tempore itaque nesciunt reprehenderit, quis distinctio odio quasi modi consectetur cupiditate minima facere.",
    "user": {
        "username": "David Beckham",
        "email": "david@gmail.com"
    },
    "comment": [
        {
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "user": {
                "username": "Emma Watsons"
            },
            "createdDate": "October 10, 2023",
            "createdTime": "06:12"
        },
        {
            "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            "user": {
                "username": "Abigail Williams"
            },
            "createdDate": "October 10, 2023",
            "createdTime": "06:12"
        }
    ],
    "createdDate": "October 10, 2023",
    "createdTime": "06:12"
}
```
## Error Response

**Condition** : If given 'id' does not exist in DB.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "The card does not exist. It may have already been deleted"
}
```