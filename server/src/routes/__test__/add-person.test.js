import request from "supertest";
import { app } from "../../app.js";
import { Face } from "../../models/face.js";

it("has a route handler listening to /api/add-person for post request", async () => {
  const response = await request(app).post("/api/add-person").send({
    name: "TestName",
  });

  expect(response.status).not.toEqual(404);
});
