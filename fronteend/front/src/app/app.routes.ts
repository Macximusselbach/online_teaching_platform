import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/templte/header/header.component";
import { AtividadesHeaderComponent } from "./components/templte/header/individuals-header/atividades-header/atividades-header.component";
import { AtividadesViewComponent } from "./views/atividades-view/atividades-view.component";
import { HomeViewComponent } from "./views/home-view/home-view.component";
import { LoginViewComponent } from "./views/login-view/login-view.component";
import { PerfilViewComponent } from "./views/perfil-view/perfil-view.component";
import { TurmaViewComponent } from "./views/turma-view/turma-view.component";

const routes: Routes = [
    {
        path: '',
        component: LoginViewComponent
    },
    {
        path: 'Home',
        component: HomeViewComponent
    },
    {
        path: 'Home/Perfil',
        component: PerfilViewComponent
    },
    {
        path: 'Home/Turma',
        component: TurmaViewComponent
    },
    {
        path: 'Home/Atividades',
        component: AtividadesViewComponent
    },
    {
        path: 'Teste',
        component: AtividadesHeaderComponent
    },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }