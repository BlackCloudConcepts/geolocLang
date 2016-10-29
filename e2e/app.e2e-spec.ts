import { GeolocLangPage } from './app.po';

describe('geoloc-lang App', function() {
  let page: GeolocLangPage;

  beforeEach(() => {
    page = new GeolocLangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
