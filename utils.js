import { layoutTemplate, pageTemplate, loadingTemplate } from "./templates.js";
import fs from "fs-extra";
import path from "path";
import color from "ansi-colors";

export function generateFile(type, name, customPath) {
  const fileName = `${type}.tsx`;
  const directoryPath = customPath
    ? path.join(process.cwd(), "app", customPath)
    : path.join(process.cwd(), "app", name);
  const filePath = path.join(directoryPath, fileName);

  let template;

  if (type === "page") {
    template = pageTemplate(name);
  }

  if (type === "loading") {
    template = loadingTemplate(name);
  }

  if (type === "layout") {
    template = layoutTemplate(name);
  }

  if (!template) {
    console.log(color.redBright(`Unsupported file type: ${type}`));
    return;
  }

  if (!fs.existsSync(filePath)) {
    fs.ensureDirSync(directoryPath);
    fs.writeFileSync(filePath, template);
    console.log(color.greenBright(`${name} ${type} has been created.`));
  } else {
    console.log(color.redBright(`${name} ${type} already exists.`));
  }
}

// // Utility function to generate page
// export function generatePage(pageName, pagePath) {
//   const fullPath = pagePath
//     ? path.join(process.cwd(), "app", pagePath)
//     : path.join(process.cwd(), "app", pageName);
//   const filePath = path.join(fullPath, `page.tsx`);
//   if (!fs.existsSync(filePath)) {
//     fs.ensureDirSync(fullPath);
//     fs.writeFileSync(filePath, pageTemplate(pageName)); // Assuming pageTemplate is a function that returns the template string
//     console.log(color.greenBright(`${pageName} page has been created.`));
//   } else {
//     console.log(color.redBright(`${pageName} page already exists.`));
//   }
// }

// // Utility function to generate layout
// export function generateLayout(layoutName, layoutPath) {
//   const fullPath = layoutPath
//     ? path.join(process.cwd(), "app", layoutPath)
//     : path.join(process.cwd(), "app", layoutName);
//   const filePath = path.join(fullPath, `layout.tsx`);
//   if (!fs.existsSync(filePath)) {
//     fs.ensureDirSync(fullPath);
//     fs.writeFileSync(filePath, layoutTemplate(layoutName)); // Assuming layoutTemplate is a function that returns the template string
//     console.log(color.greenBright(`${layoutName} layout has been created.`));
//   } else {
//     console.log(
//       color.redBright(`${layoutName} layout already exists at ${filePath}`)
//     );
//   }
// }

// export function generateLoading(loadingPath) {
//   const fullPath = loadingPath
//     ? path.join(process.cwd(), "app", loadingPath)
//     : path.join(process.cwd(), "app", "");

//   const filePath = path.join(fullPath, "loading.tsx");
//   if (!fs.existsSync(filePath)) {
//     fs.ensureDirSync(fullPath);
//     fs.writeFileSync(filePath, loadingTemplate());
//     console.log(color.greenBright(`Loading has been created.`));
//   } else {
//     console.log(color.redBright(`Loading already exists!`));
//   }
// }
