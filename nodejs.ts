import {Service, Run, Build} from "./common.ts";

export interface NodeService extends Service {
  type: "nodejs";
  props: {
    run?: Run;
    build?: Build;
  }
}
