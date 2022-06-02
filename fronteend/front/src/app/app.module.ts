import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HeaderComponent } from './components/templte/header/header.component';

import { AppRoutingModule } from './app.routes';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './components/templte/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { PerfilViewComponent } from './views/perfil-view/perfil-view.component';
import { AtividadesViewComponent } from './views/atividades-view/atividades-view.component';
import { TurmaViewComponent } from './views/turma-view/turma-view.component';
import { FooterComponent } from './components/templte/footer/footer.component';
import { LoginServiceComponent } from './Services/login-service/login-service.component';
import { PageServiceComponent } from './Services/page-service/page-service.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeViewComponent,
    HeaderComponent,
    SidenavComponent,
    PerfilViewComponent,
    AtividadesViewComponent,
    TurmaViewComponent,
    FooterComponent,
    LoginServiceComponent,
    PageServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
