import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '@nx10/core-data';

@Component({
  selector: 'nx10-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
	_project$;

	public get project$() {
		return this._project$;
	}

	public set project$(value) {
		this._project$ = value;
	}

  constructor(
		private route: ActivatedRoute,
		private projectsService: ProjectsService,
		private router: Router
	) { }

  ngOnInit() {
		this.route.params.subscribe(param => {
			const id = param['id'];
			this.project$ = this.projectsService.getProject(id);
		})
  }

	onClick() {
		this.router.navigate(['/projects']);
	}
}
