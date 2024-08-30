# Massive Randomness 2

<div align="center"><p><img src="markdown/logo-outline.png"></p></div><div align="center" style="font-weight:bold">A Massive Darkness 2 quest and campaign random generator.</div>

---

<div align="center"><a href="https://www.kesiev.com/massive-randomness-2/">Generate a quest</a> | <a href="https://boardgamegeek.com/thread/3242331/massive-randomness-2-very-beta-one-shot-quest-rand">BGG discussion thread</a></div>

---

## The story

Great Heroes. You managed to survive Hell and Heaven, you fought hordes of Angels and Demons, you braved Ice and Fire. But a new enemy awaits, one of horror and chaos. Are you ready to face the **Massive Randomness**?

## The project

**Massive Randomness 2** is a [Massive Darkness 2](https://boardgamegeek.com/boardgame/315610/massive-darkness-2-hellscape) board game quest and campaign random generator. It will select a scenario model from its database, randomize part of the narrative for added fun, and create a matching randomly generated dungeon for you. It will also generate a set of random **challenges** you may want to accept to make your dungeon crawling experience a little more fun (and deadly). Just go to [the project page](https://www.kesiev.com/massive-randomness-2/) to give it a shot. Hit the black die button on the top right to generate a new quest or the hamburger menu button on the top left to show a few settings.

<div align="center" style="margin:60px 0">
    <p><img src="markdown/print.png"></p>
</div>

The generated quests are designed to be disposable but, if you prefer, you can print them on paper from your browser. The result is not as rich as that of the original quests but the layout is designed to be readable even when printed in black and white.

### Why?

_Massive Darkness 2_ is a nice light scenario-based hack & slash dungeon crawler board game with hordes of enemies to kill and tons of loot to grab. The game scenarios, both included in the game manual or found around the internet, are kept replayable both by randomizing enemies and events and by adding expansions, which mostly are more enemies and Hero classes to drop into its random pools.

I've been looking for _that Diablo-esque tabletop experience_ for a long time and this game is the closest thing I've found: total ignorance, immense character growth, and death just around the corner. All that's missing are the random dungeons... and that's how this project was born.

#### The Campaign mode

What I liked the most about Massive Darkness 2 design are the slim systems that keep the game balanced and interesting without breaking its pace.

Enemies equipment deck is separated from loot decks, containing different cards. This way, the game can scale these items' strength following the enemy's level regardless of the item _quality_, and these items' exclusivity makes sure that the battles are always interesting to the player.

Most of the enemies have _two level values_ (i.e., there are Level 1-2, Level 3-4, and Level 5 enemies) and are represented by a single card. This keeps the interface clear (all the information on the card is meaningful), creates a nice _sawtooth pace_ to the game (the enemy/player advantage ramps up and down from level to level), and makes the dungeon difficulty changes seamless (just draw cards from another deck when needed).

There are many of these systems around the game, all flexing for around 15 game rounds to keep the game flowing and engaging.

When I read the campaign expansion _Heavenfall_ manual's first pages I wondered _how far_ these small systems can stretch to hold a longer campaign. 6 months after Massive Randomness 2 first release, me and my wife found the time to play and clear it.

Avoiding spoilers, the _load_ on these systems has been cleverly spread around the campaign, allowing them to relax from quest to quest. It makes the game _a little more conventional_ and the systems and game materials show some _stretch marks_, but it still manages to keep that _action RPG_ mood intact. Moreover, it allows playing the same character longer to see their growth more clearly.

The Heavenfall campaign uses a lot of extra game material that can't be used in one-shots (i.e., the city, some special items, and Level 6-10 enemies/heroes) so I've attempted a _random campaign generator_ for Massive Randomness 2 to give them some kind of _second life_. I did my best to _squeeze_ the material I've got and wrap it with a story that goes deeper into _The Massive Randomness_ lore. I hope you'll like it!

### Technical notes

 * If your browser supports PWA and Service Worker, you should be able to install MR2 on your device from the browser options menu and use it offline. Offline support for web applications has been a bit esoteric in the past and still is, so it may not work for you. If you intend to self-host MR2 and do not want this functionality, please remove/comment out the inclusion of the `js/installer.js` script in `index.html`.

### Credits

The challenges feature is inspired by the [Dungeon Skill Challenge](https://boardgamegeek.com/filepage/245223/dungeon-skills-challenge) variant by **anubys** and by the **Hard Mode** rules of the official web-quest **Hardcore Trial**.

Finally, I've used the excellent [Seshat](http://dotcolon.net/font/seshat/) and [Ferrum](https://dotcolon.net/font/ferrum) fonts by Dot Colon even this time.

_Massive Darkness, Zombicide, and all related properties are owned by CMON Global Limited._
