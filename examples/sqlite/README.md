# Using SQLite

Table:

| id  | name      | email               |
| --- | --------- | ------------------- |
| 1   | Fadhila   | fadhila@gmail.com   |
| 2   | Fajrin    | fajrin@gmail.com    |
| 3   | Bramantio | bramantio@gmail.com |

SQL Create Table:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);
```

## Insert Data

```sql
INSERT INTO users (name, email)
VALUES
('Fadhila', 'fadhila@gmail.com'),
('Fajrin', 'fajrin@gmail.com'),
('Bramantio', 'bramantio@gmail.com');
```
