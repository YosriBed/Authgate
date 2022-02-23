const request = require("supertest");
const httpStatus = require("http-status");
const moment = require("moment");
const app = require("../../app");
const config = require("../../src/config/config");
const { tokenService } = require("../../src/services");
const setupTestDB = require("../utils/setupTestDB");
const { User, Token } = require("../../src/models");
const { tokenTypes } = require("../../src/config/tokens");
const { userOne, insertUsers, userTwo } = require("../fixtures/user.fixture");

setupTestDB();

describe("Auth routes", () => {
  describe("POST /api/auth/register", () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        lastName: "Redfield",
        firstName: "Chris",
        emailAddress: "chris.redfield@resident.com",
        password: "password1",
      };
    });

    test("should return 201 and successfully register user if request data is ok", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send(newUser)
        .expect(httpStatus.CREATED);

      expect(res.body.user).not.toHaveProperty("password");
      expect(res.body.user).toEqual({
        id: expect.anything(),
        lastName: newUser.lastName,
        firstName: newUser.firstName,
        emailAddress: newUser.emailAddress,
      });

      const dbUser = await User.findById(res.body.user.id);
      expect(dbUser).toBeDefined();
      expect(dbUser.password).not.toBe(newUser.password);
      expect(dbUser).toMatchObject({
        lastName: newUser.lastName,
        firstName: newUser.firstName,
        emailAddress: newUser.emailAddress,
      });

      expect(res.body.tokens).toEqual({
        access: { token: expect.anything(), expires: expect.anything() },
        refresh: { token: expect.anything(), expires: expect.anything() },
      });
    });

    test("should return 400 error if email is invalid", async () => {
      newUser.emailAddress = "invalidEmail";

      await request(app)
        .post("/api/auth/register")
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });

    test("should return 400 error if email is already used", async () => {
      await insertUsers([userOne]);
      newUser.emailAddress = userOne.emailAddress;

      await request(app)
        .post("/api/auth/register")
        .send(newUser)
        .expect(httpStatus.BAD_REQUEST);
    });
  });

  describe("POST /api/auth/login", () => {
    test("should return 200 and login user if email and password match", async () => {
      await insertUsers([userOne, userTwo]);
      const loginCredentials = {
        emailAddress: userOne.emailAddress,
        password: userOne.password,
      };

      const res = await request(app)
        .post("/api/auth/login")
        .send(loginCredentials)
        .expect(httpStatus.OK);

      expect(res.body.user).toEqual({
        id: expect.anything(),
        lastName: userOne.lastName,
        firstName: userOne.firstName,
        emailAddress: userOne.emailAddress,
      });

      expect(res.body.tokens).toEqual({
        access: { token: expect.anything(), expires: expect.anything() },
        refresh: { token: expect.anything(), expires: expect.anything() },
      });
    });

    test("should return 401 error if there are no users with that email", async () => {
      const loginCredentials = {
        emailAddress: userOne.emailAddress,
        password: userOne.password,
      };

      const res = await request(app)
        .post("/api/auth/login")
        .send(loginCredentials)
        .expect(httpStatus.UNAUTHORIZED);

      expect(res.body).toEqual({
        code: httpStatus.UNAUTHORIZED,
        message: "Incorrect email or password",
      });
    });

    test("should return 401 error if password is wrong", async () => {
      await insertUsers([userOne]);
      const loginCredentials = {
        emailAddress: userOne.emailAddress,
        password: "wrongPassword1",
      };

      const res = await request(app)
        .post("/api/auth/login")
        .send(loginCredentials)
        .expect(httpStatus.UNAUTHORIZED);

      expect(res.body).toEqual({
        code: httpStatus.UNAUTHORIZED,
        message: "Incorrect email or password",
      });
    });
  });

  describe("POST /api/auth/logout", () => {
    test("should return 204 if refresh token is valid", async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.refreshExpirationDays, "days");
      const refreshToken = tokenService.generateToken(
        userOne._id,
        expires,
        tokenTypes.REFRESH
      );
      await tokenService.saveToken(
        refreshToken,
        userOne._id,
        expires,
        tokenTypes.REFRESH
      );

      await request(app)
        .post("/api/auth/logout")
        .send({ refreshToken })
        .expect(httpStatus.NO_CONTENT);

      const dbRefreshTokenDoc = await Token.findOne({ token: refreshToken });
      expect(dbRefreshTokenDoc).toBe(null);
    });

    test("should return 400 error if refresh token is missing from request body", async () => {
      await request(app)
        .post("/api/auth/logout")
        .send()
        .expect(httpStatus.BAD_REQUEST);
    });

    test("should return 404 error if refresh token is not found in the database", async () => {
      await insertUsers([userOne]);
      const expires = moment().add(config.jwt.refreshExpirationDays, "days");
      const refreshToken = tokenService.generateToken(
        userOne._id,
        expires,
        tokenTypes.REFRESH
      );

      await request(app)
        .post("/api/auth/logout")
        .send({ refreshToken })
        .expect(httpStatus.NOT_FOUND);
    });
  });
});
