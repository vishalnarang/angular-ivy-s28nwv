import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() childDetails: any;

  constructor(public sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.child1.subscribe((response) => {
      if (response) {
        this.onClick(response);
      }
    });
  }

  onClick(data) {
    if (data.operation == 'addition') {
      this.childDetails.money = this.childDetails.money + data.value;
    } else {
      this.childDetails.money = this.childDetails.money - data.value;
    }
  }

  addMoney() {
    this.childDetails.money = this.childDetails.money + 5;
  }
}
