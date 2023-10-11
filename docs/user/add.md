# Add User

Create new user entry in the database. 

**URL** : `/api/user/`

**Method** : `POST `


**Request Example(s)**:

* `POST localhost:8000/api/comment/`
  
```json
{
    "username": "Giraffe Williams",
    "email": "giraffe@gmail.com"
}
``````



## Success Response

**Code** : `201 CREATED`

**Content:**

```json
{
    "message": "User created"
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

**Condition** : If user name already taken

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "This username is already taken"
}
```
<hr>

**Condition** : If Invalid Email Format

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "Invalid Email Format."
}
```
<hr>
**Condition** : If email is already in use

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "message": "this email is already in use"
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