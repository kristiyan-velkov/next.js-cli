[![Follow me](https://img.shields.io/badge/sponsors-99+-orange.svg)](https://github.com/kristiyan-velkov) [![Sponsors](https://img.shields.io/badge/Follow-120-blue?logo=github&style=social.svg)](https://github.com/kristiyan-velkov) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) [![Node Version](https://img.shields.io/badge/node-%3E%3D%2020.0.0-brightgreen.svg)](https://nodejs.org/en/)

<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./next-js-cli.png">
      <img src="./next-js-cli.png" height="128">
    </picture>
</p>

**Next.js CLI** is a powerful command-line interface tool designed to accelerate the development of Next.js applications by automating the generation of common file types, such as **pages, layouts**, **templates, errors, middlewares and more**.

Built with ease of use in mind, it streamlines the setup of new routes and components, allowing developers to focus on building their applications faster.

---

## Table of contents

- [Installation 🔋](#installation)
- [Commands and Usage 💻](#commands-and-usage)
- [Commands Details 📋](#commands-details)
- [Developer Support 🔗 ](#developer-support)
- [Contributing 🦾](#contributing)
- [Support my work ❤️ ](#support-my-work)

---

## Installation

To use Next JS CLI, you need to have Node.js installed on your system. Once Node.js is installed, you can install next-cli globally using npm:

```txt
npm install -g next-cli-turbo
```

Or if you prefer using Yarn:

```txt
yarn global add next-cli-turbo
```

## Commands and Usage

`next-cli` is a powerful CLI tool designed for Next.js.
Below is a summary of the commands you can use:

| Command                 | Alias                  | Arguments       | Description                                                                                                                    |
| ----------------------- | ---------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `init`                  | `i`                    | `<name>`        | Create a new Next.js App. Requires the name of the project.                                                                    |
| `generate all`          | `g a`                  | `<name> [path]` | Generate a new Next.js App routes with all files. Requires the name of the folder and optionally the path to create the route. |
| `generate`              | `g name path --option` | `<name> [path]` | Generate specific Next.js App files. Requires the name of the folder and optionally the path. Supports multiple options.       |
| `generate page`         | `g p`                  | `<name> [path]` | Generate a new Next.js Page. Requires the name of the page and optionally the path.                                            |
| `generate layout`       | `g l`                  | `<name> [path]` | Generate a new Next.js Layout. Requires the name of the layout and optionally the path.                                        |
| `generate loading`      | `g load`               | `<name> [path]` | Generate a new Next.js loading.tsx file. Requires the name of the layout and optionally the path.                              |
| `generate error`        | `g err`                | `<name> [path]` | Generate a new Next.js error.tsx file. Requires the name of the error file and optionally the path.                            |
| `generate template`     | `g t`                  | `<name> [path]` | Generate a new Next.js tempate.tsx file. Requires the name of the template and optionally the path.                            |
| `generate not-found`    | `notf`                 | `<name> [path]` | Generate a not-found.tsx file. Requires the name and optionally the path.                                                      |
| `generate global-error` | `g gerr`               |                 | Generate a global-error.tsx file in the root directory. No arguments required.                                                 |
| `generate middleware`   | `g m`                  |                 | Generate a middleware.tsx file. No arguments required.                                                                         |

## Commands Details

### init

The `init` command is used to create a new Next.js application. It requires a single argument:

- `<name>`: Name of the project to create.

**Example usage**:

```
nc init my-next-app
nc i my-next-app
```

### generate all / g a

The generate all command has been augmented to automatically create a set of predefined files (**page, layout, loading, error, not-found**) for a new route. This is useful for quickly scaffolding the basic structure of a route within a Next.js application.

The `generate all` command is used to generate all the files for a new route in a Next.js application. It requires the following arguments:

- `<name>`: Name of the Folder where the route will be created.
- `[path]`: Optional. The path where the route will be created. If not provided, the current directory is used.

**Example usage**:

```
nc generate all users
nc g a users
```

### generate / g

This command has been extended to support the generation of specific files within a Next.js application. Users can specify which files they want to generate using options.

The `generate` it requires the following arguments:

nc generate [name] [path] --option

- `<name>`: Name of the Folder where the route will be created.
- `[path]`: Optional. The path where the route will be created. If not provided, the current directory is used.
- `--option` - anything from the list:
  - `---page`, `-p`: Generate a page.tsx file.
  - `--layout`, `-l`: Generate a layout.tsx file.
  - `--loading`, `--load`: Generate a loading.tsx file.
  - `--error`, `--err`: Generate an error.tsx file.
  - `--globalError`, `--gerr`: Generate a global error.tsx file in the root directory.
  - `--not-found`, `--notf`: Generate a not-found.tsx file.
  - `--template`, `-t`: Generate a template.tsx file.
  - `--middleware`, `-m`: Generate a middleware.tsx file.

**Example usage**:

1. Generate page, layout and loading files.

```
nc generate dashboard dashboard --page --layout --loading
nc g dashboard dashboard --p --l --load
```

2. Generate page.tsx, error.tsx, not-found.tsx files

```
nc generate dashboard dashboard --page --error --not-found
nc g dashboard dashboard --p --err --notf
```

- If any file of the options above already exists the command to creat new one will be skiped.

### generate page / g p

This command simplifies the creation of individual pages within a Next.js application by specifying the name of the page and, optionally, the path where it should be created. If the path is not provided, a default location can be used based on the tool's configuration or the current directory.

- `<name>`: Name of the Folder where the page will be created.
- `[path]`: Optional. The path where the page will be created. If not provided, the current directory is used.

**Example usage**:

```
nc generate page users
nc g p users
```

### generate layout / g l

This command is tailored for creating layout components, which serve as templates for various parts of a Next.js application, ensuring consistency across different pages. By specifying the name of the layout and, optionally, the path, developers can quickly scaffold necessary layout components.

- `<name>`: Name of the Folder where the layout will be created.
- `[path]`: Optional. The path where the layout will be created. If not provided, the current directory is used.

**Example usage**:

```
nc generate layout users
nc g l users
```

### generate loading / g load

This command is tailored for creating loading components.

- `<name>`: Name of the Folder where the loading.tsx will be created.
- `[path]`: Optional. The path where the loading.tsx will be created. If not provided, the current directory is used.

**Example usage**:

```
nc generate loading users
nc g l users
```

### generate error / g err

Create error.tsx file.

- `<name>`: Name of the Folder where the error.tsx will be created.
- `[path]`: Optional. The path where the error.tsx will be created. If not provided, the current directory is used.

**Example usage**:

```
nc generate error users
nc g err users
```

### generate template / g template

Create template.tsx file.

- `<name>`: Name of the Folder where the error.tsx will be created.
- `[path]`: Optional. The path where the error.tsx will be created. If not provided, the current directory is used.

**Example usage**:

```
nc generate template users
nc g t users
```

### generate not-found / g notf

Generate not-found.tsx file.

- `<name>`: Name of the Folder where the not-found.tsx will be created.
- `[path]`: Optional. The path where the not-found.tsx will be created. If not provided, the current directory is used.

**Example usage**:

```
nc generate not-found users
nc g notf users
```

### generate global-error / g gerr

Generate global-error.tsx file in the root of the project.

**Example usage**:

```
nc generate global-error
nc g gerr
```

### generate middleware / g m

Generate middleware.tsx file.

**Example usage**:

```
nc generate middleware
nc g m
```

---

## Developer Support:

- If you saw some issue/bug 🐛 related to the specific release version.
- If you want some new feature or change to be added/implemented. 😊

Please, contact the creator of the **Next CLI**, so he will be able to fix or improve it:

**Kristiyan Velkov**

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristiyan-velkov-763130b3/) [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/kristiyan-velkov)

**Take a look my blog in Medium**: [Kristiyan Velkov](https://medium.com/@kristiyan.velkov)

---

## Support my work

If you like my work and want to support me to work harder, please donate via

<a href="https://revolut.me/kristiyanvelkov" title="Link to Revolut">Revolut</a> | <a href="https://www.buymeacoffee.com/kristiyanVelkov" title="Link to Buy me a coffee">Buy me a coffee</a>

Thanks a bunch for supporting me! 😍

---

## Contributing

Contributions are welcome! If you have suggestions for improving `next CLI`, please open an issue or submit a pull request.

---
