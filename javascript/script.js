for (let prop in window) {
       if (prop.substr(0, 2) == "on") {
            document.addEventListener(prop.substr(2), function (e) {
                console.log(e.type);
            });
        }
    }

document.getElementById()
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()


