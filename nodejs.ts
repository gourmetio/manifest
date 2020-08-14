import {Service, Run, Build} from "./common.ts";

export interface NodeService extends Service {
  type: "nodejs";
  run?: Run;
  build?: Build;
}
