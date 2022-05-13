import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from "./pages";
import { ComponentsModule } from "./components";
import {MainPage} from "./pages/Main";
import {CatalogPage} from "./pages/Catalog";
import {AboutPage} from "./pages/About";
import {RouterModule, Routes} from "@angular/router";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectPage } from "./pages/ProjectPage";

registerLocaleData(ru);

const appRoutes: Routes =[
  { path: '', component: MainPage},
  { path: 'catalog', component: CatalogPage},
  { path: 'catalog/:id', component: ProjectPage},
  { path: 'about', component: AboutPage},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    PagesModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
