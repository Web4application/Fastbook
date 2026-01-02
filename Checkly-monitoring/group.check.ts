const group = new CheckGroupV2("api-monitoring-group", {
  name: "Browser Check Monitoring Group",
  browserChecks: {
    // A glob pattern matches any Playwright .spec.ts files
    // and automagically creates a Browser Check for this group.
    testMatch: "./*.spec.ts",
  },
})
