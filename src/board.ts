export const BOARD_ATTR = "custom-pmn-board";

export const COLUMNS = [
  {
    heading: "＋ Plus",
    description: "What worked well, felt energising, or should be repeated?",
  },
  {
    heading: "− Minus",
    description: "What did not work, felt difficult, or created friction?",
  },
  {
    heading: "→ Next",
    description: "What will you change, try, or prioritise next?",
  },
] as const;

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

/**
 * Markdown for the board: a column super block holding one row super block per
 * column. Each column has a heading (the prompt is its hover memo) and an
 * empty bullet list. Everything stays plain SiYuan blocks, so the board keeps
 * working if the plugin is disabled or removed.
 */
export function buildBoardMarkdown(): string {
  const columns = COLUMNS.map(
    ({ heading, description }) =>
      `{{{row\n## ${heading}\n{: memo="${escapeAttr(description)}"}\n\n- \n\n}}}`,
  ).join("\n\n");

  return `{{{col\n${columns}\n}}}\n{: ${BOARD_ATTR}="true"}`;
}
