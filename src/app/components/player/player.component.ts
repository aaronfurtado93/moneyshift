import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../classes/player/player';

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

  private _player: Player;

  constructor() { }

  ngOnInit() {
  }

}
