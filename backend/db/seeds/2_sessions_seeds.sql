DELETE FROM sessions;

INSERT INTO sessions (creator_id, game_id, region, title, description, max_players, current_players, mic_required, competitive, discord_link)
VALUES (1, 1, 'NA', 'Valorant Ranked', 'Looking for players to grind Valorant Ranked with', 5, 3, TRUE, TRUE, 'https://discord.gg/valorantranked', 'PC'),
(2, 2, 'EU', 'Fortnite Duos', 'Need a duo partner for Fortnite Arena', 2, 1, FALSE, FALSE, 'https://discord.gg/fortnitearena', 'XBox'),
(3, 3, 'NA', 'League of Legends Flex', 'Creating a team for LoL Flex', 5, 2, TRUE, TRUE, 'https://discord.gg/lolflex', 'PC'),
(4, 4, 'NA', 'Overwatch Comp', 'Looking for players to play Overwatch Comp with', 6, 4, TRUE, TRUE, 'https://discord.gg/overwatchcomp', 'PlayStation'),
(5, 5, 'EU', 'Apex Legends Ranked', 'Need a full team for Apex Legends Ranked', 3, 2, TRUE, TRUE, 'https://discord.gg/apexranked', 'PC'),
(6, 6, 'NA', 'Minecraft Casual Survival', 'Looking for players to play some Minecraft Survival together', 10, 5, FALSE, FALSE, 'https://discord.gg/minecraftsurvival', 'PC'),
