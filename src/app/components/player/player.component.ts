import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../../classes/player/player';
import {AppStateManagementService} from '../../services/app-state-management/app-state-management.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {

  @Input()
  get player(): Player {
    return this._player;
  }
  set player(value: Player) {
    this._player = new Player(value);
    this.form.patchValue({
      firstName: this._player.firstName,
      lastName: this._player.lastName,
      bankBalance: this._player.bankBalance
    });
  }

  @Input() deactivateTransferButton: boolean;

  private _player = new Player();

  form = new FormGroup({
    firstName: new FormControl(this.player.firstName, Validators.required),
    lastName: new FormControl(this.player.lastName, Validators.required),
    bankBalance: new FormControl(this.player.bankBalance, Validators.required)
  });
  selectedTransferSource: string;

  constructor(
    private appStateManagementService: AppStateManagementService
  ) {
    this.appStateManagementService.SS.selectedTransferSource$.subscribe(
      value => this.selectedTransferSource = value
    );

    this.form.get('firstName').disable();
    this.form.get('lastName').disable();
    this.form.get('bankBalance').disable();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  selectTransferSource(playerId: string) {
    this.appStateManagementService.SS.selectedTransferSource = playerId;
  }

  editSaveOrCancelAction(playerId: string, formControlName: string) {
    if (this.form.get(formControlName).disabled) {
      this.form.get(formControlName).enable();
    } else if (this.form.valid) {
      this.appStateManagementService.SS.players = this.appStateManagementService.SS.players.map(
        value => {
          value = new Player(value);
          if (value.playerId === playerId) {
            value[formControlName] = this.form.get(formControlName).value;
          }
          return value;
        }
      );
      this.form.get(formControlName).disable();
    } else {
      this.form.patchValue({
        firstName: this._player.firstName,
        lastName: this._player.lastName
      });
      this.form.get(formControlName).disable();
    }
  }
}
