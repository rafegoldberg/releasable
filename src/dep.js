const someDefaults = {
  zedA: "NO",
  oneA: "NO",
  zedB: "NO",
  oneB: "ON",
};

export default (someOverrides) => ({ ...someDefaults, ...someOverrides });
