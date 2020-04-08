import { Signs } from './../signs';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

 @Output() showfinish(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
