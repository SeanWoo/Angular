import {NgModule} from "@angular/core";
import {Navbar} from "./Navbar";
import {Layout} from "./Layout";
import {RouterModule} from "@angular/router";
import {FilterPanel} from "./FilterPanel";
import {UiComponentsModule} from "../ui";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ProjectsPanel} from "./ProjectsPanel";
import {CommonModule} from "@angular/common";
import {ProjectItem} from "./ProjectsPanel/ProjectItem";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzModalModule} from "ng-zorro-antd/modal";
import {CreateProjectsModal} from "./ProjectsPanel/CreateProjectModal";
import {FormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";

@NgModule({
  declarations: [Navbar, Layout, FilterPanel, ProjectsPanel, ProjectItem, CreateProjectsModal],
  exports: [Navbar, Layout, FilterPanel, ProjectsPanel, ProjectItem, CreateProjectsModal],
  imports: [
    RouterModule,
    UiComponentsModule,
    NzButtonModule,
    CommonModule,
    NzInputModule,
    NzCheckboxModule,
    NzModalModule,
    FormsModule,
    NzFormModule,
  ]
})
export class ComponentsModule { }
