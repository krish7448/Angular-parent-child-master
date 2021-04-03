import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../../child/child1/child1.component';
import { Child2Component } from '../../child/child2/child2.component';
import { Child3Component } from '../../child/child3/child3.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(Child1Component) child1: Child1Component;
  @ViewChild(Child2Component) child2: Child2Component;
  @ViewChild(Child3Component) child3: Child3Component;

  child1Data: string = "child 1";
  child2Data: string = "child 2";
  child3Data: string = "child 3";

  constructor() { }

  ngOnInit(): void {
    
  }

  setChild1Data(data) {
    this.child1Data = data;
  }

}
