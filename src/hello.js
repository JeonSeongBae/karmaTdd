var Hello = {
    // message: 'Hello',
    // greeting() {
    //     return `this.message ${this.getName()}`;
    // },
    // getName() {
    //     return 'World';
    // }
    getName(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'http://name', true);
        req.onreadystatechange = function () {
            if(req.readyState == 4){
                if(req.status == 200){
                    cb(req.responseText);
                } else {
                    cb("ajax error");
                }
            }
        };
        req.send(null);
        return 'World';
    }
};