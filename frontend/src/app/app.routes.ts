import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AtividadesViewComponent } from "./views/atividades-view/atividades-view.component";
import { HomeViewComponent } from "./views/home-view/home-view.component";
import { LoginViewComponent } from "./views/login-view/login-view.component";
import { PerfilViewComponent } from "./views/perfil-view/perfil-view.component";

const routes: Routes = [
    {
        path: '',
        component: LoginViewComponent
    },
    {
        path: 'login',
        component: LoginViewComponent
    },
    {
        path: 'home',
        component: HomeViewComponent
    },
    {
        path: 'home/perfil',
        component: PerfilViewComponent
    },
    {
        path: 'home/atividades',
        component: AtividadesViewComponent
    },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }