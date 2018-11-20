import request = require("supertest");
import app = require("../src/app");
const url = "http://localhost:8080/api/v1/ticket/";
import serverApplication from "../src/app";
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
  it("respond with 422 UNPROCESSABLE_ENTITY if object required is not in send data", (done) => {
    request(url)
        .post("")
        .send({
          _id: "dummyId",
          description: "dummyTest",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(422)
        .end((err) => {
            if (err) { return done(err); }
            done();
        });
});
  it("respond with 422 UNPROCESSABLE_ENTITY if object unique is in send data and database", (done) => {
  request(url)
      .post("")
      .send({
        _id: "dummyId",
        description: "dummyTest",
        title: "dummyTest123",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(422)
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
    it("respond with json containing one ticket and with 200 OK",  (done) => {
      request(url)
            .get("dummyId")
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(200, done);
    });
    it("respond with json error message when id is missmatched and 422 UNPROCESSABLE_ENTITY",  (done) => {
      request(url)
            .get("dummyNotExists")
            .set("Accept", "application/json")
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect('"resultado não encontrado, verifique se a url esta correta."')
            .expect(422, done);
    });
});
/**
 * Testing GET-Route should respond with 200
 */
describe("GET /",  () => {
  it("respond with json containing a list of all tickets and with 200 OK",  (done) => {
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
  it("respond with json error message when id is missmatched and 422 UNPROCESSABLE_ENTITY", (done) => {
    request(url)
        .put("dummyNotExists")
        .send({
          description: "dummyUpdated",
          title: "dummyTestUpdated",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(422)
        .expect('"resultado não encontrado, verifique se a url esta correta."')
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
  it("respond with json error message when id is missmatched and 422 UNPROCESSABLE_ENTITY", (done) => {
    request(url)
        .delete("dummyNotExists")
        .send({
          description: "dummyUpdated",
          title: "dummyTestUpdated",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(422)
        .expect('"resultado não encontrado, verifique se a url esta correta."')
        .end((err) => {
            if (err) { return done(err); }
            done();
        });
});
});
