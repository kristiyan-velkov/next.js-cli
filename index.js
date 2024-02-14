#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import color from "ansi-colors";
import { layoutTemplate, pageTemplate, loadingTemplate } from "./templates.js";
// Import spawn if you need it later, uncomment and convert as shown
// import { spawn } from 'child_process';

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

// Command to generate a new page
generate
  .command("page")
  .alias("p")
  .argument("<pageName>", "Name of the Page")
  .argument("[pagePath]", "Path to create a page.")
  .description("Generate a new Next.js Page")
  .action((pageName, pagePath = "") => {
    const fullPath = pagePath
      ? path.join(process.cwd(), "app", pagePath)
      : path.join(process.cwd(), "app", pageName);

    const filePath = path.join(fullPath, "page.tsx");
    if (!fs.existsSync(filePath)) {
      fs.ensureDirSync(fullPath);
      fs.writeFileSync(filePath, pageTemplate(pageName));
      console.log(color.greenBright(`${pageName} page has been created.`));
    } else {
      console.log(color.redBright(`${pageName} page already exists!`));
    }
  });

// Generate Layout
generate
  .command("layout")
  .alias("l")
  .argument("<layoutName>", "Name of the Layout")
  .argument("[layoutPath]", "Path to create a layout file.")
  .description("Generate a new Next.js Layout")
  .action((layoutName, layoutPath = "") => {
    const fullPath = layoutPath
      ? path.join(process.cwd(), "app", layoutPath)
      : path.join(process.cwd(), "app", layoutName);

    const filePath = path.join(fullPath, "layout.tsx");
    if (!fs.existsSync(filePath)) {
      fs.ensureDirSync(fullPath);
      fs.writeFileSync(filePath, layoutTemplate(layoutName));
      console.log(color.greenBright(`${layoutName} layout has been created.`));
    } else {
      console.log(color.redBright(`${layoutName} layout already exists!`));
    }
  });

// Generate Loading
generate
  .command("loading")
  .alias("load")
  .argument("[loadingPath]", "Path to create a loading file.")
  .description("Generate a new Next.js Loading file.")
  .action((loadingPath = "") => {
    const fullPath = loadingPath
      ? path.join(process.cwd(), "app", loadingPath)
      : path.join(process.cwd(), "app", "");

    const filePath = path.join(fullPath, "loading.tsx");
    if (!fs.existsSync(filePath)) {
      fs.ensureDirSync(fullPath);
      fs.writeFileSync(filePath, loadingTemplate());
      console.log(color.greenBright(`Loading has been created.`));
    } else {
      console.log(color.redBright(`Loading already exists!`));
    }
  });

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

// // Command to initialize a new Next.js project
// generate
//   .command("init")
//   .description("Initialize a new Next.js project")
//   .action(() => {
//     console.log(`Initializing a new Next.js project...`);
//     spawn(`npx create-next-app@latest`, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//       }
//       console.log(stdout);
//       if (stderr) console.error(stderr);
//     });
//   });

program.parse(process.argv);
