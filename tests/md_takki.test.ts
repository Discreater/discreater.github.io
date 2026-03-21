import { writeFileSync } from "node:fs";
import { MarkdownExit } from "markdown-exit";
import { expect, it } from "vitest";
import { getLines } from "../plugins/md/line_number";
import { markdownItTakki } from "../plugins/md/md_takki";

it("should work", async () => {
  const md = new MarkdownExit().use(markdownItTakki);

  const _rendered = await md.renderAsync("```cmd\n" + "G:\\Scripts\\multiWindow.xlaunch\n" + "```");

  writeFileSync("tests/md_takki.test.html", _rendered);
});

it("get lines", () => {
  expect(getLines("<span>abcd</span>\n<span>a</span><span>\n</span><span>ddde</span>")).toEqual([
    "<span>abcd</span>",
    "<span>a</span><span></span>",
    "<span>ddde</span>",
  ]);
  expect(
    getLines("<span>first line <span>\n</span></span>second<span> line</span>\n third line"),
  ).toEqual(["<span>first line <span></span></span>", "second<span> line</span>", " third line"]);
});
