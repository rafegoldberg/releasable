import pkg from "../package.json";
import dep from "./dep";

const res = dep({
  version: pkg.version,
  zedA: "ON",
  twoA: "NO",
});

console.log(res);
