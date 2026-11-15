# claude-code logo motion specification

Renderer-independent contract for the repository mark animation.
Source: `assets/readme/claude-code-logo.svg` (static first frame).

## Canvas

- `viewBox`: `0 0 256 256`, square tile, transparent outside the tile.
- Intended display size: 96–128 px in README, 512 px static export.
- Named layers: `tile` (static), `prompt` → `chevron` (static), `cursor` (animated).

## Loop

- Total duration: 1.6 s, seamless loop (last state returns to first).
- Frame rate: 10 fps, 16 frames.
- Easing: none (hard step; a cursor blink has no in-between).

## Keyframes (`cursor` opacity)

| Frames | Time (s) | Opacity |
| --- | --- | --- |
| 0–9 | 0.0–1.0 | 1 |
| 10–15 | 1.0–1.6 | 0 |

Static first frame (frame 0): cursor visible.
Exact loop point: frame 16 == frame 0.

## Reduced motion

Static cursor-visible state, identical to frame 0. Same identity and
information, no blink.

## Transparency

Preserved. The SVG carries no full-canvas background; the tile is the mark.
PNG export must be alpha-capable; the GIF reserves one transparent palette
entry (`gifMaxColors` >= 3).

## Exports

- Static PNG: `assets/readme/claude-code-logo-static.png`, 512 x 512.
- Animated GIF: `assets/readme/claude-code-logo-animated.gif`, 512 x 512.
- Capability at authoring time: rasterizer unavailable (see recipe notes).

## Recipe

`assets/readme/claude-code-logo-animation.mjs` implements this contract:
`renderFrame` sets `cursor` opacity from `timeSeconds < 1.0`.
See that file for the frame calculation.
