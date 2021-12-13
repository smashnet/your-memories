import {Controller} from "@tsed/di";
import {Get, View} from "@tsed/schema";

@Controller("")
export class MainController {
  @Get("/")
  @View("index.njk")
  get() {
    return {user: { name: "Nico" }};
  }
}
