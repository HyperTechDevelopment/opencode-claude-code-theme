// Deterministic animation recipe for the claude-code repository mark.
// Implements assets/readme/claude-code-logo-motion.md for the bundled exporter.
// Pure function of (frameIndex, timeSeconds): no I/O, no randomness, no Date.

const CURSOR_VISIBLE_UNTIL_SECONDS = 1.0;

function frameSvg(sourceSvg, timeSeconds, width, height) {
  const opacity = timeSeconds < CURSOR_VISIBLE_UNTIL_SECONDS ? 1 : 0;
  // The canonical master carries <rect id="cursor" ...> with no opacity
  // attribute (static first frame = visible). Toggle it per frame.
  const withSize = sourceSvg
    .replace(/width="\d+"/, `width="${width}"`)
    .replace(/height="\d+"/, `height="${height}"`);
  return withSize.replace(
    '<rect id="cursor"',
    `<rect id="cursor" opacity="${opacity}"`,
  );
}

export default {
  schemaVersion: 1,
  source: "assets/readme/claude-code-logo.svg",
  staticOutput: "assets/readme/claude-code-logo-static.png",
  animatedOutput: "assets/readme/claude-code-logo-animated.gif",
  width: 512,
  height: 512,
  fps: 10,
  frameCount: 16,
  maxFileBytes: 5 * 1024 * 1024,
  gifMaxColors: 64,
  preserveTransparency: true,
  renderFrame({ sourceSvg, frameIndex, timeSeconds, width, height }) {
    void frameIndex;
    return frameSvg(sourceSvg, timeSeconds, width, height);
  },
};
