import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from "./collections/collections.component";

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent,
  CollectionsComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
export * from "./collections/collections.component";