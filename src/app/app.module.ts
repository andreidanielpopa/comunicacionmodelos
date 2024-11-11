import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreCocheComponent } from './components/padre-coche/padre-coche.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';
import { HijoDeporteComponent } from './components/hijo-deporte/hijo-deporte.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    HomeComponent,
    MenuComponent,
    HijoCocheComponent,
    PadreCocheComponent,
    PadreDeportesComponent,
    HijoDeporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
