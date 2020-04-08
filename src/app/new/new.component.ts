import { Signs } from './../signs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  signz:Signs
  remove(index){
    this.signz.showpassA[index] = !this.signz.showpassA[index]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
