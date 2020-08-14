import { RootConfig } from "./common.ts";
import { NodeService} from "./nodejs.ts";

export type ManifestItem = RootConfig | NodeService;
export type ManifestValue = ManifestItem | ReadonlyArray<ManifestItem>;

export interface ManifestContext {

}

export type ManifestFunc = (context: ManifestContext) => ManifestValue | Promise<ManifestValue>;

export type ModuleExport = ManifestValue | ManifestFunc;
