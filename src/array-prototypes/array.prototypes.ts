declare global {
  interface Array<T> {
    groupBy<K extends keyof T>(callBack: (value: T) => T[K]): Record<PropertyKey, Array<T>>;
  }
}

Array.prototype.groupBy = function <T, K extends keyof T>(callBack: (value: T) => T[K]) {
  return this.reduce((previousValue, currentValue: T) => {
    const key = callBack(currentValue);
    const value: T[] = previousValue[key] || [];
    previousValue[key] = value.concat([currentValue]);
    return previousValue;
  }, {} as Record<PropertyKey, T[]>);
};

export {};
