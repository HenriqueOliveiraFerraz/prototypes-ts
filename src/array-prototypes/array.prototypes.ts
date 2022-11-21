declare global {
  interface Array<T> {
    groupBy(callBack: (value: T, index: number) => PropertyKey): Record<PropertyKey, Array<T>>;
  }
}

Array.prototype.groupBy = function <T>(callBack: (value: T, index: number) => PropertyKey) {
  return this.reduce<Record<PropertyKey, Array<T>>>(
    (previousValue: Record<PropertyKey, Array<T>>, currentValue: T, currentIndex: number) => {
      const key = callBack(currentValue, currentIndex);
      const value: T[] = previousValue[key] || [];
      previousValue[key] = value.concat([currentValue]);
      return previousValue;
    },
    {}
  );
};

export {};
