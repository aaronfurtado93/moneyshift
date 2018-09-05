import { Component, OnInit } from '@angular/core';
import {AppStateManagementService} from '../../services/app-state-management/app-state-management.service';
import {Player} from '../../classes/player/player';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.scss']
})
export class BankTransferComponent implements OnInit {

  form = new FormGroup({
    selectedTransferDestination: new FormControl('', Validators.required),
    transferAmount: new FormControl(0, Validators.required)
  });

  selectedTransferSource: string;
  players: Player[];
  paymentAmountTemplates = [
    10,
    25,
    50,
    100,
    200
  ];

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

    this.appStateManagementService.SS.selectedTransferSource$.subscribe(
      value => {
        if (this.form.get('selectedTransferDestination').value === value) {
          this.form.get('selectedTransferDestination').setValue('');
        }
        return this.selectedTransferSource = value;
      }
    );
  }

  ngOnInit() {
  }

  makePayment() {
    const transferAmount = this.form.get('transferAmount').value;
    const selectedTransferDestination = this.form.get('selectedTransferDestination').value;

    this.appStateManagementService.SS.players = this.appStateManagementService.SS.players.map(
      player => {
        player = new Player(player);
        if (player.playerId === this.selectedTransferSource) {
          player.bankBalance = player.bankBalance - transferAmount;
        } else if (player.playerId === selectedTransferDestination) {
          player.bankBalance = player.bankBalance + transferAmount;
        } else {
          player.bankBalance = player.bankBalance;
        }
        return player;
      }
    );

    this.cancelTransferProcess();
  }

  cancelTransferProcess() {
    this.appStateManagementService.SS.selectedTransferSource = '';
    this.form.reset({
      selectedTransferDestination: '',
      transferAmount: 0
    });
  }
}
