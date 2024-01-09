
SELECT 'CREATE DATABASE POSTGRES'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'POSTGRES');

-- CREATE TABLE users
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(120) NOT NULL,
  image_file VARCHAR(20) NOT NULL DEFAULT 'default.jpg',
  password VARCHAR(60) NOT NULL,
  posts VARCHAR(60) NULL,
  CONSTRAINT pk_users
    PRIMARY KEY(id)
);

INSERT INTO users (username, email, image_file, password)
VALUES ('Test Username', 'test@notvalid.com', 'default.jpg', 'password');
INSERT INTO users (username, email, image_file, password)
VALUES ('Test Username2', 'test2@notvalid.com', 'default.jpg', 'password');

-- CREATE TABLE posts
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id INT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(100) NOT NULL,
  date_posted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  content VARCHAR(1000) NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT pk_posts
    PRIMARY KEY(id),
  CONSTRAINT fk_users
    FOREIGN KEY(user_id) 
    REFERENCES users(id)
);

INSERT INTO posts (title, content, user_id)
VALUES ('Blog 1', 'First post content', 1);
INSERT INTO posts (title, content, user_id)
VALUES ('Blog 2', 'Second post content', 1);
INSERT INTO posts (title, content, user_id)
VALUES ('Blog 3', 'Third post content', 2);
