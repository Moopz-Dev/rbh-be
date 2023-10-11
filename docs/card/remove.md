# Remove Card

Remove card and its comments entries from the database.  

**URL** : `/api/card/:id/`

**Method** : `DELETE `

` `
**Request Example(s)**:

* `DELETE localhost:8000/api/card/1/`
```json
{
    "userId": 1
}
 ```


## Success Response

**Code** : `204 NO CONTENT`


## Error Response

**Condition** : If status is not in `TO_DO` , `IN_PROGRESS`, or `DONE`.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Invalid status"
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


**Condition** : If given  card 'id' in url path does not exist in DB.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "The card does not exist. It may have already been deleted"
}
```
<hr>


**Condition** : If given userId is not owner of the card.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
    "message": "The given userId is not the owner of the card."
}
```