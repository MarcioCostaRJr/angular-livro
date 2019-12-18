import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { AlertaService } from './alerta.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListaPessoaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AlertaService]
})
export class AppModule { }
