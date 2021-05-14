abstract class Creator {
  public abstract createProduct(): Product;

  public executeOperation(): string {
    const product = this.createProduct();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  public createProduct(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public createProduct(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}

function clientCodeFactory(creator: Creator) {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works.",
  );
  console.log(creator.executeOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCodeFactory(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCodeFactory(new ConcreteCreator2());
