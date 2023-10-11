# Update Card

Update card entry in the database. Not all fields are required. 

**URL** : `/api/card/:id/`

**Method** : `PUT `

` `
**Request Example(s)**:

* `PUT localhost:8000/api/card/1/`
  
```json
{
    "userId": 1,
    "title": "test Update",
    "description": "test Update Desccc",
    "status": "to DO"
}
``````



## Success Response

**Code** : `200 OK`

**Content:**

```json
{
    "message": "card updated"
}
```
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

**Condition** : If title contains only whitespaces.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Title cannot be empty"
}
```
<hr>

**Condition** : If description contains only whitespaces.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Description cannot be empty"
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


**Condition** : If given  card 'id' in url path does not exist in DB.

**Code** : `404 NOT FOUND`

**Content** :

```json
{
    "message": "The card does not exist. It may have already been deleted"
}
```