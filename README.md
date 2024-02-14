# Next-CLI

[![Follow me](https://img.shields.io/badge/sponsors-99+-orange.svg)](https://github.com/kristiyan-velkov) [![Sponsors](https://img.shields.io/badge/Follow-120-blue?logo=github&style=social.svg)](https://github.com/kristiyan-velkov) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) [![Node Version](https://img.shields.io/badge/node-%3E%3D%2020.0.0-brightgreen.svg)](https://nodejs.org/en/)

**next-cli** is a powerful command-line interface tool designed to accelerate the development of Next.js applications by automating the generation of common file types, such as **pages, layouts**, **loading components, and more**.

Built with ease of use in mind, it streamlines the setup of new routes and components, allowing developers to focus on building their applications faster.

---

## Table of contents

- [Installation 🦾](#installation)
- [Next-CLI Commands? 💻](#next-cli-commands)
- [Developer Support 🔗 ](#developer-support)
- [Contributing 🦾](#contributing)
- [Support my work ❤️ ](#support-my-work)

---

## Installation

To use next-cli, you need to have Node.js installed on your system. Once Node.js is installed, you can install next-cli globally using npm:

```txt
npm install -g next-cli
```

Or if you prefer using Yarn:

```txt
yarn global add next-cli
```

## Commands and Usage

`next-cli` is a powerful CLI tool designed for Next.js.
Below is a summary of the commands you can use:

| Command        | Alias  | Arguments       | Description                                                                                                                    |
| -------------- | ------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `init`         | `-i`   | `<name>`        | Create a new Next.js App. Requires the name of the project.                                                                    |
| `generate all` | `-all` | `<name> [path]` | Generate a new Next.js App routes with all files. Requires the name of the folder and optionally the path to create the route. |

## Commands Details

### init

The `init` command is used to create a new Next.js application. It requires a single argument:

- `<name>`: Name of the project to create.

Example usage:

```
next-cli init "My Next App"
```

### generate all

The `generate all` command is used to generate all the files for a new route in a Next.js application. It requires the following arguments:

- `<name>`: Name of the Folder where the route will be created.
- `[path]`: Optional. The path where the route will be created. If not provided, the current directory is used.

Example usage:

```
next-cli generate all "Blog" "/blog"

```

---

## Developer Support:

- If you saw some issue/bug 🐛 related to the specific release version.
- If you want some new feature or change to be added/implemented. 😊

Please, contact the creator of the **next-cli**, so he will be able to fix or improve it:

**Kristiyan Velkov**

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kristiyan-velkov-763130b3/) [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/christiyan14)

---

## Support my work

If you like my work and want to support me to work harder, please donate via

<a href="https://revolut.me/kristiyanvelkov" title="Link to Revolut">Revolut</a> | <a href="https://www.buymeacoffee.com/kristiyanVelkov" title="Link to Buy me a coffee">Buy me a coffee</a>

Thanks a bunch for supporting me! 😍

---

## Contributing

Contributions are welcome! If you have suggestions for improving `next-cli`, please open an issue or submit a pull request.

---
