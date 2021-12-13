import { PlatformTest } from "@tsed/common";
import { MediaService } from "./MediaService";

describe("MediaService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<MediaService>(MediaService);
    // const instance = PlatformTest.invoke<MediaService>(MediaService); // get fresh instance

    expect(instance).toBeInstanceOf(MediaService);
  });
});
