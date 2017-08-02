// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { CollectionsRoutes } from "./collections/collections.routes";

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...CollectionsRoutes
];
