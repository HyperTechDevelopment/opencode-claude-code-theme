<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="claude-code: warm cream and terracotta dark theme for OpenCode">
</p>

# claude-code

[Português](./README.pt-BR.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-D97757.svg)](./LICENSE)
[![OpenCode V2](https://img.shields.io/badge/OpenCode-V2-EDE9E3.svg)](https://opencode.ai/docs/themes/)
[![dark-only](https://img.shields.io/badge/mode-dark--only-1E1C1A.svg)](./claude-code.json)

A dark [OpenCode](https://opencode.ai) TUI theme built from Claude Code's
palette: cream `#EDE9E3` text on `#1E1C1A`, terracotta `#D97757` accents.

## Palette

Values below match [`claude-code.json`](./claude-code.json) (`dark.hue`):

| Role | Hex | Used for |
| --- | --- | --- |
| Background | `#1E1C1A` | editor background |
| Text | `#EDE9E3` | primary text (14.05:1 on bg) |
| Muted | `#B8B0A7` | secondary text (7.93:1 on bg) |
| Accent | `#D97757` | actions, keywords, headings |
| Accent light | `#F5B79E` | highlighted text (9.83:1 on bg) |
| Green | `#9AD8A8` | strings, success, diff added |
| Red | `#F2A89B` | variables, errors, diff removed |

Full 100–900 ramps for `gray, red, orange, yellow, green, cyan, blue, purple`;
`accent → orange`, `interactive → orange`, `neutral → gray` aliases live in the file.

## Design decisions

- One warm accent does all interactive work (`accent` and `interactive` both
  resolve to orange), the way Claude Code uses terracotta everywhere.
- Syntax keeps hues distinct (keyword orange, function blue, string green) so
  code scans at a glance; comments stay muted.
- Dark only: a single palette to maintain. A `light` request falls back to it.

## Install (manual)

Copy the file to your themes directory. OpenCode reads `.json` files only;
the filename becomes the theme name.

| OS | Global directory |
| --- | --- |
| Windows | `%USERPROFILE%\.config\opencode\themes\` |
| macOS / Linux | `~/.config/opencode/themes/` |

Project-only alternative: `.opencode/themes/` inside the project tree.

Restart the TUI, run `/themes`, select `claude-code`. Or pin it in `cli.json`:

```json
{
  "theme": { "name": "claude-code", "mode": "dark" }
}
```

## Install via your AI agent

Paste the prompt below into your coding agent. It downloads this theme,
validates it, and installs it without touching anything else.

```text
Install the "claude-code" OpenCode theme from GitHub.

1. Download https://raw.githubusercontent.com/HyperTechDevelopment/opencode-claude-code-theme/main/claude-code.json
2. Parse it as JSON and verify: top-level keys "base" and "dark" exist;
   "base" contains text, background, diff, syntax and markdown;
   "dark.hue" contains accent, interactive and neutral.
   Abort with the validation error if any check fails.
3. Create the global themes directory if missing
   (Windows: %USERPROFILE%\.config\opencode\themes\
   macOS/Linux: ~/.config/opencode/themes/)
   and save the file there as claude-code.json.
4. Do NOT modify cli.json, opencode.json, or any existing theme file.
5. Tell me to restart the TUI and run /themes to select claude-code,
   and report the validation results.
```

## Mark

<p>
  <img src="./assets/readme/claude-code-logo.svg" width="120" alt="claude-code mark: terminal chevron and block cursor on a warm dark tile">
</p>

Chevron plus block cursor, the two glyphs a terminal theme actually shows.
Motion (a 1.6 s cursor blink) is specified in
[`claude-code-logo-motion.md`](./assets/readme/claude-code-logo-motion.md);
the deterministic render recipe is
[`claude-code-logo-animation.mjs`](./assets/readme/claude-code-logo-animation.mjs).

## What's inside

```text
opencode-claude-code-theme/
├── claude-code.json                  # the theme (dark-only, OpenCode V2 format)
├── assets/readme/
│   ├── hero.svg                      # README hero
│   ├── claude-code-logo.svg          # mark (validated master)
│   ├── claude-code-logo-motion.md    # blink specification
│   └── claude-code-logo-animation.mjs# deterministic frame recipe
├── README.md
├── README.pt-BR.md
└── LICENSE                           # MIT
```

## Troubleshooting

- Theme not listed: restart the TUI after adding the file. OpenCode reads
  `themes/` at startup.
- Theme looks wrong: validate the JSON (command below). An invalid file is
  ignored and the previous theme stays active.
- `light` mode requested: falls back to this dark palette by design.

## Compatibility and limits

- OpenCode **V2 only** (`base` + `dark.hue` token format).
- **Dark only** by design.
- Adding the file never overwrites built-in themes. Selecting it is reversible
  in one step via `/themes`.

## Validate

```sh
python -c "import json; d=json.load(open('claude-code.json')); print(sorted(d), sorted(d['dark']['hue']))"
```

Expected: `['base', 'dark']` plus the hue families
(`accent, blue, cyan, gray, green, interactive, neutral, orange, purple, red, yellow`).

## License

[MIT](./LICENSE) © 2026 Marcos Gabriel.
