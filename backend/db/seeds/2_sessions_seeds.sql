TRUNCATE TABLE sessions RESTART IDENTITY CASCADE;

INSERT INTO sessions (creator_id, game_id, region, title, description, max_players, current_players, mic_required, competitive, platform)
VALUES (1, 1, 'NA', 'Valorant Ranked', 'Looking for players to grind Valorant Ranked with', 5, 3, TRUE, TRUE, 'PC'),
(2, 2, 'EU', 'Fortnite Duos', 'Need a duo partner for Fortnite Arena', 2, 1, FALSE, FALSE, 'XBox'),
(3, 3, 'NA', 'League of Legends Flex', 'Creating a team for LoL Flex', 5, 2, TRUE, TRUE, 'PC'),
(4, 4, 'NA', 'Overwatch Comp', 'Looking for players to play Overwatch Comp with', 6, 4, TRUE, TRUE, 'PlayStation'),
(5, 5, 'EU', 'Apex Legends Ranked', 'Need a full team for Apex Legends Ranked', 3, 2, TRUE, TRUE, 'PC'),
(6, 6, 'NA', 'Minecraft Casual Survival', 'Looking for players to play some Minecraft Survival together', 10, 5, FALSE, FALSE,  'PC'),
(12, 6, 'EU', 'Minecraft Competitive Bed wars', 'Lets win some bed wars on hipixel', 3, 2, TRUE, TRUE, 'PC');