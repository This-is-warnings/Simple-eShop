CREATE TABLE products
(
   id               INT             PRIMARY KEY     AUTO_INCREMENT,
   name             VARCHAR(100)    NOT NULL,
   description      TEXT            NOT NULL,
   price            MONEY,
   last_update      TIMESTAMP,
   image            VARCHAR(256),
   amount           INT             NOT NULL,
   average_rating   NUMERIC,
   deleted_at       TIMESTAMP
);

CREATE TABLE users
(
   id               INT             PRIMARY KEY     AUTO_INCREMENT,
   name             VARCHAR(100)    NOT NULL        UNIQUE,
   email            VARCHAR(100)    NOT NULL        UNIQUE,
   login            VARCHAR(100)    NOT NULL        UNIQUE,
   password         VARCHAR(100)    NOT NULL,
   deleted_at       TIMESTAMP
);

CREATE TABLE favorites
(
   id               INT             PRIMARY KEY     AUTO_INCREMENT,
   user_id          INT             NOT NULL,
   product_id       INT             NOT NULL,

   --FOREIGN KEY (user_id) REFERENCES users(id),
   --FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE marks
(
   id               INT             PRIMARY KEY     AUTO_INCREMENT,
   user_id          INT             NOT NULL,
   product_id       INT             NOT NULL,
   value            INT             NOT NULL,

   --FOREIGN KEY (user_id) REFERENCES users(id),
   --FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE delete_request
(
   id               INT             PRIMARY KEY     AUTO_INCREMENT,
   user_id          INT             NOT NULL,
   create_at        TIMESTAMP       NOT NULL,

   --FOREIGN KEY (user_id) REFERENCES users(id),
);

CREATE TABLE user_roles
(
   id               INT             PRIMARY KEY     AUTO_INCREMENT,
   role_id          INT             NOT NULL,
   user_id          INT             NOT NULL,

   --FOREIGN KEY (user_id) REFERENCES users(id),
   --FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE roles
(
   id               INT             PRIMARY KEY     AUTO_INCREMENT,
   name             VARCHAR(100)    NOT NULL        UNIQUE
);

--favorites
ALTER TABLE favorites ADD FOREIGN KEY(user_id) REFERENCES users(id);
ALTER TABLE favorites ADD FOREIGN KEY(product_id) REFERENCES products(id);

--marks
ALTER TABLE marks ADD FOREIGN KEY(user_id) REFERENCES users(id);
ALTER TABLE marks ADD FOREIGN KEY(product_id) REFERENCES products(id);

--delete_request
ALTER TABLE delete_request ADD FOREIGN KEY(user_id) REFERENCES users(id);

--user_roles
ALTER TABLE user_roles ADD FOREIGN KEY(user_id) REFERENCES users(id);
ALTER TABLE user_roles ADD FOREIGN KEY(role_id) REFERENCES roles(id);

