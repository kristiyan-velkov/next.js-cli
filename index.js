#!/usr/bin/env node
import { Command } from "commander";
import { generateFile } from "./utils.js";
import color from "ansi-colors";
import { execa } from "execa";

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

// Create new Next.js project

program
  .command("init")
  .alias("-i")
  .argument("<name>", "Name of project")
  .description("Create a new Next.js App.")
  .action(async (name) => {
    try {
      await execa("npx", ["create-next-app", name], { stdio: "inherit" });
      console.log(
        color.greenBright(`Next.js app ${name} created successfully!`)
      );
    } catch (error) {
      console.error(
        color.red(`Failed to create Next.js app: ${error.message}`)
      );
    }
  });

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
  .argument("<name>", "Name of the Page")
  .argument("[path]", "Path to create a page.")
  .description("Generate a new Next.js Page")
  .action((name, path = "") => generateFile("page", name, path));

// Generate Layout
generate
  .command("layout")
  .alias("l")
  .argument("<name>", "Name of the Layout")
  .argument("[path]", "Path to create a layout file.")
  .description("Generate a new Next.js Layout")
  .action((name, path = "") => generateFile("layout", name, path));

// Generate Loading
generate
  .command("loading")
  .alias("load")
  .argument("<name>", "Name of the Loading file")
  .argument("[path]", "Path to create a loading file.")
  .description("Generate a new Next.js Loading file.")
  .action((name, path = "") => generateFile("loading", name, path));

// Generate Error
generate
  .command("error")
  .alias("err")
  .argument("<name>", "Name of the Error file")
  .argument("[path]", "Path to create a error file.")
  .description("Generate a new Next.js error file.")
  .action((name, path = "") => generateFile("error", name, path));

// Generate Template
generate
  .command("template")
  .alias("t")
  .argument("<name>", "Name of the template")
  .argument("[path]", "Path to create a template file.")
  .description("Generate a new Next.js template")
  .action((name, path = "") => generateFile("template", name, path));

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

program.parse(process.argv);
