import {Component, Input} from "@angular/core";

@Component({
  selector: 'project-item',
  templateUrl: 'view.html',
  styleUrls: ['styles.css']
})
export class ProjectItem {
  @Input() id?: number;
  @Input() img?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() price?: number;
}
