const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jmsg8d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "./cypress/tests/**.*",
    // baseUrl: "https://the-internet.herokuapp.com/",
    baseUrl: "https://www.amazon.com/",
  },
  
});
