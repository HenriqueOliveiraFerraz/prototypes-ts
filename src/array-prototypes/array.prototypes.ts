declare global {
  interface Array<T> {
    groupBy<K extends keyof T>(callBack: (value: T, index: number) => T[K]): Record<PropertyKey, Array<T>>;
    groupBy(callBack: (value: T, index: number) => PropertyKey): Record<PropertyKey, Array<T>>;
  }
}

Array.prototype.groupBy = function <T, K extends keyof T>(callBack: (value: T, index: number) => T[K]) {
  return this.reduce((previousValue, currentValue: T, currentIndex: number) => {
    const key = callBack(currentValue, currentIndex);
    const value: T[] = previousValue[key] || [];
    previousValue[key] = value.concat([currentValue]);
    return previousValue;
  }, {} as Record<PropertyKey, T[]>);
};

export {};
