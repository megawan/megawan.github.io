# Learn Hijaiyah Letters

A small game for children to learn the 28 hijaiyah letters and their harakat.

## Modes

- Learn letters: tap a letter to see it and hear its name.
- Learn harakat: the Fathah, Kasrah and Dammah tabs show and play each letter with its vowel.
- Guess the sound, Guess the name, Guess the harakat: ten-question quizzes.
- Look-alikes: groups of letters that differ only by dots, with a short practice for each group.
- Letter shapes: shows each letter alone and at the beginning, middle and end of a word, with a quiz. Letters that do not join to the next one (alif, dal, dzal, ra, zai, wau) only show two shapes. Shapes are drawn with a zero-width joiner, so they depend on the font's joining rules.
- Match pairs: flip cards to match each letter with its name (easy, medium, hard).
- Progress map: shows how well each letter is known. Weak letters appear more often in quizzes.

## Sound

Recordings live in `audio/` (112 small mp3 files), generated with the macOS Arabic voice (Majed).

| File name pattern | Content |
| --- | --- |
| `NN-name.mp3`, for example `02-ba.mp3` | letter name |
| `NN-fathah.mp3` | letter with fathah (ba) |
| `NN-kasrah.mp3` | letter with kasrah (bi) |
| `NN-dammah.mp3` | letter with dammah (bu) |

NN is the letter number from 01 to 28 (01 alif, 02 ba, 03 ta, and so on). To improve pronunciation, replace any file with your own recording using the same name.

If a file is missing, the game falls back to the device's Arabic speech voice.

## Look-alike groups

Groups are defined by the `GROUPS` and `DOTS` constants in `index.html`.
