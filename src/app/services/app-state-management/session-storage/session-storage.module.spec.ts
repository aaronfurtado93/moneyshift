import { SessionStorageModule } from './session-storage.module';

describe('SessionStorageModule', () => {
  let sessionStorageModule: SessionStorageModule;

  beforeEach(() => {
    sessionStorageModule = new SessionStorageModule();
  });

  it('should create an instance', () => {
    expect(sessionStorageModule).toBeTruthy();
  });
});
