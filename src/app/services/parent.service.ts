import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  child1dataService: string = '';
  child2dataService: string = '';
  child3dataService: string = '';

  constructor() { }
}
