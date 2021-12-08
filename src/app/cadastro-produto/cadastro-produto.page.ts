import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  public alertController: AlertController;

  constructor(public alert: AlertController, public nav: NavController) { 
    this.alertController = alert;
  }

  async presentAlert(): Promise<void> {   
    const alerta = await this.alertController.create({
      header: 'Produto Cadastrado com sucesso',
      message: 'Pronto pra comprar ou vender este produto',
      buttons: ['OK']
    });
    alerta.present();
  }

  ngOnInit() {
  }

  trocapagina_telaInicial(){    
    this.nav.navigateForward(`tela-inicial`)
  }

}