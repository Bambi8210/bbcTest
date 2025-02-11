const api = '/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';
const testHarness = "true";

//Test scenario for x-test-harness header verification
async function testXTestHarness() {
    try {
        // Step 1: Make GET request with x-test-harness header set to true
        const response = await fetch({
          url:api,
          method: 'GET',
          headers: {
              'x-test-harness': testHarness
            }
        });

        // Step 2: Verify the x-test-harness header in the response
        const responseHeaders = response.headers;
        const testHarnessHeader = responseHeaders.get('x-test-harness');

        // Log the results
        console.log('Response Status:', response.status);
        console.log('x-test-harness header value:', testHarnessHeader);

        // Verify the header is set correctly
        if (testHarnessHeader === 'true') {
            console.log('✅ Test passed: x-test-harness header is correctly set to true');
            return true;
        } else {
            console.log('❌ Test failed: x-test-harness header is not set to true');
            console.log('Actual value:', testHarnessHeader);
            return false;
        }

    } catch (error) {
        console.error('Error during test execution:', error);
        return false;
    }
}

  //run the test
describe('test api scenario 5', () => {
  it('should set and check x test harness set to true', () => {
    testXTestHarness().then((result) => {
      console.log('Test Result:', result ? 'Pass' : 'Fail');
    }).catch((error) => {
      console.error('Error:', error);
    })
  }) 
})
