import fs from "fs-extra";
import path from "path";

import {
  layoutTemplate,
  pageTemplate,
  loadingTemplate,
  errorTemplate,
  globalErrorsTemplate,
  notFoundTemplate,
  templateFile,
  middlewareTemplate,
  routeTemplate,
  defaultFileTemplate,
} from "./templates";

type TemplateFunction = (name: string) => string;

const defaultTemplates: Record<string, TemplateFunction> = {
  page: pageTemplate,
  loading: loadingTemplate,
  layout: layoutTemplate,
  error: errorTemplate,
  template: templateFile,
  "global-error": globalErrorsTemplate,
  "not-found": notFoundTemplate,
  middleware: middlewareTemplate,
  route: routeTemplate,
  default: defaultFileTemplate,
};

export async function generateFile(
  type: string,
  filePath: string,
  fileTemplate: string,
  fileExtension = ".tsx",
  name: string = "",
  customType: string = ""
): Promise<boolean> {
  const fileName = `${type}${fileExtension}`;
  const pathToCreateFile = path.join(filePath, fileName);
  const templateContent =
    fileTemplate || defaultTemplates[type || customType](name);

  try {
    await fs.ensureDir(filePath);
    const fileExists = await fs.pathExists(pathToCreateFile);
    if (fileExists) {
      return false;
    }

    await fs.writeFile(pathToCreateFile, templateContent, { encoding: "utf8" });
    return true;
  } catch (error) {
    throw new Error(
      `Error creating file: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
