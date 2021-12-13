import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/thumbnail")
export class ThumbnailController {
  @Get("/")
  get() {
    return "hello";
  }
}
