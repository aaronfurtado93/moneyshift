import { Component, OnInit } from '@angular/core';
import {Player} from '../../classes/player/player';
import {AppStateManagementService} from '../../services/app-state-management/app-state-management.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players: Player[];

  constructor(
    private appStateManagementService: AppStateManagementService
  ) {
    this.appStateManagementService.SS.players$.subscribe(
      value => {
        return this.players = value ? value.map(
          value1 => new Player(value1)
        ) : [];
      }
    );
  }

  ngOnInit() {
  }

}
