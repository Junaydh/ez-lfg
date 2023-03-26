TRUNCATE TABLE games RESTART IDENTITY CASCADE;

INSERT INTO games (name, game_logo, game_cover)
VALUES ('Valorant', 'https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png', 'https://m.media-amazon.com/images/M/MV5BODhkN2U1YzYtODQzZC00MTc5LTlmMmYtYjQ2ZGU2ZmM4YzJkXkEyXkFqcGdeQXVyMTE0MTc4MjU2._V1_FMjpg_UX1000_.jpg'),
('Fortnite', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png', 'https://s2.gaming-cdn.com/images/products/2500/orig-fallback-v1/fortnite-pc-game-epic-games-cover.jpg?v=1645021449'),
('League of Legends', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png', 'https://thumbnails.pcgamingwiki.com/4/40/League_of_Legends_-_cover.jpg/300px-League_of_Legends_-_cover.jpg'),
('Overwatch', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2048px-Overwatch_circle_logo.svg.png', 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg'),
('Apex Legends', 'https://logos-world.net/wp-content/uploads/2020/11/Apex-Legends-Emblem.png', 'https://cdn.mobygames.com/covers/7477029-apex-legends-playstation-4-front-cover.jpg'),
('Minecraft', 'https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png', 'https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg');