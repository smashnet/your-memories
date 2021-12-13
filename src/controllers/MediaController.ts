import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/media")
export class MediaController {
  @Get("/")
  get() {
    return "hello";
  }
}
