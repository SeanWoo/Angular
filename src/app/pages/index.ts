import {NgModule} from "@angular/core";
import {MainPage} from "./Main";
import {CatalogPage} from "./Catalog";
import {AboutPage} from "./About";
import {ComponentsModule} from "../components";

@NgModule({
  exports: [
    MainPage,
    CatalogPage,
    AboutPage,
  ],
  imports: [
    ComponentsModule
  ],
  declarations: [MainPage, CatalogPage, AboutPage]
})
export class PagesModule { }
