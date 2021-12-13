import { PlatformTest } from "@tsed/common";
import SuperTest from "supertest";
import { MainController } from "./MainController";
import { Server } from "../Server";

describe("MainController", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;

  beforeEach(PlatformTest.bootstrap(Server, {
    mount: {
      "/": [MainController]
    }
  }));
  beforeEach(() => {
    request = SuperTest(PlatformTest.callback());
  });

  afterEach(PlatformTest.reset);

  it("should call GET ", async () => {
     const response = await request.get("").expect(200);

     expect(response.text).toEqual("hello");
  });
});
