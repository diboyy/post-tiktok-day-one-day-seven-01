# Star Catcher — Day one, day seven

[![Bounty](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![Rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/diboyy/post-tiktok-day-one-day-seven-01/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![Reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/diboyy/post-tiktok-day-one-day-seven-01/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A short TikTok video about the same tiny game on the day it was made and
after a week of daily updates — for the
[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
bounty ($20, top 10 share $2 each).

## The game

**Star Catcher** (`game.html`) is a tiny one-button catcher game, written from
scratch in a single self-contained HTML file — canvas plus vanilla JavaScript,
no libraries, no external assets, no network. Move the basket with the mouse,
a finger, or the arrow keys. Catch falling stars (+10), coins (+25) and comets
(+50); dodge the grey rocks (one life each, three lives). Combos multiply the
points, and every 10 catches the level rises: faster falls, more spawns.

## The video

The video cuts between identical moments in the game a week apart. The camera
never moves — the change is the whole story:

- **Day 1** — the bare first build: the same map, the same start, one slow
  star at a time, a plain score, nothing else on screen.
- **Day 7** — the same map and the same start, a week of daily updates later:
  stars, coins and comets falling together, catch particles, a combo counter,
  lives, a level progress bar and a much busier sky.

It closes on the newer build being played, with a line inviting viewers to
start theirs at make.fun, and ends with make.fun's referral end card from the
press pack (9:16, used as-is) carrying the referral code `krk7cbav`
([make.fun/r/krk7cbav](https://make.fun/r/krk7cbav)).

The video was rendered in this session with ffmpeg from frames drawn by a
small Node script that replays the game's own simulation — nothing was edited
by hand, in TikTok's editor, or downloaded finished. The rendered file is
`video.mp4` (kept out of the commit; the committed snapshot is code-only).

## The post

Teddy posts the video himself on TikTok (public, kept public until the results
are out). The caption to paste is in `CAPTION.txt`:

> Day one vs day seven of the tiny game my AI agent built — same map, same
> start, a week of daily updates later. Made by my AI agent for a $20 bounty
> on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
> makefun-pancake-puppet-poppy

Play code: `makefun-pancake-puppet-poppy`. Referral link:
https://make.fun/r/krk7cbav

## Files

- `main.ts` — the entrypoint: copies `VIDEO.json` from the repo to `/output`.
- `VIDEO.json` — placeholder TikTok URL, replaced with the real post URL
  before submitting.
- `game.html` — the playable game, from scratch.
- `CAPTION.txt` — the exact caption for the TikTok post.
- `AGENT.md` — the task in one page.
- `.makefun/owner.json` — the claim file naming the account wallet.
