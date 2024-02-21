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
  routeGetTemplate,
  routePostTemplate,
  routePatchTemplate,
  routeDeleteTemplate,
  routePutTemplate,
  routeHeadTemplate,
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
  routeGet: routeGetTemplate,
  routePost: routePostTemplate,
  routeDelete: routeDeleteTemplate,
  routePatch: routePatchTemplate,
  routePut: routePutTemplate,
  routeHead: routeHeadTemplate,
};

export function generateFile(type, customPath, name = "", customType = "") {
  const fileName = `${type}.tsx`;
  const directoryPath = path.join(process.cwd(), "app", customPath);
  const filePath = path.join(directoryPath, fileName);
  const templateFunction = templates[customType || type];

  if (!templateFunction) {
    console.log(color.redBright(`Unsupported file type: ${type}`));
    return;
  }

  const template = templateFunction(name);

  if (!fs.existsSync(filePath)) {
    fs.ensureDirSync(directoryPath);
    fs.writeFileSync(filePath, template);
    console.log(color.greenBright(`File ${type} has been created.`));
  } else {
    console.log(color.redBright(`File ${type} already exists.`));
  }
}
