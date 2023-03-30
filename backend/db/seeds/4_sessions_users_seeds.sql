TRUNCATE TABLE sessions_users RESTART IDENTITY CASCADE;

INSERT INTO sessions_users (user_id, session_id)
VALUES (1, 1),
       (2, 1),
       (2, 2),
       (4, 4)
       (4, 2),
       (5, 5),
       (5, 3),
       (6, 12),
       (6, 6);
