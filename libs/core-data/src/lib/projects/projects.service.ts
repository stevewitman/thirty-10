import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '@nx10/core-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsUrl = 'https://server-30-x-30.herokuapp.com/projects';

  constructor(private httpClient: HttpClient) { }

  getProjects() {
    return this.httpClient.get(this.projectsUrl);
  }

  getProject(id: string) {
    return this.httpClient.get(this.projectsUrl + '/' + id);
  }

  createProject(project: Project) {
    return this.httpClient.post(this.projectsUrl, project);
  }

  updateProject(project: Project) {
    return this.httpClient.patch(this.projectsUrl + '/' + project.id, project);
  }

  deleteProject(id: string) {
    return this.httpClient.delete(this.projectsUrl + '/' + id)
  }
}
