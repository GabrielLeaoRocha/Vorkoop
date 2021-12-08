import { Usuario } from '../model/usuario';
import { Component, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BdService } from '../bd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public username: String = "";
  public senha: String = "";
  public banco: BdService;
  public usuario: Usuario;
  public usuarios: Usuario[];
  public alertController: AlertController;

  constructor(public alert: AlertController, public nav: NavController, bd: BdService) {  
    this.alertController = alert;
    this.banco = bd;
    this.usuarios = this.banco.usuarios;
  }

  async presentAlert(): Promise<void> {
    //Cria o alerta e define suas propriedades.
    const alerta = await this.alertController.create({
      header: 'Erro',
      message: 'Usuário ou senha incorreto(s)',
      buttons: ['OK']
    });
    alerta.present();
  }

  validaUsuario(){
    for(let usuario of this.usuarios){
      if(this.username == usuario.username){
        if(this.senha == usuario.senha){
          return true;
        }        
      }      
    }  
    this.presentAlert();
    return false;  
  }

  trocapagina_cadastro(){    
    this.nav.navigateForward(`cadstro`)
  }

  trocapagina_pagInicial(){ 
    if(this.validaUsuario()){
      this.nav.navigateForward(`tela-inicial/${this.username}`)
    }        
  }
}
