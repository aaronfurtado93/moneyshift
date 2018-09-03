import { FormsSystemModule } from './forms-system.module';

describe('FormsSystemModule', () => {
  let formsModuleModule: FormsSystemModule;

  beforeEach(() => {
    formsModuleModule = new FormsSystemModule();
  });

  it('should create an instance', () => {
    expect(formsModuleModule).toBeTruthy();
  });
});
