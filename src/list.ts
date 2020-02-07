class Item<T> {
  value: T;
  next: Item<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class List<T> {
  private head: Item<T>;
  private size: number;
  constructor(item: T) {
    this.head = new Item(item);
    this.size = 1;
  }

  private getHead() {
    return this.head;
  }

  private getItem(index: number) {
    if (index == 0) {
      return this.head;
    }
    let current: Item<T> | null = this.head.next;
    for (let i = 0; i < this.len(); i++) {
      if (i + 1 == index) {
        return current;
      }
      current = current && current.next;
    }
    return null;
  }

  get(index: number) {
    return this.getItem(index)?.value;
  }

  private getTail() {
    return this.getItem(this.len() - 1)!;
  }

  add(item: T) {
    this.getTail().next = new Item(item);
    this.size += 1;
  }
  len() {
    return this.size;
  }
}
