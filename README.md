# 🎭 DemoQA Playwright Automated Test

This project contains automated end-to-end (E2E) tests for the [DemoQA](https://demoqa.com/) Forms and Book Store applications using Playwright with TypeScript.

## 🕵️ Getting Started

### 🗿 Prerequisites

Before running the tests, make sure you have the following installed and configured:

- **Node.js 18+**  
  _(Note: Node.js 20+ is supported, but avoid Node 12 or older.)_
- **Package Manager**: `npm` (comes with Node.js)
- **Docker** (for containerized execution)
- **Git** (for version control)
- **IDE Recommendation**: [VS Code](https://code.visualstudio.com/) with the **Playwright Test for VS Code** extension for optimal development and debugging experience.

---

### 💿 Installing

1. Clone the repository:

git clone https://github.com/your-org/demoqa-playwright.git 
cd automation-demoqa

2. Install the dependencies:

npm ci 
npx playwright install --with-deps

3. Create a `formData` file in the root directory:

BASE_URL=https://demoqa.com

---

### 🚀 Running the Tests

Standard Mode:
npx playwright test


Run in Specific Browser:
npx playwright test --project=firefox


View HTML Report:
npx playwright show-report


Parallel Mode (default):
Playwright runs tests in parallel across files and browsers automatically.

Pro Tip: Use the Playwright VS Code extension for debugging and visual test exploration. 😎

---

## 🐳 Dockerized Execution

### Build Docker Image

docker build -t demoqa-tests .


### Run Tests in Container

docker run --rm demoqa-tests

### Optional: Using docker-compose

docker-compose up --build

---

## 🏭 Built With

The following libraries and tools are used in this project:

[Playwright](https://playwright.dev/) – Core E2E testing framework.

[TypeScript](https://www.typescriptlang.org/) – Strongly typed JavaScript.

[GitHub Actions](https://docs.github.com/en/actions) – CI/CD pipeline for automated test execution.

[Docker](https://www.docker.com/) – Containerized test execution.

---

## 🤖 CI/CD with GitHub Actions

CI is configured to:

- Build the Docker image
- Run tests in Chromium and Firefox (matrix strategy)
- Upload HTML and JUnit reports as artifacts
- Take screenshots on failure

Trigger CI by pushing to a feature branch:

git checkout -b feature/automation/demoqa-login 
git add . git commit -m 
git push origin feature/automation/demoqa-login


Then open a Pull Request to `feature/automation/demoqa-forms`.

---

## 📊 Reports & Artifacts

- ✅ HTML Report: `reports/html-report/index.html`
- ✅ JUnit XML: `reports/junit-report.xml`
- ✅ Screenshots: `reports/screenshots/`

##  📊 Show Report 

npx playwright show-report


All reports are uploaded automatically in CI.

---

### 👨‍💻 GitHub Flow Branching Model

1. Clone the repository using `git clone https://github.com/h324a151n/45Project.git`.
2. Create a new branch using `git checkout -b <branch_name>`.
3. Make your changes to the code or documentation.
4. Write or update tests for your changes.
5. Push your changes using `git push origin <branch_name>`.
> 💡 You can use the GitLens plugin in VS Code instead of CLI commands.

---

### 🐱‍🚀 Submitting a Pull Request

1. Open a Pull Request (PR) in the GitHub repository.
2. Provide a clear description of the changes and their purpose.
4. Collaborate with reviewers for feedback and improvements.
5. Once approved, squash and merge into `feature/automation/demoqa-forms`.

---

### 🛡️ Anti-Flakiness Techniques

- Use `await expect(locator).toBeVisible()` before interactions.
- Avoid hard waits; use smart waits and `expect.poll()` when needed.
- Keep tests isolated and stateless.

---

### 🧵 Parallelization

- Playwright runs tests in parallel by default.
- CI uses matrix strategy to run tests in Chromium and Firefox simultaneously.

---

### 📢 Debuging

- HTML reports for visual inspection.
- JUnit reports for CI integration.
- Screenshots on failure for debugging.

---

### 🧰 Troubleshooting

| Issue | Solution |
|-------|----------|
| ❌ Tests fail in CI | Check `.env` values and GitHub Secrets |
| 🐌 Slow tests | Run with `--workers=1` to debug |
| 🧪 Browser not found | Run `npx playwright install --with-deps` |
| 📦 Docker build fails | Ensure Node.js version is 18+ and Docker is running |

---

## 👨‍🏫 Naming Conventions

- Use `camelCase` for variables and function names.
- Use `PascalCase` for class names (e.g., `LoginPage`).
- Use descriptive names for test files and test cases.
- Prefix test files with `*.spec.ts`.

Examples:

loginPage.ts bookStore.spec.ts tests/forms/practiceForm.spec.ts

Code

---

## 🤦‍♀️ 📢 NOTE: About reCAPTCHA

The Book Store registration flow includes a Google reCAPTCHA, which cannot be automated. To avoid test failures:

- Use a pre-created test user for login scenarios.
- Skip or mock reCAPTCHA-related flows.
    *await page.route('**/recaptcha/**', route => route.fulfill({ status: 200, body: 'OK' }));
---


## 🛠 Additional Notes

- 📖 Documentation: Refer to [Playwright Docs](https://playwright.dev/docs/intro) for more info.


