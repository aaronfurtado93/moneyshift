import { BankTransferModule } from './bank-transfer.module';

describe('BankTransferModule', () => {
  let bankTransferModule: BankTransferModule;

  beforeEach(() => {
    bankTransferModule = new BankTransferModule();
  });

  it('should create an instance', () => {
    expect(bankTransferModule).toBeTruthy();
  });
});
