DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    profile_pic TEXT DEFAULT 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png',
    discord_tag VARCHAR(255) NOT NULL
);