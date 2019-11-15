import { Component, OnInit } from '@angular/core';
import { ChecklistService } from 'src/app/shared/_service/checklist.service';
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  checklist: [];

  constructor(public checklistservice: ChecklistService) { }

  ngOnInit() {
    this.getCheckList();
  }

  // get list of checklist
  getCheckList() {
    this.checklistservice.getAllCheckList().subscribe(data => {
      this.checklist = data;
    }, err => {
      this.checklist = [];
    });
  }
}
