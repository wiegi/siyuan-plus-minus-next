import { describe, expect, it } from "vitest";
import { BOARD_ATTR, COLUMNS, buildBoardMarkdown } from "./board";

describe("buildBoardMarkdown", () => {
  const md = buildBoardMarkdown();

  it("wraps three row super blocks in one column super block", () => {
    expect(md.startsWith("{{{col\n")).toBe(true);
    expect(md.match(/\{\{\{row\n/g)).toHaveLength(3);
    expect(md.trimEnd().endsWith(`{: ${BOARD_ATTR}="true"}`)).toBe(true);
  });

  it("has a heading and a hover prompt for every column, in order", () => {
    let last = -1;
    for (const { heading, description } of COLUMNS) {
      const at = md.indexOf(`## ${heading}\n{: memo="${description}"}`);
      expect(at).toBeGreaterThan(last);
      last = at;
    }
  });

  it("starts every column with an empty bullet", () => {
    expect(md.match(/\n- \n/g)).toHaveLength(3);
  });
});
