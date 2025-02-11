const api2 = '/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:world-cup';

describe('test api scenario 3', () => {
  it('should check a different competition name', () => {
      cy.request(api2).then((response) => {
        expect(response.status).to.eq(200)
       expect(response.body).to.have.property('tournaments')
       expect(response.body.tournaments[0]).to.have.property('name', 'World Cup')
  });
})
})
