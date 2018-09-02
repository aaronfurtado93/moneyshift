export class Player {
  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;

    const names = value.split(' ');
    this._firstName = names[0];
    this._lastName = names[1];
  }

  get bankBalance(): number {
    return this._bankBalance;
  }

  set bankBalance(value: number) {
    this._bankBalance = value;
  }

  private _firstName: string;
  private _lastName: string;
  private _fullName: string;
  private _bankBalance = 1500;

  constructor() {}
}
