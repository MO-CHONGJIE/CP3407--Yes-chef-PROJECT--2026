const request = require("supertest");
const app = require("./app");

describe("Simple TDD Demo Tests", () => {
  test("should register successfully when all fields are valid", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        name: "Alice",
        email: "alice@example.com",
        password: "123456"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("User registered successfully");
  });

  test("should reject registration when fields are missing", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        email: "alice@example.com"
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Missing required fields");
  });

  test("should login successfully with correct email and password", async () => {
    await request(app)
      .post("/register")
      .send({
        name: "Tom",
        email: "tom@example.com",
        password: "123456"
      });

    const response = await request(app)
      .post("/login")
      .send({
        email: "tom@example.com",
        password: "123456"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Login successful");
  });

  test("should reject login when password is incorrect", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        email: "tom@example.com",
        password: "wrongpassword"
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe("Invalid email or password");
  });

  test("should return a menu list", async () => {
    const response = await request(app).get("/menu");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});