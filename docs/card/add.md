# Add Card

Create new card entry in the database. 

**URL** : `/api/card/`

**Method** : `POST `


**Request Example(s)**:

* `POST localhost:8000/api/card/`
  
```json
{
    "userId": 1,
    "title": "ทดสอบ 12345",
    "description":"desc1234567890"
}
``````



## Success Response

**Code** : `201 CREATED`

**Content:**

```json
{
    "message": "card created"
}
```
## Error Response

**Condition** : If some required fields are missing or contains only white spaces

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "One or more required fields are missing"
}
```
<hr>

**Condition** : If user of given 'userId' does not exist in db

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
     "message": "User does not exist" 
}
```