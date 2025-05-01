
/*function addTopBar() {
    var inserter = new JSONInserter();
    inserter.set("topBar", "/assets/JSON/topBar.json");
    inserter.insert();
}*/

async function addTopBar() {
    var inserter = new FileInserter();
    await inserter.set("top-bar","./../assets/content/topBar.html");
    inserter.insert();
}

/*function fillInData() {
    $.ajax({
        async: false,
        url: "/assets/JSON/data.json",
        success: function(jd) {
            var inserter = new Inserter();
            inserter.ignoreNotPresent = true;
            inserter.set("businessName", jd.data.name);
            inserter.insert();
        }
    });
}*/

addTopBar();
fillInData();
