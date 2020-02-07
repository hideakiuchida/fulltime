import { NgModule } from "@angular/core";

import { AlumnoComponent } from "./alumno/alumno.component";
import { PaplindromeComponent } from "./paplindrome/paplindrome.component";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { NavComponent } from "./nav/nav.component";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations: [
        NavComponent,
        HomeComponent,
        AlumnoComponent,
        EmpleadoComponent,
        PaplindromeComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        NavComponent
    ]
 })
 export class PresentationModule { }