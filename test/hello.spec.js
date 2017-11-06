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
        let request,
            callbackSpy;

        beforeEach(()=>{
            jasmine.Ajax.install();
            callbackSpy = jasmine.createSpy('callback');
            Hello.getName(callbackSpy);
            request = jasmine.Ajax.requests.mostRecent();
            request.respondWith({});
        });
        afterEach(()=> jasmine.Ajax.uninstall());

        it('HTTP 요청을 보낸다', () => {
            const expectUrl = 'http://name';
            expect(request.url).toBe(expectUrl);
        });
        it('http 응답이 오면 콜백함수를 실행한다.', ()=>{
            expect(callbackSpy).toHaveBeenCalled();
        });
    });
});