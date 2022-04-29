import request from "supertest";
import { app } from "../../app.js";
import { Face } from "../../models/face.js";

it("has a route handler listening to /api/find-person for get request", async () => {
  const response = await request(app).get("/api/find-person").send({});

  expect(response.status).not.toEqual(404);
});
