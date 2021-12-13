import { PlatformTest } from "@tsed/common";
import { ThumbnailService } from "./ThumbnailService";

describe("ThumbnailService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<ThumbnailService>(ThumbnailService);
    // const instance = PlatformTest.invoke<ThumbnailService>(ThumbnailService); // get fresh instance

    expect(instance).toBeInstanceOf(ThumbnailService);
  });
});
