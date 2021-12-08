import { Usuario } from './../model/usuario';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { BdService } from '../bd.service';

@Component({
  selector: 'app-cadstro',
  templateUrl: './cadstro.page.html',
  styleUrls: ['./cadstro.page.scss'],
})

export class CadstroPage implements OnInit {

  public banco: BdService;
  public usuario: Usuario;
  public usuarios: Usuario[];
  public confirmacao: AlertController;
  public senhaIncompat: AlertController;
  public senhaNull: AlertController;
  public usuarioNull: AlertController;
  public emailNull: AlertController;
  public nomeNull: AlertController;

  public id: number = 0;
  public nome: String = "";
  public email: String = "";
  public sexo: number = 0;
  public celular: String = "";
  public username: String = "";
  public senha: String = "";
  public confirmSenha: String = "";  


  constructor(public alert: AlertController, public nav: NavController, bd: BdService) {
    this.confirmacao = alert;
    this.senhaIncompat = alert;
    this.senhaNull = alert;
    this.usuarioNull = alert;
    this.emailNull = alert;
    this.nomeNull = alert;
    this.banco = bd;
    this.usuarios = this.banco.usuarios;
  }

  public criaUsuario(){
    this.usuario.nome = this.nome,
    this.usuario.email = this.email,
    this.usuario.sexo = this.sexo,
    this.usuario.celular = this.celular,
    this.usuario.username = this.username,
    this.usuario.senha = this.senha
  }

  async confirmacaoAlert(): Promise<void> {
    const alerta = await this.confirmacao.create({
      header: 'Cadastrado com sucesso',
      message: 'Acesse o sistema logando com seu username e senha cadastrada',
      buttons: ['OK']
    });
    alerta.present();
  }

  async senhaIncompatAlert(): Promise<void> {
    const alerta = await this.senhaIncompat.create({
      header: 'Senhas incompatíveis',
      message: 'verifique a confirmação da senha para que ambas estejam iguais',
      buttons: ['OK']
    });
    alerta.present();
  }

  async senhaNullAlert(): Promise<void> {
    const alerta = await this.senhaNull.create({
      header: 'Insira uma Senha',
      message: 'Verifique o campo senha e depois a confirme',
      buttons: ['OK']
    });
    alerta.present();
  }

  async usuarioNullAlert(): Promise<void> {
    const alerta = await this.usuarioNull.create({
      header: 'Insira um Username',
      message: 'Verifique o campo username',
      buttons: ['OK']
    });
    alerta.present();
  }

  async emailNullAlert(): Promise<void> {
    const alerta = await this.emailNull.create({
      header: 'Insira um Email',
      message: 'Verifique o campo email, e preencha com um válido',
      buttons: ['OK']
    });
    alerta.present();
  }

  async nomeNullAlert(): Promise<void> {
    const alerta = await this.nomeNull.create({
      header: 'Insira seu Nome Completo',
      message: 'Verifique o campo Nome Completo',
      buttons: ['OK']
    });
    alerta.present();
  }

  ngOnInit() {       
  }

  trocapagina_home(){    
    this.nav.navigateForward(`home`)
  }

  verificar_cadastro(){
    console.log('vai');
    if(this.nome != ""){
      if(this.email != ""){
        if(this.username != ""){
          if(this.senha != ""){
            if(this.confirmSenha == this.senha){
              //this.usuario.id = (this.usuarios.length + 1);
              console.log(this.nome);
              this.criaUsuario();
              this.banco.salvar(this.usuario);
              this.confirmacaoAlert();
            }else{
              this.senhaIncompatAlert();
            }
          }else{
            this.senhaNullAlert();
          }
        }else{
          this.usuarioNullAlert();
        }
      }else{
        this.emailNullAlert();
      }
    }else{
      this.nomeNullAlert();
    }

  }
}
