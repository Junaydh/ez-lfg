TRUNCATE TABLE users RESTART IDENTITY CASCADE;

INSERT INTO users (username, password, email, profile_pic, discord_tag)
VALUES ('Shroud', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'shroudyrowdy@pro.com', 'https://liquipedia.net/commons/images/6/64/Shroud_at_PGL_Major_Krakow_2017.jpg', 'shroud#3452'),
('Ninja', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'ninja@mixer.com', 'https://m.media-amazon.com/images/M/MV5BMTUxODI1MzMtYzU5MC00YTNiLWIzNDMtYTJhZjAwY2EzNzkzXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY1200_CR280,0,630,1200_AL_.jpg', 'Ninja#1234'),
('PewDiePie', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'pewdiepie@gmail.com', 'https://static.wikia.nocookie.net/youtube/images/2/24/Felix_Kjellberg.jpg/revision/latest?cb=20230222170757', 'PewDiePie#7890'),
('Faker', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'faker@t1.com', 'https://liquipedia.net/commons/images/thumb/d/d6/Faker_Worlds_2022_Image_2.jpg/600px-Faker_Worlds_2022_Image_2.jpg', 'Faker#9999'),
('Sodapoppin', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'sodapoppin@twitch.tv', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Sodapoppin_scavenger_hunt_2021.jpg', 'Sodapoppin#2468'),
('Summit1G', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'summit1g@twitch.tv', 'https://pbs.twimg.com/profile_images/1253450626500923393/k3QBhmHk_400x400.jpg', 'Summit1G#3579'),
('LionelMessi', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'messi@fcb.com', 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', 'Messi#1010'),
('LeBronJames', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'lebronjames@nba.com', 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg', 'LeBronJames#2020'),
('CristianoRonaldo', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'ronaldo@juventus.com', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg', 'Ronaldo#3030');
