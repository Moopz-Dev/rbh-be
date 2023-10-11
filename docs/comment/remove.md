# Remove Comment

Remove comment from the database.  

**URL** : `/api/comment/:id/`

**Method** : `DELETE `

**Request Example(s)**:

* `DELETE localhost:8000/api/comment/1/`
```json
{
    "userId": 1
}
 ```


## Success Response

**Code** : `204 NO CONTENT`


## Error Response


**Condition** : If given  comment 'id' in url path does not exist in DB.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "Comment does not exist"
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