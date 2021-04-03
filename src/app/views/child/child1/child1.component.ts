import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ParentService } from '../../../services/parent.service';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentData: string;

  @Output() data: EventEmitter<any> = new EventEmitter();

  constructor(private service: ParentService) { }

  ngOnInit(): void {
    this.service.child1dataService = this.parentData;
  }

  sendData() {
    this.service.child1dataService = this.parentData;
    this.data.emit(this.parentData);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
