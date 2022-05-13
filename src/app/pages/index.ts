import {NgModule} from "@angular/core";
import {MainPage} from "./Main";
import {CatalogPage} from "./Catalog";
import {AboutPage} from "./About";
import {ComponentsModule} from "../components";
import {ProjectPage} from "./ProjectPage";

@NgModule({
  exports: [
    MainPage,
    CatalogPage,
    AboutPage,
    ProjectPage,
  ],
  imports: [
    ComponentsModule
  ],
  declarations: [MainPage, CatalogPage, AboutPage, ProjectPage]
})
export class PagesModule { }
