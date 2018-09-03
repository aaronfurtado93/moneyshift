export interface IJSONObject {
  [key: string]: string|number|boolean|undefined|null|IJSONObject|string[]|number[]|boolean[]|undefined[]|null[]|IJSONObject[];
}
