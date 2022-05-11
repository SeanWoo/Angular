import {Component, Input, Output} from "@angular/core";
import {Project} from "./types";
import {mockData} from "./data";

@Component({
  selector: 'projects-panel',
  templateUrl: 'view.html',
  styleUrls: ['styles.css']
})
export class ProjectsPanel {
  @Output() isOpenModal: boolean = false;
  private initialProjects: Project[] = []

  @Input() findText = '';

  get projects(): Project[] {
    return this.initialProjects
      .filter((project) => project.title.includes(this.findText))
  }

  constructor() {
    this.initialProjects = mockData;
  }

  openModal = (): void => {
    this.isOpenModal = !this.isOpenModal;
  }

  addProject = (model: Project): void => {
    this.initialProjects = [...this.projects, model]
  }

  removeProject = (model: Project): void => {
    this.initialProjects = this.projects.filter((project) => project.id !== model.id);
  }
}
