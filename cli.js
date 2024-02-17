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

generate
  .description("Generate a new Next.js App routes with files.")
  .argument("<path>", "Provide Path where to create a file.")
  .option("-n, --name <value>", "Name of the function in the file.")
  .option("-p, --page", "Generate page.txs file.")
  .option("-l, --layout", "Generate layout.tsx file.")
  .option("-load, --loading", "Generate loading.tsx file.")
  .option("-err, --error", "Generate error.tsx file.")
  .option("-not, --not-found ", "Generate not-found.tsx file.")
  .option("-t, --template", "Generate template.tsx file.")
  .option("-rget, --route-get", "Generate route.tsx GET file.")
  .option("-rpost, --route-post", "Generate route.tsx POST file.")
  .option("-rput, --route-put", "Generate route.tsx PUT file.")
  .option("-rdelete, --route-delete", "Generate route.tsx DELETE file.")
  .option("-rpatch, --route-patch", "Generate route.tsx PATCH file.")
  .option("-rhead, --route-head", "Generate route.tsx Head file.")
  .option(
    "-a, --all",
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
      routeGet,
      routeDelete,
      routePost,
      routePut,
      routePatch,
      routeHead,
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

    if (routeGet) {
      generateFile("route", `api/${path}`, "", "routeGet");
    }

    if (routePost) {
      generateFile("route", `api/${path}`, "", "routePost");
    }

    if (routeDelete) {
      generateFile("route", `api/${path}`, "", "routeDelete");
    }

    if (routePatch) {
      generateFile("route", `api/${path}`, "", "routePatch");
    }

    if (routePut) {
      generateFile("route", `api/${path}`, "", "routePut");
    }

    if (routeHead) {
      generateFile("route", `api/${path}`, "", "routeHead");
    }

    if (Object.keys(options).length === 0) {
      console.log(
        color.red(
          "Please specify option to generate files. View nc generate --help"
        )
      );
    }
  });

generate
  .command("root")
  .alias("r")
  .description("Generate middleware.tsx and global-error.tsx files.")
  .option("-g,--global-error", "Generate global-error.tsx file in the root")
  .option("-m,--middleware", "Generate middleware.tsx file")
  .action((options) => {
    const { middleware, globalError } = options;

    if (globalError) {
      generateFile("global-error", "", "");
    }

    if (middleware) {
      generateFile("middleware", "", "");
    }

    if (!options || options.length === 0) {
      console.log(color.red("Please specify options to generate files."));
    }
  });

program.parse(process.argv);
