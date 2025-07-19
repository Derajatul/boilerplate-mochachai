# Quality Assurance with Chai - Completed Project

This project is a **completed implementation** of the Quality Assurance with Chai lessons from freeCodeCamp. All tasks and challenges have been successfully completed.

## About This Project

This is a Node.js application that demonstrates testing concepts using:

- **Chai** - Assertion library for unit testing
- **Mocha** - JavaScript test framework
- **Chai-HTTP** - HTTP integration testing
- **Zombie** - Browser simulation for headless testing

## Project Structure

```text
├── server.js              # Main Express server
├── test-runner.js          # Test runner configuration
├── assertion-analyser.js   # Custom assertion analyzer
├── tests/
│   ├── 1_unit-tests.js    # Unit tests (Basic assertions, strings, arrays, objects)
│   └── 2_functional-tests.js # Functional tests (HTTP requests, browser simulation)
├── public/
│   ├── client.js          # Frontend JavaScript
│   └── style.css          # Styling
└── views/
    └── index.html         # Main HTML template
```

## Features Implemented

### Unit Tests (1_unit-tests.js)

- ✅ Basic assertions (isNull, isDefined, etc.)
- ✅ String testing (include, match, etc.)
- ✅ Array testing (isArray, include, etc.)
- ✅ Object testing (property, isObject, etc.)

### Functional Tests (2_functional-tests.js)

- ✅ HTTP request testing with Chai-HTTP
- ✅ Browser automation with Zombie.js
- ✅ DOM interaction testing
- ✅ Form submission testing

## Installation & Running

```bash
# Install dependencies
npm install

# Start the server
npm start
```

The server will run on port 3000. Visit `http://localhost:3000` to see the application.

## Running Tests

Tests are configured to run automatically. The test results are displayed in the web interface at the main page.

## Learning Outcomes

This project covers essential QA concepts:

- Writing effective unit tests
- HTTP endpoint testing
- Browser automation
- Assertion techniques
- Test-driven development principles

## Original Course

Based on the freeCodeCamp course: [Quality Assurance and Testing with Chai](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-and-testing-with-chai/)

---

**Status**: ✅ All challenges completed successfully!
