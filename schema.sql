
DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;
CREATE TABLE Wishes(
id INT NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY(id)
);
INSERT INTO wishes(wish) VALUES ("sandwich"), ("immediately know all coding languages");