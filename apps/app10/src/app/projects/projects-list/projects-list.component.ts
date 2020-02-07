import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@nx10/core-data';

@Component({
  selector: 'nx10-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
	@Input() projects: Project[];
	@Output() selected = new EventEmitter;
	@Input() readOnly;
	@Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
