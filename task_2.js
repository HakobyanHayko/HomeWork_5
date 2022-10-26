class Pagination {
  constructor(items = [], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
    this.groupsOfItems = [];
    this.pageCount = 0;
    while (this.items.length) {
      let temp = [];
      for (let i = 0; i < this.pageSize && this.items[0]; i++) {
        temp.push(this.items.shift());
      }
      this.groupsOfItems.push(temp);
    }
  }
  getVisibleItems() {
    return this.groupsOfItems[this.pageCount];
  }
  prevPage() {
    this.pageCount--;
  }
  nextPage() {
    this.pageCount++;
  }
  firstPage() {
    this.pageCount = 0;
  }
  lastPage() {
    this.pageCount = this.groupsOfItems.length - 1;
  }

  set goToPage(pageNum) {
    this.pageCount = pageNum;
  }
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.lastPage();
console.log(p.getVisibleItems());
