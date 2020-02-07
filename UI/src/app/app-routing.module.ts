import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from "./presentation/empleado/empleado.component";
import { AlumnoComponent } from "./presentation/alumno/alumno.component";
import { PaplindromeComponent } from "./presentation/paplindrome/paplindrome.component";
import { HomeComponent } from "./presentation/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'empleado', component: EmpleadoComponent},
    { path: 'alumno', component: AlumnoComponent},
    { path: 'palindrome', component: PaplindromeComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }