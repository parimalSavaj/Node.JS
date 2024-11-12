> it's also call diff type of module. it's not module system!

## 1. User modules or packages.

- jab hame koe module create kar te he and export kar k used kar te vah safi User module kah te he.

## 2. Native ( Core ) modules or packages.

- jab Node.JS download kar te he tab Node k sath kush module aate he uche ham Native or Core module kah te he.

- Ex:-

```JS
const fs = require('fs');
```

- yah fs module ham ne nahi write ki he but Node k sath aati he; yah module Node jaha install he vaha stored hota he.

- for same best practice hame jab Core module ko import kare ge tab "node:fs" kar ke import kare ge ( this is best practice ).

```JS
import fs from 'node:fs';
```

- do not write full path of this modules.

## 3. NPM modules or packages.

- those modules which are present inside node_modules folder are called npm modules.

- create my own npm module. see `My_Own_NPM_Module` folder.
