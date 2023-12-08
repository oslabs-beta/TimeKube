CREATE TABLE User ( 
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL
);

INSERT INTO User (username, email, name)
VALUES ('dummyuser', 'dummyuser@example.com', 'Dummy User');
