# what is module for Node.JS

- when i install Node.JS these are built-in modules come with Node.JS like `fs`, `http`, `path`.

- **`built-in modules is not do all thing so we used Packages`** (this thing learn inside 04_Type_of_Package_System)

---

---

# what is Package ?

- package is code

- it's means package is one type of code jo pahle kisi ne write kiya tha bas.

# what is Package Manager for Node.JS ?

- there are mainly three Package Manager for Node.JS (npm, yarn, pnpm)

- Package Manager it's handle different packages

> `example`

> i write code for the email validation and i upload on npm to any other not write my same code but used directly my installing this package; so this is package and Manager.

---

---

# Before used package of npm

- before used npm package we write on command inside the command line

```cmd
npm init
npm init -y
```

> this command do one `package.json` file for handle packages.

![](./img/package_json_file.png)

---

---

# used one package

first install one package name `validator` (this package validate any this with is method).

```cmd
npm i validator
```

now import this package using `require` and used this page.

```JS
const validator = require("validator");

console.log(validator.isEmail("OKw9@Eexample.com"));
```

---

---

# what happen when install package ?

`1.`

- when install package one folder create `node_modules`, this folder manage package.

- in side this node_modules folder create package name folder.

```cmd
npm i validator@13.12.0
```

> this create one folder `node_modules`, in side this folder one `validator` creates.

`2.`

- second thing happen one `package-lock.json` file create, this file handle `Version Control`.

---

---

# After installing package how to used this package ?

- we need to import this package.

```JS
 // not ES6
 const validator = require("validator");

 // ES6
 // using this ES6 we need to write in side package.json to "type": "module".
 import validator from './validator'
```

- after importing we used this package by it's importing name.

---

---

**`summary`**

[youTube link](https://www.youtube.com/watch?v=jHDhaSSKmB0)

> what is `package.json` and what do ?

- when you install any package this file is created.

- this file handle `meta date` about the project, list of packages we used in side this project it's called `Dependencies`, `scripts` how to run this project this type information, `DevDependencies` only needed during development. They are typically tools or libraries that help you write and test code, but are not required for the app to run in production.

> what is node_modules and what do ?

- It is automatically created when you install packages using npm.

- it's `Storage for Package`.

- `Dependency Management`: It holds all the third-party libraries and frameworks that your project depends on. This allows you to utilize external code without having to write everything from scratch.

> what is `package-lock.json` and what do ?

- `Dependency Snapshot, Version Locking, Faster Installations, More Reliable Builds, Full Dependency Tree`.
