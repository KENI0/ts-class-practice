"use strict";
class apple {
    fruit() {
        console.log('fruits yummy', apple.BANANA);
    }
    change() {
        apple.BANANA = "honey";
    }
}
apple.BANANA = "salty";
const a = new apple();
a.fruit();
a.change();
const b = new apple();
b.fruit();
