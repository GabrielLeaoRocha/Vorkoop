import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.page.html',
  styleUrls: ['./tela-inicial.page.scss'],
})
export class TelaInicialPage implements OnInit {

  constructor(private route: ActivatedRoute, public nav: NavController) { }

  public nome: String = "";

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get('nome'); 
    console.log(this.nome);
  }

  trocapagina_cadastroProduto(){    
    this.nav.navigateForward(`cadastro-produto`);
  }

  

}
