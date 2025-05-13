import {FileInserter} from "/js/FileInserter.mjs";

export async function addTopBar() {
  var inserter = new FileInserter();
  await inserter.set("top-bar", "/assets/content/topBar.html");
  inserter.insert();
}
