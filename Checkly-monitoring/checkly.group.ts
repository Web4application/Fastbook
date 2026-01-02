const group = new CheckGroupV2("api-multistep-group", {
  name: "API Multistep Monitoring Group",
  multiStepChecks: {
    // A glob pattern matches any Playwright .spec.ts files
    // and automagically creates MultiStep Checks for this group.
    testMatch: "./*.multi-step.spec.ts",
  },
})
