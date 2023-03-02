/* EasyCookie.js v3.1 [Rewrited Class Edition] */
/* Changes: Added prefix for "easycookie" & add more aliases */
/* Created by Klubuntu */
/* Source Code: https://github.com/Klubuntu/EasyCookie.js */

const $prefix = '[EasyCookie] ';

class EasyCookie {
    static add(cookieName, cookieValue){
        try{
      	  document.cookie =  cookieName + "=" + cookieValue +  "; expires=Thu, 31 Dec 2023 23:59:00 UTC";
          return $prefix + cookieName +  " created";
        }
        catch{
          return $prefix + "invalid cookie name or value";
	    }
    }
    static get(cookieName){
    	const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    static edit(cookieName, cookieValue){
        return this.add(cookieName, cookieValue);
    }

    static remove(cookieName){
        try{
            document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            return $prefix + cookieName + " deleted"
      }
        catch{
            return $prefix +  "Problem with delete cookie " + cookieName
      }
    }

    /* Setup Aliases */
                
    static create(cookieName){
        return this.add(cookieName);
    }  	        
    static set(cookieName){
        return this.add(cookieName);
    }  	        
    static change(cookieName){
        return this.edit(cookieName);
    }  	    
    static find(cookieName){
        return this.check(cookieName);
    }
    static delete(cookieName){
        return this.remove(cookieName);
    }  	
    static del(cookieName){
        return this.delete(cookieName);
    }
}
easycookie = EasyCookie
