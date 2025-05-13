import {FileInserter} from "/js/FileInserter.mjs";
import { initImageViewer } from "/assets/content/js/pictures.mjs";
import { addTopBar } from "/assets/content/js/topbar.mjs";

async function addContents() {
  var inserter = new FileInserter();
  await inserter.set("introduction", "/assets/content/introduction.html");
  await inserter.set("pictures", "/assets/content/pictures.html");
  await inserter.set("customer-testimonials", "/assets/content/customer-testimonials.html");
  await inserter.set("menu", "/assets/content/menu.html");
  await inserter.set("location", "/assets/content/location.html");
  await inserter.set("data", "/assets/content/data.html");
  await inserter.set("authors", "/assets/content/authors.html");
  inserter.insert();
}

addTopBar();
await addContents();
initImageViewer();
