# Add Comment

Create new comment entry in the database. 

**URL** : `/api/comment/`

**Method** : `POST `


**Request Example(s)**:

* `POST localhost:8000/api/comment/`
  
```json
{
    "userId": 1,
    "cardId": 3,
    "text":"texttexttext"
}
``````



## Success Response

**Code** : `201 CREATED`

**Content:**

```json
{
    "message": "comment created"
}
```
## Error Response

**Condition** : If some required fields are missing

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "One or more required fields are missing"
}
```
<hr>


**Condition** : If text contains only whitespaces.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Text cannot be empty"
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
<hr>



**Condition** : If card of given 'cardId' does not exist in db

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Card does not exist or has been previously deleted"
}
```