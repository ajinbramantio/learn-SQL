# Using SQLite

Table:

| id  | name   | email            |
| --- | ------ | ---------------- |
| 1   | Haidar | haidar@gmail.com |
| 2   | Hanif  | hanif@gmail.com  |
| 3   | Impact | impact@gmail.com |

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
