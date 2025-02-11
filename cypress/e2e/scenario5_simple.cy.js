const api = '/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';
const testHarness = "true";
 
describe('test api scenario 5', () => {
  it('should set and check x test harness set to true', () => {
    cy.request({
      url:api, 
      headers:{"x-test-harness": testHarness}
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.headers['x-test-harness']).to.eq(testHarness);
      })
    })

    it('should check response headers', () => {
      cy.request({
        url:api, 
        headers:{"x-test-harness": testHarness}
        })
  .then(response => {
    expect(response.status).to.equal(200)  
  })
  .then(response => response.headers)      // convert response to response.headers
  .as('headers')

cy.get('@headers')
  .then(headers => {
    console.log(headers)
  })
})
})
