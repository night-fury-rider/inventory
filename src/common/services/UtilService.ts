// It is inteneded to contain all local utility things like string operations, object manipulalations etc.

const getClonedObject = (sourceObj: any) =>
  JSON.parse(JSON.stringify(sourceObj));

export {getClonedObject};
