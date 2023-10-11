# RBH - BE - PreTest

This documentation is written for a simple To-Do-List API in accordance to Lo-FI requirement. 
* API server uses port `8000`. 
* DB uses port `3306`

## How to start service

1. Pull this repository to your local machine.
2. Open terminal in the project's directory.
3. Run  `docker compose up` inside the terminal.


## API Endpoints

### Card related

* [List Cards](docs/card/list.md) : `GET /api/cards/`
* [Get One Card](docs/card/get.md) : `GET /api/card/:id/`
* [Add Card](docs/card/add.md) : `POST /api/card/`
* [Update Card](docs/card/update.md) : `PUT /api/card/:id/`
* [Remove Card](docs/card/remove.md) : `DELETE /api/card/:id/`

### Comment related

* [Add Comment](docs/comment/add.md) : `POST /api/comment/`
* [Update Comment](docs/comment/update.md) : `PUT /api/comment/:id/`
* [Remove Comment](docs/comment/remove.md) : `DELETE /api/comment/:id/`
  
### User related

* [List Users](docs/card/list.md) : `GET /api/users/`
* [Add User](docs/card/add.md) : `POST /api/user/`
