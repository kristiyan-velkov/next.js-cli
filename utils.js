import fs from "fs-extra";
import path from "path";
import color from "ansi-colors";
import {
  layoutTemplate,
  pageTemplate,
  loadingTemplate,
  errorTemplate,
  globalErrorsTemplate,
  notFoundTemplate,
} from "./templates.js";

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

  if (type === "error") {
    template = errorTemplate();
  }

  if (type === "global-error") {
    template = globalErrorsTemplate();
  }

  if (type === "not-found") {
    template = notFoundTemplate();
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
