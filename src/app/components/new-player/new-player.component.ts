import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FullName} from '../../validators/full-name/full-name';

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

  constructor() { }

  ngOnInit() {
  }

}
