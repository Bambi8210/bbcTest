const api = '/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';
const testHarness = "true";

// Test scenario for setting x-test-harness header
async function testSetXTestHarness() {
  try {
      // Step 1: Make GET request with x-test-harness header set to true
      const response = await fetch({
        url:api,
          method: 'GET',
          headers: {
              'x-test-harness': testHarness
          }
      });

      // Log the request details
      console.log('Request sent successfully');
      console.log('Request method:', 'GET');
      console.log('Request headers:', {
          'x-test-harness': 'true'
      });
      
      // Log response status
      console.log('Response status:', response.status);
      
      // Verify request was successful (2xx status code)
      if (response.ok) {
          console.log('✅ Test passed: Request completed successfully');
          return true;
      } else {
          console.log('❌ Test failed: Request failed with status', response.status);
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
    testSetXTestHarness().then((result) => {
      console.log('Test Result:', result ? 'Pass' : 'Fail');
    }).catch((error) => {
      console.error('Error:', error);
    })
  }) 
})
