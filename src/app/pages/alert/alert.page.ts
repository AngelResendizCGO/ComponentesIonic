import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  handlerMessage = '';
  roleMessage = '';

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.handlerMessage = 'Alert cancelada';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmada';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Rol asignado: ${role}`;
  }

  async infoClick() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Porfavor ingrese la Informacion',
      buttons: [
        {
          text: 'Cancelar',
          role: 'canel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Ok',
          handler: ( data: any ) => {
            console.log(data)
          }
        }
      ],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apodo (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Una pequeña descripcion',
        },
      ],
    });

    await alert.present();
  }

  async RadioButton() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Selecciona Tu Color Favorito',
      buttons: [{
        text: 'Ok',
          handler: ( data: any ) => {
            console.log(data)
          }
      }],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green',
        },
      ],
    });

    await alert.present();
  }

  async Custom() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Esta Seguro?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

}
