const api = '/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';

  describe('test api scenario 1', () => {
    it('should return status 200 for valid GET request in less than 1000ms', () => {
        cy.request(api).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.duration).to.not.be.greaterThan(1000)
    });
  })
})
