import { ZiacomAppPage } from './app.po';

describe('ziacom-app App', () => {
  let page: ZiacomAppPage;

  beforeEach(() => {
    page = new ZiacomAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
