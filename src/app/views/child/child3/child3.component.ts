import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Input() parentData: string;

  constructor() { }

  ngOnInit(): void {
  }

}
