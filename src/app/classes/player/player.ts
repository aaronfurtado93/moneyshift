import uuid from 'uuid/v1';

export class Player {
  get playerId(): string {
    return this._playerId;
  }

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

  private readonly _playerId: string;
  private _firstName: string;
  private _lastName: string;
  private _fullName: string;
  private _bankBalance: number;

  constructor() {
    this._playerId = uuid();
    this._bankBalance = 1500;
  }
}
