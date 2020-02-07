import List from "./list";

const list = new List("Arun");

list.add("Ravi");
list.add("Manoj");

// console.log(list.get(2));
// list.add(4);

interface PrintableList<T> {
  len: () => number;
  get: (i: number) => T;
}

function print_list<T>(list: PrintableList<T>) {
  let format = "[";
  for (let i = 0; i < list.len(); i++) {
    format += list.get(i) + ",";
  }
  format += "]";
  console.log(format);
}

print_list(list);
