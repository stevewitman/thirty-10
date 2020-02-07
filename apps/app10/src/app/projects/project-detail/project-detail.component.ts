import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx10-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  currentProject;
	originalTitle;

	@Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
	};
	
  constructor() { }

  ngOnInit() {
  }

}
