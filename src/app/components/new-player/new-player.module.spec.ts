import { NewPlayerModule } from './new-player.module';

describe('NewPlayerModule', () => {
  let newPlayerModule: NewPlayerModule;

  beforeEach(() => {
    newPlayerModule = new NewPlayerModule();
  });

  it('should create an instance', () => {
    expect(newPlayerModule).toBeTruthy();
  });
});
