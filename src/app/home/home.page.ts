
import { AlertController } from '@ionic/angular';
import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('titleAnimation', [
      state('left', style({ transform: 'translateX(-100%)' })),
      state('center', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(100%)' })),
      transition('* <=> *', animate('2500ms'))
    ])
  ]
})
export class HomePage {
  @HostBinding('@titleAnimation') titleAnimation = 'center';
  static usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private alertController: AlertController) {}

  async mostrarInformacion() {
      const alert = await this.alertController.create({
        header: 'Información del Usuario',
        message: ` ${this.nombre} ${this.apellido}`,
        buttons: ['Cerrar'],
      });

      await alert.present();
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }
}


