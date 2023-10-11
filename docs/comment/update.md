# Update Comment

Update comment entry in the database.

**URL** : `/api/comment/:id/`

**Method** : `PUT `

**Request Example(s)**:

* `PUT localhost:8000/api/comment/5/`
  
```json
{
    "text":"test comment",
    "userId": 1
}
``````



## Success Response

**Code** : `200 OK`

**Content:**

```json
{
    "message": "comment updated"
}
```
## Error Response


**Condition** : If text is missing or contains only whitespaces.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Text is empty or missing "
}
```

<hr>

**Condition** : If given userId is not owner of the comment.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
    "message": "The given userId is not the owner of the comment."
}
```


**Condition** : If given  comment 'id' in url path does not exist in DB.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "Comment does not exist"
}
```