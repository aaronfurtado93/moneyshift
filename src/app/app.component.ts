import { Component } from '@angular/core';
import {AppStateManagementService} from './services/app-state-management/app-state-management.service';
import {Player} from './classes/player/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  players: Player[];

  constructor (
    private appStateManagementService: AppStateManagementService
  ) {
    this.appStateManagementService.SS.players$.subscribe(
      value => this.players = value.map(
        value1 => new Player(value1)
      )
    );
  }
}
