import {Inserter} from "/js/Inserter.mjs";

/*
This Code was written by Samuel Brecht (Kleefuchs) in 2024 pls contact him if you want to use it.
*/

/*
This code requires Inserter
*/

export class FileInserter extends Inserter {
  async set(name, path) {
    await fetch(path)
      .then((res) => res.text())
      .then((text) => {
        this.entries.set(name, text);
      })
      .catch((e) => console.error(e));
  }
}
