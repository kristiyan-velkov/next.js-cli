#!/usr/bin/env node

const { Command } = require("commander");
const fs = require("fs-extra");
const path = require("path");
// const { spawn } = require("child_process");
const program = new Command();
const generate = program.command("generate").alias("g");

program
  .name("next-cli")
  .description("CLI to automate Next.js tasks")
  .version("0.1.0");

// Command to generate a new page
generate
  .command("page <name>")
  .alias("p")
  .description("Generate a new Next.js page")
  .action((name) => {
    const pageTemplate = `export default function ${name}() {
  return <div>Welcome to ${name} page</div>;
}`;
    const dirPath = path.join(process.cwd(), "pages");
    const filePath = path.join(dirPath, `${name}.js`);

    fs.ensureDirSync(dirPath);
    fs.writeFileSync(filePath, pageTemplate);
    import("chalk").then((chalk) => {
      console.log(chalk.green(`Page ${name} has been created at ${filePath}`));
    });
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

// Generate Layout

generate
  .command("layout <path> <layoutName>")
  .alias("l")
  .description("Generate a new Next.js layout component")
  .action((layoutPath = "", layoutName = "Layout") => {
    const fullPath = layoutPath
      ? path.join(process.cwd(), layoutPath)
      : path.join(process.cwd(), "src", "layouts");
    const layoutTemplate = `import React from 'react';

export default function ${layoutName}Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}`;

    const filePath = path.join(fullPath, `${layoutName}.tsx`);
    fs.ensureDirSync(fullPath);
    fs.writeFileSync(filePath, layoutTemplate);
    console.log(
      `Layout component ${layoutName} has been created at ${filePath}`
    );
  });

program.parse(process.argv);
