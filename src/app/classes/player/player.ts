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
    this._fullName = `${this._firstName} ${this._lastName}`;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
    this._fullName = `${this._firstName} ${this._lastName}`;
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
    this._previousBankBalance = this._bankBalance;
    this._bankBalance = value;
  }

  get balanceIncreased(): boolean {
    return this._balanceIncreased = this._bankBalance > this._previousBankBalance;
  }

  get balanceDecreased(): boolean {
    return this._balanceDecreased = this._bankBalance < this._previousBankBalance;
  }

  private readonly _playerId: string;
  private _firstName: string;
  private _lastName: string;
  private _fullName: string;
  private _bankBalance: number;
  private _previousBankBalance: number;
  private _balanceIncreased: boolean;
  private _balanceDecreased: boolean;

  constructor(player?: Player) {
    if (player) {
      this._playerId = player._playerId;
      this._firstName = player._firstName;
      this._lastName = player._lastName;
      this._fullName = player._fullName;
      this._bankBalance = player._bankBalance;
      this._previousBankBalance = player._previousBankBalance;
    } else {
      this._playerId = uuid();
      this._firstName = '';
      this._lastName = '';
      this._fullName = '';
      this._bankBalance = 1500;
      this._previousBankBalance = 1500;
    }
  }
}
