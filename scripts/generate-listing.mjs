import fs from "fs";
import { globby } from "globby";
import { createCompiler } from "@mdx-js/mdx";
import visit from "unist-util-visit";

const type = process.argv.slice(2);

(async () => {
  const files = await globby([
    `pages/${type}/**/*.(mdx)`,
    `!pages/${type}/index.(js|ts|jsx|tsx|mdx)`,
    `!pages/weekly/anuncie-na-weekly.mdx`,
    `!pages/weekly/envie-um-link.mdx`,
    `!pages/artigos/artigos-patrocinados.mdx`,
    `!pages/artigos/envie-uma-correcao.mdx`,
    "!pages/api",
  ]);

  const content = files.map((file) => {
    const link = file.replace("pages/", "/").replace(".mdx", "");
    const finalFile = fs.readFileSync(process.cwd() + "/" + file);

    const extractMeta = () => (tree, file) =>
      visit(tree, "export", function visitor(node) {
        if (node.value.includes("const meta")) {
          const value = node.value;
          const finalMeta = value
            .replace("export const meta = ", "(() => (")
            .replace("};", "}))()");

          file.data.frontmatter = eval(finalMeta);
        }
      });
    const compiler = createCompiler({
      remarkPlugins: [extractMeta],
    });

    let meta = {};

    compiler.process(finalFile, function done(err, file) {
      meta = file.data.frontmatter;
    });

    return JSON.stringify({
      link,
      ...meta,
    });
  });

  const final = content.sort(
    (a, b) => Date.parse(JSON.parse(b).date) - Date.parse(JSON.parse(a).date)
  );

  // eslint-disable-next-line no-sync
  fs.writeFile(`pages/${type}/posts.json`, `{"data":[${final}]}`, () => ({}));
})();
