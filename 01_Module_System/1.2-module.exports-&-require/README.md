### `1.` module.exports and require

> This way is call `CommonJS module system.`

first write your code or function you want export file.

```JS
 module.exports = function () {

    return "Your notes...";
};
```

now used this function on other file.

```JS
let getNotes = require("./notes.js");

console.log(getNotes());

```

> more details of CommonJS module system.

- typeof require and module.exports is function and object.

- `require & module.exports`:-

  - require ka type chak kare to function aata he to ab ham require function kya return kar ta he, kya argument leta he, ae safi dekh te he. !

  - require function string argument me leta he; yah string ak path ko represent kar ta he, aa path ak file k hota he; agar path me digae file nahi milti he to "module not found" ki error aati he.

  - ager require function ki argument me diya gaya path valid he to vah file to run kara jata he.

  - ab require function module.exports name se return karte he vah value hame require function se return hokae variable me stored hoti he.

  - ab require ak function he and module.exports ak return ka km kar ta he but return ki tarah next lines ko stoped nahi kar ta. agar module file me module.exports na ho to {} 'empty object' ko return kar ta he.

  - module file me last me module.exports ki jo value hoti he vah require function return kar ta he.

  - this method for module is synchros the code. not import/export file.

---

---
