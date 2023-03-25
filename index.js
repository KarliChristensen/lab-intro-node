class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.item = this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error("OutOfBounds");
    }
    return (this.pos = this.items.indexOf(pos));
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    }
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }
  avg() {
  if (this.items.length === 0) {
  throw new Error('EmptySortedList');
  }
  return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
