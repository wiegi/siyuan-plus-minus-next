import { Plugin, fetchPost, showMessage } from "siyuan";
import type { Protyle } from "siyuan";

import { buildBoardMarkdown } from "./board";

function api<T = unknown>(url: string, data: unknown): Promise<T> {
  return new Promise((resolve, reject) => {
    fetchPost(url, data, (res: any) => {
      if (res?.code === 0) resolve(res.data as T);
      else reject(new Error(res?.msg || `Request failed: ${url}`));
    });
  });
}

export default class PlusMinusNextPlugin extends Plugin {
  onload(): void {
    this.protyleSlash = [
      {
        filter: ["plusminusnext", "plus minus next", "pmn", "reflection"],
        html: `<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.insertBoard}</span></div>`,
        id: "plus-minus-next-insert",
        callback: (_protyle: Protyle, nodeElement: HTMLElement) => {
          void this.insertBoard(nodeElement);
        },
      },
    ];
  }

  private async insertBoard(nodeElement: HTMLElement): Promise<void> {
    try {
      const id = nodeElement.getAttribute("data-node-id");
      if (!id) throw new Error("No active block found.");

      const text = (nodeElement.textContent ?? "")
        .replace(/[​\s]/g, "")
        .trim();
      const data = buildBoardMarkdown();

      // An empty block (or one that only holds the typed "/command") is replaced
      // by the board; otherwise the board goes in right below it.
      if (text.length === 0 || text.startsWith("/")) {
        await api("/api/block/updateBlock", { dataType: "markdown", data, id });
      } else {
        await api("/api/block/insertBlock", {
          dataType: "markdown",
          data,
          previousID: id,
        });
      }
    } catch (e) {
      showMessage(e instanceof Error ? e.message : "Unknown error.", 6000, "error");
    }
  }
}
