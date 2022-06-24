/* EasyCookie v1 [First Version] */
/* Created by Klubuntu */
/* Source Code: https://github.com/Klubuntu/EasyCookieJS */


function easycookie(cmd, params, params2) {
    sel = "[EasyCookie] "
    if (cmd == "add") {
        if (params == "") {
            console.log(sel + "Invalid Selector [param1]");
        } else {
            if (params2 == "") {
                console.log(sel + "Invalid Selector [param2]");
            } else {
                let usrcookie = easycookie("get", params);
                if (usrcookie != "") {
                    console.log(sel + "Cookie " + params + " is created")
                } else {
                    if (params != "" && [params] != null) {
                        document.cookie = params + "=" + params2
                    }
                };
            }
        }

    }
    if (cmd == "edit") {
        if (params == "") {
            console.log(sel + "Invalid Selector [param1]");
        } else {
            if (params2 == "") {
                console.log(sel + "Invalid Selector [param2]");
            } else {
                let usrcookie = easycookie("get", params);
                if (usrcookie != "") {
                    document.cookie = document.cookie = params + "=" + params2;
                } else {
                    if (params != "" && [params] != null) {
                        console.log(sel + "Cookie ", params, " not found.")
                    }
                }
            }
        }
    }
    if (cmd == "get") {
        if (params == "") {
            console.log("Invalid Selector [param1]");
        } else {
            if (params2) {
                console.log("No requiments [param2]");
            } else {
                cname = params;
                let name = cname + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        xcookie = c.substring(name.length, c.length);
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
        }
    }
    if (cmd == "del") {
        if (params == "") {
            console.log(sel + "Invalid Selector [param1]");
        } else {
            if (params2) {
                console.log(sel + "No requiments [param2]");
            } else {
                let usrcookie = easycookie("get", params);
                if (usrcookie != "") {
                    document.cookie = params + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                } else {
                    if (params != "" && [params] != null) {
                        console.log(sel + "Cookie ", params, " not found.")
                    }
                }
            }
        }
    }
    if (cmd == "set") {
        easycookie("add", params, params2);
    }
    if (cmd == "rem") {
        easycookie("del", params);
    }
    if (cmd == "remove") {
        easycookie("rem", params);
    }
    if (cmd == "ver") {
        console.log(sel, "Version 1.0 [Beta]")
    }
}