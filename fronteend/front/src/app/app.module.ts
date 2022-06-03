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
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import { TurmaHeaderComponent } from './components/templte/header/individuals-header/turma-header/turma-header.component';
import { HomeHeaderComponent } from './components/templte/header/individuals-header/home-header/home-header.component';
import { PerfilHeaderComponent } from './components/templte/header/individuals-header/perfil-header/perfil-header.component';
import { AtividadesHeaderComponent } from './components/templte/header/individuals-header/atividades-header/atividades-header.component';



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
    PageServiceComponent,
    TurmaHeaderComponent,
    HomeHeaderComponent,
    PerfilHeaderComponent,
    AtividadesHeaderComponent
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
    MatGridListModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    CdkTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
