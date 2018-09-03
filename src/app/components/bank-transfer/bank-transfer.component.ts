import { Component, OnInit } from '@angular/core';
import {AppStateManagementService} from '../../services/app-state-management/app-state-management.service';
import {Player} from '../../classes/player/player';

@Component({
  selector: 'app-bank-transfer',
  templateUrl: './bank-transfer.component.html',
  styleUrls: ['./bank-transfer.component.scss']
})
export class BankTransferComponent implements OnInit {

  selectedTransferSource: string;
  players: Player[];

  constructor(
    private appStateManagementService: AppStateManagementService
  ) {
    this.appStateManagementService.SS.players$.subscribe(
      value => this.players = value.map(
        value1 => new Player(value1)
      )
    );

    this.appStateManagementService.SS.selectedTransferSource$.subscribe(
      value => this.selectedTransferSource = value
    );
  }

  ngOnInit() {
  }

  cancelTransferProcess() {
    this.appStateManagementService.SS.selectedTransferSource = '';
  }
}
