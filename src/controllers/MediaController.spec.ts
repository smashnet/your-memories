import { PlatformTest } from "@tsed/common";
import { MediaController } from "./MediaController";

describe("MediaController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<MediaController>(MediaController);
    // const instance = PlatformTest.invoke<MediaController>(MediaController); // get fresh instance

    expect(instance).toBeInstanceOf(MediaController);
  });
});
