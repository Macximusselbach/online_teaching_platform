import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeViewComponent } from "./views/home-view/home-view.component";
import { LoginViewComponent } from "./views/login-view/login-view.component";

const routes: Routes = [
    {
        path: '',
        component: LoginViewComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }