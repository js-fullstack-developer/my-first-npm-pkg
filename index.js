export default showVersion = () => {
  import("./version").then(({ default: v }) =>
    console.log(`current version is: ${v()}`)
  );
};
