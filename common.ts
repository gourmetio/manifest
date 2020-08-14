export interface InstanceBase {
  name: string;
  type: string;
}

export interface BuildSpec {
  name?: string;
  builderImage?: string;
  commands?: string[];
  env?: EnvVars;
  output?: BuildOutput;
}

export interface PathRewrite {
  from: string;
  to: string;
}

export type PathPattern = string | PathRewrite;

export interface BuildOutput {
  format?: "container" | "archive";
  baseImage?: string;
  files?: PathPattern[];
}

export type Build = BuildSpec | BuildSpec[];

export interface Run {
  command?: string[];
  args?: string[];
  env?: EnvVars;
}

export type EnvVars = Record<string, string | number>;

export interface RootConfig {
  workspaces?: string[];
}

export interface Service extends InstanceBase {
}
