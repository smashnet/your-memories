import { PlatformTest } from "@tsed/common";
import { ThumbnailController } from "./ThumbnailController";

describe("ThumbnailController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<ThumbnailController>(ThumbnailController);
    // const instance = PlatformTest.invoke<ThumbnailController>(ThumbnailController); // get fresh instance

    expect(instance).toBeInstanceOf(ThumbnailController);
  });
});
