import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-todocontainer',
  templateUrl: './todocontainer.component.html',
  styleUrls: ['./todocontainer.component.css']
})
export class TodocontainerComponent implements OnInit {
  todos:Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
