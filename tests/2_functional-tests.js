const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.timeout(5000);
  suite("Integration tests with chai-http", function () {
    // #1
    test("Test GET /hello with no name", function (done) {
      chai
        .request(server)
        .keepOpen()
        .get("/hello")
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "hello Guest");
          done();
        });
    });
    // #2
    test("Test GET /hello with your name", function (done) {
      chai
        .request(server)
        .keepOpen()
        .get("/hello?name=xy_z")
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "hello xy_z");
          done();
        });
    });
    // #3
    test('send {surname: "Colombo"}', function (done) {
      // we setup the request for you...
      chai
        .request(server)
        .put("/travellers")
        /** send {surname: 'Colombo'} here **/
        .send({ surname: "Colombo" })
        // .send({...})
        .end(function (err, res) {
          /** your tests here **/
          assert.equal(res.status, 200, "response status should be 200");
          assert.equal(res.type, "application/json", "Response should be json");
          assert.equal(
            res.body.name,
            "Cristoforo",
            'res.body.name should be "Christoforo"'
          );
          assert.equal(
            res.body.surname,
            "Colombo",
            'res.body.surname should be "Colombo"'
          );

          done(); // Never forget the 'done()' callback...
        });
    });
    // #4
    test('Send {surname: "da Verrazzano"}', function (done) {
      chai
        .request(server)
        .put("/travellers")
        /** send {surname: 'da Verrazzano'} here **/
        .send({ surname: "da Verrazzano" })

        // .send({...})
        .end(function (err, res) {
          assert.equal(res.status, 200, "response status should be 200");
          assert.equal(res.type, "application/json", "Response should be json");
          assert.equal(
            res.body.name,
            "Giovanni",
            'res.body.name should be "Giovanni","'
          );
          assert.equal(
            res.body.surname,
            "da Verrazzano",
            'res.body.surname should be "da Verrazzano"'
          );

          done();
        });
    });
  });
});

const Browser = require("zombie");

// Set the site property directly on the Browser constructor (not on an instance)
Browser.site = "http://0.0.0.0:3000";

suite("Functional Tests with Zombie.js", function () {
  this.timeout(5000);

  // Create a new browser instance at the root level
  const browser = new Browser();

  // Use suiteSetup with the exact format from the instructions
  suiteSetup(function (done) {
    return browser.visit("/", done);
  });

  suite("Headless browser", function () {
    test('should have a working "site" property', function () {
      assert.isNotNull(browser.site);
    });
  });

  suite('"Famous Italian Explorers" form', function () {
    // #5
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      browser.fill("surname", "Colombo");
      browser.pressButton("submit", function () {
        browser.assert.success();
        browser.assert.text("span#name", "Cristoforo");
        browser.assert.text("span#surname", "Colombo");
        browser.assert.elements("span#dates", 1);
        done();
      });
    });

    // #6
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      browser.fill("surname", "Vespucci");
      browser.pressButton("submit", function () {
        browser.assert.success();
        browser.assert.text("span#name", "Amerigo");
        browser.assert.text("span#surname", "Vespucci");
        browser.assert.elements("span#dates", 1);
        done();
      });
    });
  });
});
