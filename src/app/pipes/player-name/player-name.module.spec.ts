import { PlayerNameModule } from './player-name.module';

describe('PlayerNameModule', () => {
  let playerNameModule: PlayerNameModule;

  beforeEach(() => {
    playerNameModule = new PlayerNameModule();
  });

  it('should create an instance', () => {
    expect(playerNameModule).toBeTruthy();
  });
});
