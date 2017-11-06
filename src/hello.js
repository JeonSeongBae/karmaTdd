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
        req.onreadystatechange = cb;
        req.send(null);
        return 'World';
    }
};