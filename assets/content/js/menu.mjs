
export async function addMenuTxt() {
    var menuTxt = await fetch("/assets/content/txt/menu.txt")
        .then((res) => res.text())
        .then((text) => {
            var resultText = "";
            for (var i = 0; i < text.length; i++) {
                if(text[i] == '\n') {
                    resultText += "<br>"
                } else {
                    resultText += text[i];
                }
            }
            return resultText;
        })
        .catch((e) => console.error(e));
    var menus = document.getElementsByName("menu-txt");
    menus.forEach(function(menu) {
        menu.innerHTML = menuTxt;
    });
}
