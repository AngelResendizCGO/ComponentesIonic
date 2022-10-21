import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  activar: boolean = true;

  colores: boolean = true;

  personajes: string[] = ['Acuaman', 'Batman', 'Superman', 'Flash'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {

    console.log(event);

    const moverIt = this.personajes.splice(event.detail.from, 1)[0];

    this.personajes.splice(event.detail.to, 0, moverIt);

    event.detail.complete();

    console.log(this.personajes);

  }

  onClick(){
    this.activar =! this.activar;
    this.colores =! this.colores;
  }

}
