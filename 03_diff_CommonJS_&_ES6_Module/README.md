| NO. | Common JS                                                         | ES6                                                           |
| --- | ----------------------------------------------------------------- | ------------------------------------------------------------- |
| 1.  | Synchronous file loading                                          | Asynchronous file Loading                                     |
| 2.  | file extension optional                                           | file extension mandatory                                      |
| 3.  | any file load in side command js                                  | only js file load                                             |
| 4.  | for optional to set "type":"commonJS                              | write "type":"module" is side package.json                    |
| 5.  | in side cjs `this` points to `module.exports`                     | in side mjs `this` is `undefined`                             |
| 6.  | require is not hoisted so it's not run first                      | import is hoisted so fist run import key word file            |
| 7.  | not used top level await                                          | top level await used                                          |
| 8.  | only one valued export ( multiple value using object )            | multiple value export                                         |
| 9.  | file and directory name access using `__filename` and `__dirname` | access using `import.meta.filename` and `import.meta.dirname` |
| 10. | strict mode is not enabled by default                             | strict mode is enabled by default                             |
