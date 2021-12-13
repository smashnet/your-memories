import { PlatformTest } from "@tsed/common";
import { MainController } from "./MainController";

describe("MainController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<MainController>(MainController);
    // const instance = PlatformTest.invoke<MainController>(MainController); // get fresh instance

    expect(instance).toBeInstanceOf(MainController);
  });
});
