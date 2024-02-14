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

generate
  .command("all")
  .alias("-all")
  .description("Generate a new Next.js App routes with all files.")
  .argument("<name>", "Name of Folder")
  .argument("[path]", "Path to create the Route.")
  .action((name, path) => {
    generateFile("page", name, path);

    generateFile("layout", name, path);

    generateFile("loading", name, path);

    generateFile("error", name, path);

    generateFile("not-found", name, path);

    if (!name && !path) {
      console.log(color.red("Please specify --name and --path"));
    }
  });

// Generate specific files
generate
  .description("Generate a new Next.js App routes with files.")
  .argument("<name>", "Name of Folder")
  .argument("[path]", "Path to create the Route.")
  .option("--page", "Generate page.txs file")
  .option("--p", "Generate page.txs file")
  .option("--layout", "Generate layout.tsx file")
  .option("--l", "Generate layout.tsx file")
  .option("--loading", "Generate loading.tsx file")
  .option("--load", "Generate loading.tsx file")
  .option("--error", "Generate error.tsx file")
  .option("--err", "Generate error.tsx file")
  .option("--globalError", "Generate Global error.tsx file in the root")
  .option("--gerr", "Generate Global error.tsx file in the root")
  .option("--not-found", "Generate not-found.tsx file")
  .option("--notf", "Generate not-found.tsx file")
  .option("--template", "Generate template.tsx file")
  .option("--t", "Generate template.tsx file")
  .action((name, path, options) => {
    if (options.page || options.p) {
      generateFile("page", name, path);
    }

    if (options.layout || options.l) {
      generateFile("layout", name, path);
    }

    if (options.loading || options.load) {
      generateFile("loading", name, path);
    }

    if (options.error || options.err) {
      generateFile("error", name, path);
    }

    if (options.globalError || options.gerr) {
      generateFile("global-error", "", "");
    }

    if (options.globalError || options.gerr) {
      generateFile("not-found", "", path);
    }

    if (options.template || options.t) {
      generateFile("template", name, path);
    }

    if (!options || options.length === 0) {
      console.log(color.red("Please specify options"));
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

// Generate Error
generate
  .command("error")
  .alias("err")
  .argument("<errorName>", "Name of the Error file")
  .argument("[errorPath]", "Path to create a error file.")
  .description("Generate a new Next.js error file.")
  .action((errorName, errorPath = "") =>
    generateFile("error", errorName, errorPath)
  );

// Generate Global Error
generate
  .command("globalError")
  .alias("gerr")
  .description("Generate global-error file.")
  .action(() => generateFile("global-error", "", ""));

// Generate Not-Found page
generate
  .command("not-found")
  .alias("notf")
  .argument("[name]", "Name of the not-found file")
  .argument("[path]", "Path to create a not-found file.")
  .description("Generate not-found.tsx file.")
  .action((name, path) => generateFile("not-found", "", path));

// Generate Template
generate
  .command("template")
  .alias("t")
  .argument("<templateName>", "Name of the template")
  .argument("[templatePath]", "Path to create a template file.")
  .description("Generate a new Next.js template")
  .action((templateName, templatePath = "") =>
    generateFile("template", templateName, templatePath)
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
