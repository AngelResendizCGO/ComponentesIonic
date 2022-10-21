import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  datos: Observable<any>;
  arreglo: Array<any>[];

  constructor(private DataService: DataService, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.datos = this.DataService.getUsuarios();
  }

  onClick( valor: number ){
    this.popoverCtrl.dismiss({
      id: valor
    });
  }

}
