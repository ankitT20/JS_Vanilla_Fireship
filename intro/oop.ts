class Outer {
    constructor(
        public fish = '🐟',
        public count = 0
    ) {}

    inner() {
        this.count++;
        return `${this.count} ${this.fish}`;
    }

}

const instance = new Outer();
instance.inner(); // 1 🐟
console.log(instance.inner());
