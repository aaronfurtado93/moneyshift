import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../classes/player/player';
import {AppStateManagementService} from '../../services/app-state-management/app-state-management.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input()
  get player(): Player {
    return this._player;
  }
  set player(value: Player) {
    this._player = new Player(value);
  }

  selectedTransferSource: string;
  private _player: Player;

  constructor(
    private appStateManagementService: AppStateManagementService
  ) {
    this.appStateManagementService.SS.selectedTransferSource$.subscribe(
      value => this.selectedTransferSource = value
    );
  }

  ngOnInit() {
  }

  selectTransferSource(playerId: string) {
    this.appStateManagementService.SS.selectedTransferSource = playerId;
  }
}
