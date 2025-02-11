const api = '/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';

describe('test api scenario 2', () => {
  it('should check id is never null', () => {
      cy.request(api).then((response) => {
        expect(response.body).to.have.property('tournaments')
          expect(response.body.tournaments[0]).to.have.property('id')
            expect(response.body.tournaments[0].id).to.not.be.null
  });
})
it('should check participants array contains 6', () => {
  cy.request(api).then((response) => {
      expect(response.body).to.have.property('tournaments')
          expect(response.body.tournaments[0].stages[0].rounds[0]).to.have.property('participants')
          expect(response.body.tournaments[0].stages[0].rounds[0].participants).to.have.length(6)
    }
  )
})
})