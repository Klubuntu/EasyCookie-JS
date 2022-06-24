/* EasyCookie v2 [Rewrited] */
/* Created by Klubuntu */
/* Source Code: https://github.com/Klubuntu/EasyCookieJS */


//easyCookieInterpreter
function eCI(cmd, arg1 = "", arg2 = "") {
    msg = "[EasyCookie] ";
    function addCookie() {
        name = arg1
        val = arg2
        console.warn(name + " " + val)
        if (!name == "" || !name == null) {
            if (!val == "" || !val == null) {
                let usrcookie = getCookie(get = 1);
                if (usrcookie != "") {
                    console.log(msg + "Cookie " + name + " has been already created")
                } else {
                    if (name != "" && [name] != null) {
                        document.cookie = name + "=" + val
                        console.log(msg + "Cookie " + name + " has been created")
                    }
                };
            }
            else {
                console.warn(msg + "Cookie value no set")
            }
        }
        else {
            console.warn(msg + "Cookie name no set")
        }
    }
    function getCookie(get = 0) {
        name = arg1
        console.warn(name + " " + val)
        if (!name == "" || !name == null) {
            //cname = cookiename
            cname = name;
            let tmpName = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(tmpName) == 0) {
                    xcookie = c.substring(tmpName.length, c.length);
                    return c.substring(tmpName.length, c.length);
                }
            }
            if (get == 0) {
                return msg + "Cookie " + name + " no exists";
            }
            else if (get == 1) {
                return "";
            }

        }
        else {
            console.warn(msg + "Cookie name no set")
        }
    }
    function editCookie() {
        name = arg1
        val = arg2
        console.warn(name + " " + val)
        if (!name == "" || !name == null) {
            if (!val == "" || !val == null) {
                let usrcookie = getCookie(get = 1);
                if (usrcookie != "") {
                    document.cookie = document.cookie = name + "=" + val;
                } else {
                    if (name != "" && [name] != null) {
                        console.log(msg + "Cookie ", name, " not found.")
                    }
                }
            }
            else {
                console.warn(msg + "Cookie value no set")
            }
        }
        else {
            console.warn(msg + "Cookie name no set")
        }
    }
    function delCookie() {
        name = arg1
        console.warn(name + " " + val)
        if (!name == "" || !name == null) {
            let usrcookie = getCookie(get = 1);
            if (usrcookie != "") {
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            } else {
                if (name != "" && [name] != null) {
                    console.log(msg + "Cookie ", name, " not found.")
                }
            }
        }
        else {
            console.warn(msg + "Cookie name no set")
        }
    }

    function version(){
        return(
            msg + "Version 2.0 [Rewrited]" + "\n" + "Check new release on https://github.com/Klubuntu/EasyCookieJS"
        )
    }


    if (cmd == "add") {
        addCookie();
    }
    else if (cmd == "get") {
        getCookie();
    }
    else if (cmd == "edit") {
        editCookie();
    }
    else if (cmd == "del") {
        delCookie();
    }
    else if(cmd == "ver"){
        console.log(version());
    }
    else {
        return msg + "Unknown Command";
    }
}



//define main function
var easycookie = (function () {
    return {
        add: function (name, val) { return eCI("add", name, val) },
        edit: function (name, val) { return eCI("edit", name, val) },
        del: function (name) { return eCI("del", name) },
        get: function (name) { return eCI("get", name) },
        ver: function () { eCI("ver") },
        // popular aliases
        set: function (name, val) { return eCI("add", name, val) },
        change: function (name, val) { return eCI("edit", name, val) },
        rem: function (name) { return eCI("del", name) },
        remove: function (name) { return eCI("del", name) },
        rm: function (name) { return eCI("del", name) },
        check: function (name) { return eCI("get", name) },
        version: function () { eCI("ver") },
        about: function () { eCI("ver") },
    };
})();