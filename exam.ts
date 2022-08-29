abstract class AbstractPerson {
  protected _name: string = 'mark'
  abstract setName(name: string):void
}

class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name
  }
}

const p = new Person()
p.setName('우영')