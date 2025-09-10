# Testing web apps with PlayWright MCP server

## Project Summary

This project demonstrates the integration of Playwright with MCP and usage from VS Code GHCP.

## 1. Install Playwright (for running tests)

For VS Code, I installed it by installing the Playwright VS Code extension:
https://playwright.dev/docs/getting-started-vscode

You can also follow this: https://playwright.dev/docs/intro

##**Note:**

**The Playwrigth MCP server is for agent-driven browser automation, not running Playwright Test specs. Use the Playwright CLI or Playwright VS Code extension for running the tests.**

For instance, for running a test you can do it with the CLI like the following:

```
npx playwright test e2e/microsoft-site-tests.spec.ts --project='Microsoft Edge' --reporter=line
```
![alt text](images/tests-cli.png)

Or with the GH Extension pressing the button:
![alt text](images/tests-extension.png)

Or running the Test in Playwright UI Mode:
```
npx playwright test e2e/quote-api-swagger-ui-check.spec.ts --ui --project='Microsoft Edge' --ui-host=127.0.0.1 --ui-port=9323
```

![alt text](images/playwright-test-ui.png)


## 2. Install Playwright MCP server

Add the following MCP config file to your the .vscode/mcp.json file.

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--browser=msedge"
      ]
    }
  }
}
```


## 3 Test mcp-playwrightw with example prompts:

User input:
```text
Playwright: go to https://www.microsoft.com and return the page then create a screenshot of it and put it in the screenshots folder with the name microsoft-home-page-screenshot-by-playwright-mcp-server.png
```

```text
Use the Playwright MCP server to go to https://www.microsoft.com, see it in the browser and return the page title and all top navigation link texts in the chat output.
```


![alt text](images/MCP-server-Playwright-exec-1.png)

![alt text](images/MCP-server-Playwright-exec-2.png)

![alt text](images/MCP-server-Playwright-exec-3.png)




# Running the Playwright tests triggered by CI with Actions in Github.com

This is configured with the [.github/workflows/playwright.yml](.github/workflows/playwright.yml) yaml file.

I'm using a different playwright config with the [playwright.ci.config.ts](/playwright.ci.config.ts) file so it's running the tests "headless" with no visual browser, otherwise, you get errors in the CI tests.

![alt text](images/ci-actions-tests-execution.png)