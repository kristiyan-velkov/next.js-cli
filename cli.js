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
    )}`
  );

// Create new Next.js project
program
  .command("init")
  .alias("i")
  .argument("<projectName>", "Name of project")
  .description("Create a new Next.js App.")
  .action(async (projectName) => {
    try {
      await execa("npx", ["create-next-app", projectName], {
        stdio: "inherit",
      });
      console.log(
        color.greenBright(`Next.js app ${projectName} created successfully!`)
      );
    } catch (error) {
      console.error(
        color.red(`Failed to create Next.js app: ${error.message}`)
      );
    }
  });

// generate
//   .command("all")
//   .alias("a")
//   .description("Generate a new Next.js App routes with all files.")
//   .argument("<path>", "Provide Path where to create a file.")
//   .option("-n, --name <value>", "Name of the function in the file.", "")
//   .action((path, options) => {
//     const { name } = options;

//     generateFile("page", path, name);
//     generateFile("loading", path, name);
//     generateFile("error", path, name);
//     generateFile("not-found", path, name);

//     if (!name && !path) {
//       console.log(color.red("Please specify --name and --path"));
//     }
//   });

// Generate specific files
generate
  .description("Generate a new Next.js App routes with files.")
  .argument("<path>", "Provide Path where to create a file.")
  .option("-n,--name <value>", "Name of the function in the file.")
  .option("-p,--page", "Generate page.txs file")
  .option("-l,--layout", "Generate layout.tsx file", "test")
  .option("-load, --loading", "Generate loading.tsx file")
  .option("-err, --error", "Generate error.tsx file")
  .option("-g,--global-error", "Generate global-error.tsx file in the root")
  .option("-not,--not-found ", "Generate not-found.tsx file")
  .option("-t, --template", "Generate template.tsx file")
  .option("-m,--middleware", "Generate middleware.tsx file")
  .option(
    "-a,--all",
    "Generate page.tsx, loading.tsx, error.tsx, not-found.tsx files."
  )
  .action((path, options) => {
    const {
      all,
      name,
      page,
      layout,
      loading,
      error,
      template,
      notFound,
      middleware,
      globalError,
    } = options;

    if (all) {
      generateFile("page", path, name);
      generateFile("loading", path, name);
      generateFile("error", path, name);
      generateFile("not-found", path, name);
    }

    if (page) {
      generateFile("page", path, name);
    }

    if (layout) {
      generateFile("layout", path, name);
    }

    if (loading) {
      generateFile("loading", path, name);
    }

    if (error) {
      generateFile("error", path, name);
    }

    if (template) {
      generateFile("template", path, name);
    }

    if (notFound) {
      generateFile("not-found", path, name);
    }

    if (middleware) {
      generateFile("middleware", "", "");
    }

    if (globalError) {
      generateFile("global-error", "", "");
    }

    if (!options || options.length === 0) {
      console.log(color.red("Please specify options to generate files."));
    }
  });

program.parse(process.argv);
