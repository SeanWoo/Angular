import { Component } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../components/ProjectsPanel/types";

@Component({
  selector: 'project-page',
  templateUrl: 'view.html',
  styleUrls: ['styles.css'],
})
export class ProjectPage {
  project: Project;

  constructor(private activateRoute: ActivatedRoute){
    const id = Number(activateRoute.snapshot.params['id']);

    const data = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[];

    this.project = data[id];
  }
}
