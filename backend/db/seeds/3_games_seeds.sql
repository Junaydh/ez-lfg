TRUNCATE TABLE games RESTART IDENTITY CASCADE;

INSERT INTO games (name, game_logo, game_cover)
VALUES ('Valorant', 'https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png', 'https://m.media-amazon.com/images/M/MV5BODhkN2U1YzYtODQzZC00MTc5LTlmMmYtYjQ2ZGU2ZmM4YzJkXkEyXkFqcGdeQXVyMTE0MTc4MjU2._V1_FMjpg_UX1000_.jpg'),
('Fortnite', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png', 'https://s2.gaming-cdn.com/images/products/2500/orig-fallback-v1/fortnite-pc-game-epic-games-cover.jpg?v=1645021449'),
('League of Legends', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png', 'https://thumbnails.pcgamingwiki.com/4/40/League_of_Legends_-_cover.jpg/300px-League_of_Legends_-_cover.jpg'),
('Overwatch', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/2048px-Overwatch_circle_logo.svg.png', 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg'),
('Apex Legends', 'https://logos-world.net/wp-content/uploads/2020/11/Apex-Legends-Emblem.png', 'https://cdn.mobygames.com/covers/7477029-apex-legends-playstation-4-front-cover.jpg'),
('Minecraft', 'https://cdn.icon-icons.com/icons2/2699/PNG/512/minecraft_logo_icon_168974.png', 'https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg'),
('Rocket League', 'https://scontent.fyvr1-1.fna.fbcdn.net/v/t1.6435-9/119288136_2839729106248534_2756344002394019023_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=JauMqM3kli8AX9Nsg7_&_nc_ht=scontent.fyvr1-1.fna&oh=00_AfBTjGJSw-6T-P3dl_q5ouNP6ZP4c-J8SDSuHWrTErw9LQ&oe=644BCF4F')
-- ('Call of Duty: Modern Warfare', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Modern_Warfare_cover_art.jpg/220px-Modern_Warfare_cover_art.jpg', 'https://cdn.mos.cms.futurecdn.net/Pz6fj8WsoSdhSvD9X9GRfS.jpg'),
-- ('Rainbow Six Siege', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rainbow_Six_Siege_logo.png/240px-Rainbow_Six_Siege_logo.png', 'https://assets1.ignimgs.com/thumbs/userUploaded/2019/11/4/tom-clancys-rainbow-six-siege-box-art-ps4--1572907334849_1280w.jpg'),
-- ('World of Warcraft', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/WoW_icon.svg/240px-WoW_icon.svg.png', 'https://vignette.wikia.nocookie.net/wowwiki/images/8/83/WoW_Box_Art1.jpg/revision/latest?cb=20090205032123'),
-- ('Rocket League', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Rocket_League_cover_art.jpg/220px-Rocket_League_cover_art.jpg', 'https://cdn.mos.cms.futurecdn.net/3V2KjFgy8EnyTBbTVgWyWE.jpg'),
-- ('Counter-Strike: Global Offensive', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/CS-GO_Logo.svg/1200px-CS-GO_Logo.svg.png', 'https://cdn-products.eneba.com/resized-products/nZjTtJlEADTf9XJKPlTtJB8sOEL1tLn0cbQ2DLYq3hM_390x400_1x-0.jpeg'),
-- ('Genshin Impact', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Genshin_Impact_logo.svg/1200px-Genshin_Impact_logo.svg.png', 'https://upload.wikimedia.org/wikipedia/en/b/b4/Genshin_Impact_cover_art.jpg'),('Grand Theft Auto V', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png', 'https://cdn-products.eneba.com/resized-products/6ZcY0sf81evwLmM0xS26Fm0ku6UomYYglUn4h4G4fTk_390x400_1x-0.jpeg'),
-- ('Destiny 2', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Destiny_2_key_art.jpg/220px-Destiny_2_key_art.jpg', 'https://www.gamersdecide.com/sites/default/files/authors/u14863/destiny%202%20cover.jpg'),
-- ('The Witcher 3: Wild Hunt', 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg', 'https://i.redd.it/bm6sl7io6chz.jpg'),
-- ('Assassin''s Creed Valhalla', 'https://upload.wikimedia.org/wikipedia/en/1/1b/Assassin%27s_Creed_Valhalla_cover_art.jpg', 'https://cdn1.dotesports.com/wp-content/uploads/2020/07/01121408/assassins-creed-valhalla-preorder.jpg'),
-- ('Death Stranding', 'https://upload.wikimedia.org/wikipedia/en/5/5c/Death_Stranding_box_art.jpg', 'https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/12/death-stranding-keyart.jpg.adapt.crop1x1.767p.jpg'),
-- ('Horizon Zero Dawn', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Horizon_Zero_Dawn.jpg/220px-Horizon_Zero_Dawn.jpg', 'https://www.gamersdecide.com/sites/default/files/authors/u14863/horizon%20zero%20dawn%20cover.jpg'),
-- ('Red Dead Redemption 2', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg', 'https://cdn.mos.cms.futurecdn.net/SjALURtrcHgPWraJZXp7vf.jpg'),
-- ('FIFA 22', 'https://upload.wikimedia.org/wikipedia/en/1/10/FIFA_22_Standard_Edition_Cover.jpg', 'https://m.media-amazon.com/images/I/8101cLVa1OS.jpg'),
-- ('NBA 2K22', 'https://upload.wikimedia.org/wikipedia/en/9/9d/NBA_2K22_Cover.jpg', 'https://cdn.vox-cdn.com/thumbor/Zk0q5qBxyNN8XbKxhR0RxtbYpPs=/0x0:1280x720/1200x800/filters:focal(494x234:690x430)/cdn.vox-cdn.com/uploads/chorus_image/image/69807705/NBA_2K22_Cover.0.png'),
-- ('Madden NFL 22', 'https://upload.wikimedia.org/wikipedia/en/4/4e/Madden_NFL_22.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81NCwOgb6uL._AC_SY741_.jpg'),('World of Tanks', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/World_of_Tanks_logo_2021.svg/1200px-World_of_Tanks_logo_2021.svg.png', 'https://www.mobygames.com/images/shots/l/430198-world-of-tanks-windows-screenshot-a-tank-in-an-open-field.png'),
-- ('Among Us', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Among_Us_logo.svg/1024px-Among_Us_logo.svg.png', 'https://i.ytimg.com/vi/8kx2LMTvPzE/maxresdefault.jpg'),
-- ('Sea of Thieves', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Sea_of_Thieves_logo.svg/1200px-Sea_of_Thieves_logo.svg.png', 'https://i.ytimg.com/vi/GvZ7GJQrLm8/maxresdefault.jpg'),
-- ('Among Trees', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Among_Trees_logo.png/220px-Among_Trees_logo.png', 'https://www.gamepressure.com/i/articles/38394/Among-Trees-Preview-1.jpg'),
-- ('Cyberpunk 2077', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg', 'https://cdn.mos.cms.futurecdn.net/5GN5Yh7ogJ5gn5PF5z5eAv.jpg'),
-- ('Phasmophobia', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Phasmophobia_cover_art.jpg/220px-Phasmophobia_cover_art.jpg', 'https://cdn-products.eneba.com/resized-products/X9eWRrB2rj1Hr5U6zC1UP-_aDw0J0jA2j2Zf9lLNY0g_390x400_1x-0.jpeg'),
-- ('Dota 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dota_2_%28Steam_logo%29.png/240px-Dota_2_%28Steam_logo%29.png', 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1641037989'),
-- ('Halo Infinite', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Halo_infinite_logo.svg/1200px-Halo_infinite_logo.svg.png', 'https://cdn.mos.cms.futurecdn.net/yHwrM7mKZZPgiCAxoaQc6J.jpg'),
-- ('Monster Hunter: Rise', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Monster_Hunter_Rise_cover_art.jpg/220px-Monster_Hunter_Rise_cover_art.jpg', 'https://cdn.gamer-network.net/2021/usgamer/Monster-Hunter-Rise-2.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/80/monster-hunter-rise-2.jpg'),
-- ('Nioh 2', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Nioh_2_cover_art.jpg/220px-Nioh_2_cover_art.jpg', 'https://static.wikia.nocookie.net/nioh_gamepedia_en/images/7/7c/Nioh2Cover.jpg/revision/latest/scale-to-width-down/500?cb=20200316180414'),
-- ('Code Vein', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Code_Vein_cover_art.jpg/220px-Code_Vein_cover_art.jpg', 'https://i.ytimg.com/vi/fA0wR_LPFgA/maxresdefault.jpg'),
-- ('Dark Souls Remastered', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Dark_Souls_Remastered.jpg/220px-Dark_Souls_Remastered.jpg', 'https://i.ytimg.com/vi/8RW9-ly6Izg/maxresdefault.jpg'),
-- ('Demon''s Souls (2020)', 'https://upload.wikimedia.org/wikipedia/en/3/33/Demon%27s_Souls_cover_art.jpg', 'https://cdn.mos.cms.futurecdn.net/tKjCFnJTMoT2QoLbXsFEtD-1200-80.jpg'),
-- ('Bloodborne', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Bloodborne_cover_art.jpg/220px-Bloodborne_cover_art.jpg', 'https://i.ytimg.com/vi/mY-3ZPJ6wZg/maxresdefault.jpg'),
-- ('Overwatch 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Overwatch_2_logo.svg/220px-Overwatch_2_logo.svg.png', 'https://cdn.vox-cdn.com/thumbor/XX2sPEsX9_vayWdKjYvAbLtRKLM=/0x0:1920x1080/920x613/filters:focal(814x20:1126x332):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70290786/ow2.0.png'),
--  ('Destiny', 'https://1000logos.net/wp-content/uploads/2021/05/Destiny-Emblem.jpg', 'https://m.media-amazon.com/images/I/81YYrENhTlL.jpg'),
-- ('Tom Clancy''s Splinter Cell: Blacklist', 'https://1000logos.net/wp-content/uploads/2021/06/Splinter-Cell-Logo.png', 'https://m.media-amazon.com/images/I/61tA5q3E5NL.jpg'),
-- ('Tom Clancy''s Splinter Cell: Conviction', 'https://1000logos.net/wp-content/uploads/2021/06/Splinter-Cell-Logo.png', 'https://m.media-amazon.com/images/I/91rsG+tSlKL.jpg'),
-- ('Tom Clancy''s Splinter Cell: Chaos Theory', 'https://1000logos.net/wp-content/uploads/2021/06/Splinter-Cell-Logo.png', 'https://m.media-amazon.com/images/I/81UDQWl3rrL.jpg'),
-- ('Tom Clancy''s Splinter Cell: Double Agent', 'https://1000logos.net/wp-content/uploads/2021/06/Splinter-Cell-Logo.png', 'https://m.media-amazon.com/images/I/71KjZ9T6TLL.jpg'),
-- ('Tom Clancy''s Splinter Cell (2002)', 'https://1000logos.net/wp-content/uploads/2021/06/Splinter-Cell-Logo.png', 'https://m.media-amazon.com/images/I/61hW0G8Ou-L.jpg'),
-- ('Far Cry 5', 'https://1000logos.net/wp-content/uploads/2020/09/Far-Cry-Logo.png', 'https://m.media-amazon.com/images/I/71qW8VyeaTL.jpg'),
-- ('Far Cry 6', 'https://1000logos.net/wp-content/uploads/2021/07/Far-Cry-6-Logo.png', 'https://m.media-amazon.com/images/I/81e+t1ODdPL.jpg'),
-- ('Watch Dogs 2', 'https://1000logos.net/wp-content/uploads/2021/06/Watch-Dogs-Logo.png', 'https://m.media-amazon.com/images/I/71lka01d+uL.jpg'),
-- ('Watch Dogs: Legion', 'https://1000logos.net/wp-content/uploads/2020/11/Watch-Dogs-Legion-Logo.png', 'https://m.media-amazon.com/images/I/81CJg0hA2-L.jpg');
