interface Person {
  name: string;
  age?: number;
  say(): string;
}

class Greeter implements Person {
  constructor(public name: string) {
    this.name = name;
  }

  say(): string {
    return `say: ${this.name}`
  }
}