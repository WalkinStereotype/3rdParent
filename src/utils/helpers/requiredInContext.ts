export function requiredInContext(contextName: string, fnName: string) {
  return () => {
    throw new Error(`${fnName} was called outside of ${contextName}Provider`);
  };
}