var Hello = {
    // message: 'Hello',
    // greeting() {
    //     return `this.message ${this.getName()}`;
    // },
    // getName() {
    //     return 'World';
    // }
    getName() {
        const req = new XMLHttpRequest();
        req.open('GET', 'http://name', true);
        req.send(null);
        return 'World';
    }
};