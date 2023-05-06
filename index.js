const version = import("./version").then(({ default: v }) =>
  console.log(`current version is: ${v()}`)
);
