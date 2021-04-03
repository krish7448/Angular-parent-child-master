import { Component, Input, OnInit } from '@angular/core';
import { ParentService } from '../../../services/parent.service';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() parentData: string;

  //child1data: string = '';

  constructor(private service: ParentService) { }

  ngOnInit(): void {
    //this.child1data = this.service.child1dataService;
  }

  //ngDoCheck() {
  //  if (this.child1data != this.service.child1dataService) {
  //    this.child1data = this.service.child1dataService;
  //  }
  //}

}
