CREATE TABLE User ( 
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL
);

-- INSERT INTO User (username, email, name)
-- VALUES ('dummyuser', 'dummyuser@example.com', 'Dummy User');

-- Daily Table
CREATE TABLE daily_snapshots (
    id INT PRIMARY KEY,
    user_id INT,
    snapshot_url VARCHAR(255),
    timestamp DATETIME
);

-- Weekly Table
CREATE TABLE weekly_snapshots (
    id INT PRIMARY KEY,
    user_id INT,
    snapshot_url VARCHAR(255),
    timestamp DATETIME
);

-- Monthly Table
CREATE TABLE monthly_snapshots (
    id INT PRIMARY KEY,
    user_id INT,
    snapshot_url VARCHAR(255),
    timestamp DATETIME
);

-- Annual Table
CREATE TABLE annual_snapshots (
    id INT PRIMARY KEY,
    user_id INT,
    snapshot_url VARCHAR(255),
    timestamp DATETIME
);