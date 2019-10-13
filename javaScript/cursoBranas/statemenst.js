var text = "lorem ipsom dolor sit amet,consectetur adicioiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupdate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatar non proident, dunt in culpa qui officia deserunt mollit anim id est laborum";

var HackerTextError = function (message) {
    this.message = message;
    this.name = "HackertextError";

} 

var toHackerCase = function(text) {
    if(!text) throw new HackerTextError("invalid text.");
    if(typeof text != "string") throw new HackerTextError("Invalid Type");
    var hackerTextArray = [];
    var i = 0; 
    while(i < text.length) {
        
    //     if (text.charAt(i) === "o") {
    //         hackerTextArray.push(0);
    //         continue;
    //     }
    //     if (text.charAt(i) === "l") {
    //         hackerTextArray.push(1);
    //         continue;
    //     }
    //     if (text.charAt(i) === "e") {
    //         hackerTextArray.push(3);
    //         continue;
    //     }
    //     if (text.charAt(i) === "a") {
    //         hackerTextArray.push(4);
    //         continue;
    //     }
    //     if (text.charAt(i) === "s") {
    //         hackerTextArray.push(5);
    //         continue;
    //     }
    //     if (text.charAt(i) === "t") {
    //         hackerTextArray.push(7);
    //         continue;
    //     }
    //     hackerTextArray.push(text.charAt(i));
    // }
        switch(text.charAt(i)) {
            case "o":
                hackerTextArray.push(0);
                break;
            case "l":
                hackerTextArray.push(1);
                break;
            case "e":
                hackerTextArray.push(3);
                break;
            case "a":
                hackerTextArray.push(4);
                break;
            case "s":
                hackerTextArray.push(5);
                break;
            case "t":
                hackerTextArray.push(7); 
                break;           
            default:
                hackerTextArray.push(text.charAt(i));
            
        }
        i++;
    }
    return hackerTextArray.join("");
};
try {
    console.log(toHackerCase());    
} catch (e) {
    console.log("Erro:" + e.message + " " + e.name);    
} 
try {
    console.log(toHackerCase(10));    
} catch (e) {
    console.log("Erro:" + e.message + " " + e.name);    
}

console.log(toHackerCase(text));
