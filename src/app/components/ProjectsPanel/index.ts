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

  @Input() findText = '';

  get projects(): Project[] {
    const result = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[]
    return result
      .filter((project) => project.title.toLowerCase().includes(this.findText.toLowerCase()))
  }

  constructor() {
    if (!localStorage.getItem('projects')){
      localStorage.setItem('projects', JSON.stringify(mockData))
    }
  }

  openModal = (): void => {
    this.isOpenModal = !this.isOpenModal;
  }

  addProject = (model: Project): void => {
    const result = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[]

    localStorage.setItem('projects', JSON.stringify([...result, model]))
  }

  removeProject = (model: Project): void => {
    const result = JSON.parse(localStorage.getItem('projects') ?? '[]') as Project[]

    const filtered = result.filter((project) => project.id !== model.id);

    localStorage.setItem('projects', JSON.stringify(filtered))
  }
}
