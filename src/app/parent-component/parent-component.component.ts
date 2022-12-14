import { Component, OnInit } from '@angular/core';
import { interval, mergeMap } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  public childDetails: any = { name: 'Jack', money: 10 };
  public childDetails1: any = { name: 'Jill', money: 15 };

  constructor(public sharedService: SharedService) {}

  ngOnInit() {
    interval(60000)
      .pipe(mergeMap((res) => this.sharedService.increment()))
      .subscribe((x) => {
        console.log('>>>> 11');
        this.sharedService.child1.next(x);
      });
  }

  getMoney(index) {
    if (index == 1) {
      this.sharedService.child1.next({ value: 10, operation: 'subtract' });
    } else {
      this.sharedService.child2.next({ value: 10, operation: 'subtract' });
    }
  }

  sendMoney(index) {
    if (index == 1) {
      this.sharedService.child1.next({ value: 10, operation: 'addition' });
    } else {
      this.sharedService.child2.next({ value: 10, operation: 'addition' });
    }
  }
}
