import { Pipe, PipeTransform } from '@angular/core';
import {Player} from '../../classes/player/player';

@Pipe({
  name: 'playerName'
})
export class PlayerNamePipe implements PipeTransform {

  transform(players: Player[], playerId: any): any {
    return players.length > 0 ? players.find(
      value => value.playerId === playerId
    ).fullName : '';
  }

}
