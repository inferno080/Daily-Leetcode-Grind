interface Array<T> {
  square(): Array<number>;
}

Array.prototype.square = function () {
  return this.map((item: number)=>item*item);
};
