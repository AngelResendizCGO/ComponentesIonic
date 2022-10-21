import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private DataService: DataService) {}

  componentes: Observable<Componente[]>;

  ngOnInit() {
    this.componentes = this.DataService.getMenuOpts();
  }

}
