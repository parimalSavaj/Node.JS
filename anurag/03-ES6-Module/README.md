> Node.JS me second module system he import / export.

normally ham browser me import/export used kar te he to script me `type = "module"` likh te he.

to same Node.JS me hame package.json me `"type":"module"` lakh kar used kar sak te he.

- jab hame ES6 module used kar te he tab `local scope` nahi ban ta easke badale `module scope` ban ta he.

- ab `local scope` nahi banata he to Other variable bhi nahi bane ge and ham used bhi nahi kar sak te.

- ham `import.meta` ka used kar ke filename and dirname ka path find kar sak te he.

- but this import.meta ham only used in side module not for command js file.