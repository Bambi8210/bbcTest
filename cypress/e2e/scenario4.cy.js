const api3 = '/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nat';

describe('test api scenario 4', () => {
  it('should return status 404 for non existent endpoint', () => {
      cy.request({url: api3, failOnStatusCode: false}).then((response) => {
      expect(response.status).to.eq(404);
  });
})
})
