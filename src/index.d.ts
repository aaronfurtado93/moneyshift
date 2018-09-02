declare var module: NodeModule;
interface NodeModule {
  id: string;
  hot: {
    accept: Function
  };
}
