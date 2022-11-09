declare global {
  interface Array<T> {
    groupBy(callBack: (value: T, index: number) => PropertyKey): Record<PropertyKey, Array<T>>;
    //groupBy(callBack: (value: T, index: number) => T[K]): Record<T[K], Array<T>>;
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

// Array.prototype.groupBy = function <T, K extends keyof T>(callBack: (value: T, index: number) => T[K]) {
//   return this.reduce((previousValue, currentValue: T, currentIndex: number) => {
//     const key = callBack(currentValue, currentIndex);
//     const value: T[] = previousValue[key] || [];
//     previousValue[key] = value.concat([currentValue]);
//     return previousValue;
//   }, {} as Record<PropertyKey, T[]>);
// };

export {};
