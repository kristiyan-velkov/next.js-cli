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
  templateFile,
  middlewareTemplate,
} from "./templates.js";

const templates = {
  page: pageTemplate,
  loading: loadingTemplate,
  layout: layoutTemplate,
  error: errorTemplate,
  template: templateFile,
  "global-error": globalErrorsTemplate,
  "not-found": notFoundTemplate,
  middleware: middlewareTemplate,
};

export function generateFile(type, name, customPath) {
  const fileName = `${type}.tsx`;
  const directoryPath = customPath
    ? path.join(process.cwd(), "app", customPath)
    : path.join(process.cwd(), "app", name);
  const filePath = path.join(directoryPath, fileName);

  const templateFunction = templates[type];

  if (!templateFunction) {
    console.log(color.redBright(`Unsupported file type: ${type}`));
    return;
  }

  const template = templateFunction(name);

  if (!fs.existsSync(filePath)) {
    fs.ensureDirSync(directoryPath);
    fs.writeFileSync(filePath, template);
    console.log(color.greenBright(`${name} ${type} has been created.`));
  } else {
    console.log(color.redBright(`${name} ${type} already exists.`));
  }
}
