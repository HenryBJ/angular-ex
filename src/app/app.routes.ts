import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UpdateComponent } from './pages/update/update.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'update/:id', component: UpdateComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'add', component: AddComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
