import { Component } from '@angular/core';

import { AlertaService } from './alerta.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private service: AlertaService){ }

  enviarMsg(): void{
    this.service.msgAlerta();
  }
}
