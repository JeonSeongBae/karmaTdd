// describe('Hello모듈의', () => {
//     describe('greeting함수는', () => {
//         it('getName 함수를 호출한다', () => {
//             spyOn(Hello, 'getName');
//             Hello.greeting();
//             expect(Hello.getName).toHaveBeenCalled;
//         })
//     })
// });
describe('Hello', () => {
    describe('getName함수는', () => {
        let request;

        beforeEach(()=>{
            jasmine.Ajax.install();
            Hello.getName();
            request = jasmine.Ajax.requests.mostRecent();
        });
        afterEach(()=> jasmine.Ajax.uninstall());

        it('HTTP 요청을 보낸다', () => {
            const expectUrl = 'http://name';
            expect(request.url).toBe(expectUrl);
        });
    });
});