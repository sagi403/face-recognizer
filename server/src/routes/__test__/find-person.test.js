import request from "supertest";
import { app } from "../../app.js";
import { Face } from "../../models/face.js";

it("has a route handler listening to /api/find-person for get request", async () => {
  const response = await request(app).get("/api/find-person").send({});

  expect(response.status).not.toEqual(404);
});

it("db length larger than min required", async () => {
  let face = await Face.find({});
  expect(face.length).toEqual(0);

  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);
  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);
  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);
  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);
  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);

  face = await Face.find({});

  expect(face.length).toEqual(5);

  const response = await request(app).get("/api/find-person").send({});

  expect(response.body.length).toEqual(3);
});

it("db length smaller than min required", async () => {
  let face = await Face.find({});
  expect(face.length).toEqual(0);

  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);
  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);

  face = await Face.find({});

  expect(face.length).toEqual(2);

  const response = await request(app).get("/api/find-person").send({});

  expect(response.body.length).toEqual(2);
});
