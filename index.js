#!/usr/bin/env node
import { Command } from "commander";
import { generateFile } from "./utils.js";
import color from "ansi-colors";

const program = new Command();
const generate = program.command("generate").alias("g");

program
  .name("next-cli")
  .version("0.0.1")
  .description(
    `${color.bgGreenBright(" NEXT.JS CLI ")} - ${color.bgCyan(
      " Author: Kristiyan Velkov "
    )}
    `
  );

// Generate all
generate
  .command("all")
  .alias("a")
  .description("Generate a new Next.js App routes with files.")
  .argument("<name>", "Name of Folder")
  .argument("[path]", "Path to create the Route.")
  .option("--page", "Generate page.txs file")
  .option("--layout", "Generate layout.tsx file")
  .option("--loading", "Generate loading.tsx file")
  .action((name, path, options) => {
    if (options.page) {
      generateFile("page", name, path);
    }

    if (options.layout) {
      generateFile("layout", name, path);
    }

    if (options.loading) {
      generateFile("loading", name, path);
    }

    // If no options are provided, show a message
    if (!options.page && !options.layout && !options.loading) {
      console.log(color.red("Please specify --page, --layout, or --loading"));
    }
  });

// Command to generate a new page
generate
  .command("page")
  .alias("p")
  .argument("<pageName>", "Name of the Page")
  .argument("[pagePath]", "Path to create a page.")
  .description("Generate a new Next.js Page")
  .action((pageName, pagePath = "") =>
    generateFile("page", pageName, pagePath)
  );

// Generate Layout
generate
  .command("layout")
  .alias("l")
  .argument("<layoutName>", "Name of the Layout")
  .argument("[layoutPath]", "Path to create a layout file.")
  .description("Generate a new Next.js Layout")
  .action((layoutName, layoutPath = "") =>
    generateFile("layout", layoutName, layoutPath)
  );

// Generate Loading
generate
  .command("loading")
  .alias("load")
  .argument("<loadingName>", "Name of the Loading file")
  .argument("[loadingPath]", "Path to create a loading file.")
  .description("Generate a new Next.js Loading file.")
  .action((loadingName, loadingPath = "") =>
    generateFile("loading", loadingName, loadingPath)
  );

// Command to generate a new component
generate
  .command("component <name>")
  .alias("c")
  .description("Generate a new Next.js component")
  .action((name) => {
    const componentTemplate = `export default function ${name}() {
  return <div>${name} component</div>;
}`;
    const dirPath = path.join(process.cwd(), "components");
    const filePath = path.join(dirPath, `${name}.tsx`);

    fs.ensureDirSync(dirPath);
    fs.writeFileSync(filePath, componentTemplate);
    import("chalk").then((chalk) => {
      console.log(
        chalk.green(`Component ${name} has been created at ${filePath}`)
      );
    });
  });

program.parse(process.argv);
