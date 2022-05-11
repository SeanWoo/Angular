import {Component, Input, Output} from "@angular/core";
import {Project} from "../types";

@Component({
  selector: 'create-projects-modal',
  templateUrl: 'view.html',
  styleUrls: ['styles.css']
})
export class CreateProjectsModal {
  @Input() isOpen: boolean = false;
  @Input() callbackClose?: () => void;
  @Input() callbackSubmit?: (model: Project) => void;

  form: Project = {
    id: Math.random(),
    title: "",
    description: "",
    img: "",
    price: 0,
  }

  handleClose = (): void => {
    this.isOpen = false;
    if (this.callbackClose) this.callbackClose();
  }

  handleSubmit = (): void => {
    this.isOpen = false;
    if (this.callbackSubmit) this.callbackSubmit(this.form);
  }
}
