import {Player} from '../../../classes/player/player';
import {BehaviorSubject, Observable} from 'rxjs';

export class SessionStorageItems {
  static players: Player[] = [];
  static players$: Observable<Player[]> = new BehaviorSubject([]);
  static selectedTransferSource = '';
  static selectedTransferSource$: Observable<string> = new BehaviorSubject('');
}
