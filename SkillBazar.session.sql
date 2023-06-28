

--@block

  INSERT INTO Users(
             email,passwordHash
         )
         VALUES(
             'email',
             'passwordHash'
         )


--@block

INSERT INTO `Users`(
    email,passwordHash
)
VALUES(
    "Hello@gmail.com",
    "1234hash"
)

--@block
SELECT email FROM Users
WHERE email = 'email';


--@block 
DROP TABLE Users
