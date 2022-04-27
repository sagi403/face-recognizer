import request from "supertest";
import { app } from "../../app.js";
import { Face } from "../../models/face.js";

it("has a route handler listening to /api/add-person for post request", async () => {
  const response = await request(app).post("/api/add-person").send({
    name: "TestName",
  });

  expect(response.status).not.toEqual(404);
});

it("create a person in the face db with valid parameters", async () => {
  let face = await Face.find({});
  expect(face.length).toEqual(0);

  await request(app)
    .post("/api/add-person")
    .send({ name: "TestName" })
    .expect(201);

  face = await Face.find({});

  expect(face.length).toEqual(1);
  expect(face[0].name).toEqual("TestName");
  expect(face[0].vector.length).toEqual(256);
});

it("returns an error if an invalid name is provided", async () => {
  await request(app).post("/api/add-person").send({ name: "" }).expect(400);
  await request(app).post("/api/add-person").expect(400);
});
