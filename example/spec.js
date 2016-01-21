/**
 * Created by xinhua on 16-1-20.
 */
describe('angularjs homepage', function() {
    it('should have a title', function() {
        browser.get('http://54.174.43.162:3000/');


        expect(browser.getTitle()).toEqual('新华联合运输和承运商管理系统');
    });
});