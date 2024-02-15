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
- [How to Create a File? 🪧](#how-to-create-a-file)
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

| Command                     | Alias               | Arguments         | Description                                                                                                              |
| --------------------------- | ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `init`                      | `i`                 | `<projectName>`   | Create a new Next.js App. Requires the name of the project.                                                              |
| `generate [path] --options` | `g [path] --option` | `[path] --option` | Generate specific Next.js App files. Requires the name of the folder and optionally the path. Supports multiple options. |
| `generate root --options`   | `g -r --options`    | `--options`       | Generate middleware.tsx or global-error.tsx in the app folder root.                                                      |

## Commands Details

### init

The `init` command is used to create a new Next.js application. It requires a single argument:

- `<projectName>`: Name of the project to create.

**Example usage**:

```
nc init my-next-app
nc i my-next-app
```

### generate [path] -all / g [path] -a

The generate all command has been augmented to automatically create a set of predefined files (**page, loading, error, not-found**) for a new route. This is useful for quickly scaffolding the basic structure of a route within a Next.js application.

Requires the following arguments:

- `[path]`: The path where the files will be created.
- `--option` - anything from the list:
  - `-a`, `--all`,: Generate page.tsx, error.tsx, loading.tsx, not-found.tsx files.
  - `-n`, `--name`: Special name for the files **page.tsx, loading.tsx**.
    - Default names: Page, Loding.

**Example usage**:

```
nc generate --all users
nc g -a users
```

**Result**:

```js
-app
--users
---page.tsx
---error.tsx
---not-found.tsx
---loading.tsx
```

### generate / g

This command has been extended to support the generation of specific files within a Next.js application. Users can specify which files they want to generate using options.

The `generate` it requires the following arguments:

```
nc generate [path] --option --option
```

- `[path]`: The path where the files will be created.
- `--option` - anything from the list:
  - `-a`, `--all`,: Generate page.tsx, error.tsx, loading.tsx, not-found.tsx files.
  - `-n`, `--name`: Special name for the files page.tsx, loading.tsx,layout.tsx and template.tsx files.
  - `-p`,`---page`,: Generate a page.tsx file.
  - `-l`,`--layout`, : Generate a layout.tsx file.
  - `-load`,`--loading`: Generate a loading.tsx file.
  - `-err`,`--error`, : Generate an error.tsx file.
  - `-g`,`--globalError`: Generate a global-error.tsx file in the root directory.
  - `-not`,`--not-found`: Generate a not-found.tsx file.
  - `-t`,`--template`: Generate a template.tsx file.
  - `-m`,`--middleware`: Generate a middleware.tsx file.

**Example usage**:

1. Generate page, layout and loading files.

```
nc generate dashboard --page --layout --loading
nc g dashboard -p -l -load
```

**Result**:

```js
-app
--dashboard
---page.tsx
---layout.tsx
---loading.tsx
```

2. Generate page.tsx, error.tsx, not-found.tsx files

```
nc generate dashboard --page --error --not-found
nc g dashboard dashboard -p -err -not
```

**Result**:

```js
-app
--dashboard
---error.tsx
---not-found.tsx
```

- If any file of the options above already exists the command to creat new one will be skiped.

## How to create a file?

### Page.tsx - generate [path] --page / g [path] -p

This command simplifies the creation of individual pages within a Next.js application by specifying the path of the page and, optionally, the name where it should be created.

- `[path]`: The path where the files will be created.
- `--option` - anything from the list:
  - `-p`, `--page`,: Generate page.tsx file.
  - `-n`, `--name`: Special name for function in the file **page.tsx**,
    - Default name: Page.

**Example usage**:

```
nc generate users --page
nc g users -p
```

**Result**:

```js
-app
--users
---page.tsx
```

### Layout.tsx - generate [path] --layout / g [path] -l

This command is tailored for creating layout components, which serve as templates for various parts of a Next.js application, ensuring consistency across different pages. By specifying the name of the layout and, optionally, the path, developers can quickly scaffold necessary layout components.

- `[path]`: The path where the files will be created.
- `--option`
  - `-l`, `--layout`,: Generate layout.tsx file.
  - `-n`, `--name`: Special name for function in the file **layout.tsx**,
    - Default name: Layout.

**Example usage**:

```
nc generate users --layout -n Users
nc g users -l -n Users
```

**Result**:

```js
-app
--users
---layout.tsx // name of the function in layout.tsx file - UsersLayout
```

### Loading.tsx - generate [path] --loading / g [path] -load

This command is tailored for creating loading components.

- `[path]`: The path where the files will be created.
- `--option`
  - `-load`, `--loading`,: Generate loading.tsx file.
  - `-n`, `--name`: Special name for function in the file **loading.tsx**,
    - Default name: Loading.

**Example usage**:

```
nc generate users --loading -n Users
nc g users -load -n Users
```

**Result**:

```js
-app
--users
---loading.tsx // name of the function in loading.tsx file - UsersLoading
```

### Error.tsx - generate [path] --error / g [path] -err

Create error.tsx file.

- `[path]`: The path where the files will be created.
- `--option`
  - `-err`, `--error`,: Generate error.tsx file.
    - Default name: Error.

**Example usage**:

```
nc generate users --error
nc g users -err
```

**Result**:

```js
-app
--users
---error.tsx
```

### Template.tsx - generate [path] --template / g [path] -t

Create template.tsx file.

- `[path]`: The path where the files will be created.
- `--option`
  - `-t`, `--template`,: Generate template.tsx file.
    - Default name: Template.

**Example usage**:

```
nc generate users --template
nc g users -t
```

**Result**:

```js
-app
--users
---error.tsx
```

### Not-found.tsx - generate [page] --not-found / g [page] -not

Generate not-found.tsx file.

- `[path]`: The path where the files will be created.
- `--option`
  - `-not`, `--not-found`,: Generate not-found.tsx file.

**Example usage**:

```
nc generate users --not-found
nc g users -not
```

**Result**:

```js
-app
--users
---not-found.tsx
```

### Global-error.tsx - generate root --global-error / g r -g

Generate global-error.tsx file in the root of the project.

**Example usage**:

```
nc generate root --global-error
nc g r -g
```

**Result**

```
-app
--global.tsx
```

### Middleware.tsx - generate root -middleware / g r -m

Generate middleware.tsx file.

**Example usage**:

```
nc generate root --middleware
nc g r -m
```

**Result**

```
-app
--midleware.tsx
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
