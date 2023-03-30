TRUNCATE TABLE users RESTART IDENTITY CASCADE;

INSERT INTO users (username, password, email, profile_pic, discord_tag)
VALUES ('Shroud', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'shroudyrowdy@pro.com', 'https://cdn.oneesports.gg/cdn-data/2022/08/Valorant_Sentinels_Shroud_VCTNALCQ.jpg', 'shroud#3452'),
('Ninja', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'ninja@mixer.com', 'https://m.media-amazon.com/images/M/MV5BMTUxODI1MzMtYzU5MC00YTNiLWIzNDMtYTJhZjAwY2EzNzkzXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY1200_CR280,0,630,1200_AL_.jpg', 'Ninja#1234'),
('PewDiePie', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'pewdiepie@gmail.com', 'https://variety.com/wp-content/uploads/2019/12/pewdiepie.png', 'PewDiePie#7890'),
('Faker', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'faker@t1.com', 'https://img.redbull.com/images/c_crop,x_901,y_0,h_2130,w_1597/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2020/12/16/c61kpj1fxidgnwiqgz2h/faker-t1-main', 'Faker#9999'),
('Sodapoppin', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'sodapoppin@twitch.tv', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Sodapoppin_scavenger_hunt_2021.jpg', 'Sodapoppin#2468'),
('Summit1G', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'summit1g@twitch.tv', 'https://pbs.twimg.com/profile_images/1253450626500923393/k3QBhmHk_400x400.jpg', 'Summit1G#3579'),
('LionelMessi', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'messi@fcb.com', 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', 'Messi#1010'),
('LeBronJames', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'lebronjames@nba.com', 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg', 'LeBronJames#2020'),
('CristianoRonaldo', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'ronaldo@juventus.com', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg', 'Ronaldo#3030'),
('AdamMarx', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'akoojax@gmail.com', 'https://kdvr.com/wp-content/uploads/sites/11/2012/04/frog.jpg', 'Achijax#6973'),
('TheKing', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'jakePaul@gmail.com', 'https://yt3.googleusercontent.com/ytc/AL5GRJWvMo93O5DKgJ_MO-QlLHqKmgEgDhD8T_doUzjO4A=s900-c-k-c0x00ffffff-no-rj', 'JakePaul#6969'),
('WorldChamp', '$2a$10$L8NTUQ7tlC8dmMTnPltwIuxxN6XhfpCubHxUN.5cDnj.Lh0G41JGm', 'KSI@gmail.com', 'https://static.independent.co.uk/2021/07/15/13/A16I9125-Edit.jpg', 'KSI#6969');