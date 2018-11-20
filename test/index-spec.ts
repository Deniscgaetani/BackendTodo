import request = require("supertest");
import app = require("../src/app");
const url = "http://localhost:8080/api/v1/ticket/";
// ==================== user API test ====================

/**
 * Testing get a user endpoint by giving an existing user
 */
/* describe("GET /:_id",  () => {
  it("respond with json containing a single ticket",  (done) => {
      request(app)
          .get("/")
          .set("Accept", "application/json")
          .expect(200, done);
  });
}); */
/**
 * Testing get all user endpoint
 */
/**
 * Testing POST-Route should respond with 201
 */
describe("POST /",  () => {
  it("respond with 201 created", (done) => {
      request(url)
          .post("")
          .send({
            _id: "dummyId",
            description: "dummyTest",
            title: "dummyTest123",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(201)
          .end((err) => {
              if (err) { return done(err); }
              done();
          });
  });
});
/**
 * Testing GET-Route should respond with 200
 */
describe("GET /:id",  () => {
    it("respond with json containing one ticket",  (done) => {
      request(url)
            .get("dummyId")
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(200, done);
    });
});
/**
 * Testing GET-Route should respond with 200
 */
describe("GET /",  () => {
  it("respond with json containing a list of all tickets",  (done) => {
    request(url)
          .get("")
          .set("Accept", "application/json")
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(200, done);
  });
});
/**
 * Testing PUT-Route should respond with 200
 */
describe("PUT /:id",  () => {
  it("respond with 200 OK", (done) => {
      request(url)
          .put("dummyId")
          .send({
            description: "dummyUpdated",
            title: "dummyTestUpdated",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(200)
          .end((err) => {
              if (err) { return done(err); }
              done();
          });
  });
});
/**
 * Testing DELETE-Route should respond with 200
 */
describe("DELETE /:id",  () => {
  it("respond with 200 OK", (done) => {
      request(url)
          .delete("dummyId")
          .set("Accept", "application/json")
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(200)
          .end((err) => {
              if (err) { return done(err); }
              done();
          });
  });
});
