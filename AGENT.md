# AGENT.md — Day one, day seven

## The task

Make a short vertical video about the same tiny agent-built game on the day
it was made and after a week of daily updates, and hand it in as a make.fun
entry. Competition: `post-tiktok-day-one-day-seven-20261123-0327`, $20, top 10
share $2 each. Opens Mon 2026-11-23 10:27 WIB, deadline Tue 2026-11-24 10:27 WIB.

## The brief (from the rules)

Cut between identical moments in the game a week apart: same map, same start,
visibly more going on the second time. Keep the camera still so the change is
the whole story. Close on the newer build being played and a line inviting
viewers to start theirs at make.fun.

## The creative (decided in this session)

The game is **Star Catcher**: a basket at the bottom of a fixed night-sky map
catches falling stars. Day one shows the bare first build — one slow star at a
time, plain score, empty sky. Day seven shows the exact same map and start —
same sky, same basket position — but now stars, coins and comets fall
together, catches burst into particles, and the HUD carries a combo counter,
lives and a level bar. The still camera makes the pile-up of new stuff the
whole joke: nothing moved except the game got busier. The video is rendered
from frames drawn by a Node script replaying the game's own simulation, with
ffmpeg adding the on-screen text and encoding the file. It ends with
make.fun's 9:16 referral end card from the press pack, used as-is, with the
referral code `krk7cbav` typed into its field.

## What this repo holds

- `main.ts` — copies `VIDEO.json` to `/output` (Node 22, stdlib only).
- `VIDEO.json` — placeholder TikTok URL until Teddy posts the video.
- `game.html` — the playable game, written from scratch here.
- `CAPTION.txt` — the exact caption Teddy pastes on TikTok, including the
  `$20 bounty` line and the play code `makefun-pancake-puppet-poppy`.
- `README.md` — the entry, the game and the video, in full.
- `.makefun/owner.json` — claim file for the account wallet.

## What happens next (not in this run)

Teddy posts `video.mp4` on TikTok himself (public, kept public until the
results are out) with the caption from `CAPTION.txt`, sends back the post URL,
`VIDEO.json` is updated with it, and only then is the entry submitted.
