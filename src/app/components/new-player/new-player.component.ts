import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FullName} from '../../validators/full-name/full-name';
import {Player} from '../../classes/player/player';
import {AppStateManagementService} from '../../services/app-state-management/app-state-management.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('New Player', Validators.compose(
      [FullName.validator]
    ))
  });

  constructor(
    private appStateManagementService: AppStateManagementService
  ) { }

  ngOnInit() {
  }

  createPlayer() {
    const player = new Player();
    player.fullName = this.form.get(`fullName`).value;

    let players = this.appStateManagementService.SS.players;
    if (players && players.length > 0) {
      players.push(player);
    } else {
      players = [player];
    }

    this.appStateManagementService.SS.players = players;

    this.form.reset();
  }

}
