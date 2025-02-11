const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        
    },
    baseUrl: 'https://web-cdn.api.bbci.co.uk/wc-poll-data/container'
  },
});


    

