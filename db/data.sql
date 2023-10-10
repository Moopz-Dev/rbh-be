DROP DATABASE IF EXISTS robinhood;

CREATE DATABASE robinhood;

USE robinhood;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id int NOT NULL,
    title VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'To Do',
    description VARCHAR(2000) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id int NOT NULL,
    card_id int NOT NULL,
    text VARCHAR(200) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (card_id) REFERENCES cards(id),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO
    users (username, email)
VALUES
    ('Abigail Williams', 'abigail@gmail.com'),
    ('Bruno Mraz', 'bruno@gmail.com'),
    ('Charlie Chaplin', 'charlie@gmail.com'),
    ('David Beckham', 'david@gmail.com'),
    ('Emma Watsons', 'emma@gmail.com');

INSERT INTO
    cards (title, status, description, user_id)
VALUES
    (
        'Job Interview',
        'To Do',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae nesciunt explicabo earum nisi delectus rem. Vel adipisci mollitia voluptate quaerat eos officia omnis corrupti illo porro? Praesentium debitis harum voluptates est doloremque quaerat earum, fugiat, blanditiis necessitatibus perferendis ducimus. Suscipit ipsam blanditiis molestiae, assumenda quis voluptatem ad. Explicabo, porro hic. Dolores quod, sunt accusantium tempore illo iure eligendi nisi totam qui obcaecati excepturi eveniet, odio voluptatum ipsum fuga? Officiis tempore itaque nesciunt reprehenderit, quis distinctio odio quasi modi consectetur cupiditate minima facere.',
        1
    ),
    (
        'Job Interview',
        'To Do',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae nesciunt explicabo earum nisi delectus rem. Vel adipisci mollitia voluptate quaerat eos officia omnis corrupti illo porro? Praesentium debitis harum voluptates est doloremque quaerat earum, fugiat, blanditiis necessitatibus perferendis ducimus. Suscipit ipsam blanditiis molestiae, assumenda quis voluptatem ad. Explicabo, porro hic. Dolores quod, sunt accusantium tempore illo iure eligendi nisi totam qui obcaecati excepturi eveniet, odio voluptatum ipsum fuga? Officiis tempore itaque nesciunt reprehenderit, quis distinctio odio quasi modi consectetur cupiditate minima facere.',
        2
    ),
    (
        'Job Interview',
        'To Do',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae nesciunt explicabo earum nisi delectus rem. Vel adipisci mollitia voluptate quaerat eos officia omnis corrupti illo porro? Praesentium debitis harum voluptates est doloremque quaerat earum, fugiat, blanditiis necessitatibus perferendis ducimus. Suscipit ipsam blanditiis molestiae, assumenda quis voluptatem ad. Explicabo, porro hic. Dolores quod, sunt accusantium tempore illo iure eligendi nisi totam qui obcaecati excepturi eveniet, odio voluptatum ipsum fuga? Officiis tempore itaque nesciunt reprehenderit, quis distinctio odio quasi modi consectetur cupiditate minima facere.',
        3
    ),
    (
        'Job Interview',
        'To Do',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae nesciunt explicabo earum nisi delectus rem. Vel adipisci mollitia voluptate quaerat eos officia omnis corrupti illo porro? Praesentium debitis harum voluptates est doloremque quaerat earum, fugiat, blanditiis necessitatibus perferendis ducimus. Suscipit ipsam blanditiis molestiae, assumenda quis voluptatem ad. Explicabo, porro hic. Dolores quod, sunt accusantium tempore illo iure eligendi nisi totam qui obcaecati excepturi eveniet, odio voluptatum ipsum fuga? Officiis tempore itaque nesciunt reprehenderit, quis distinctio odio quasi modi consectetur cupiditate minima facere.',
        4
    ),
    (
        'Job Interview',
        'To Do',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae dolorem quam repellendus dicta vel assumenda, voluptates aliquam magni culpa repudiandae porro aspernatur quaerat, vitae unde beatae nesciunt explicabo earum nisi delectus rem. Vel adipisci mollitia voluptate quaerat eos officia omnis corrupti illo porro? Praesentium debitis harum voluptates est doloremque quaerat earum, fugiat, blanditiis necessitatibus perferendis ducimus. Suscipit ipsam blanditiis molestiae, assumenda quis voluptatem ad. Explicabo, porro hic. Dolores quod, sunt accusantium tempore illo iure eligendi nisi totam qui obcaecati excepturi eveniet, odio voluptatum ipsum fuga? Officiis tempore itaque nesciunt reprehenderit, quis distinctio odio quasi modi consectetur cupiditate minima facere.',
        5
    );

INSERT INTO
    comments (text, user_id, card_id)
VALUES
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        1,
        3
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        2,
        5
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        4,
        1
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        2,
        1
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        5,
        4
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        3,
        5
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        2,
        3
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        1,
        4
    ),
    (
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        5,
        1
    );