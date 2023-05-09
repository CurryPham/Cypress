const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '167q5u',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    projectId: "cypress",
    specPattern: "./cypress/tests/**.*",
    baseUrl: "https://the-internet.herokuapp.com/",
  },
  
});
