import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  storage: Storage;
  usuario: Usuario;
  usuarios: Usuario[];

  constructor(storage: Storage){
    this.storage = storage
    this.storage.create().then(() => console.log('banco criado'))
    this.storage.get('usuario')
      .then(usuario => this.usuarios.push(...usuario))
      .catch(() => this.storage.set('usuario', this.usuarios))
  }

  salvar(usuario: Usuario){
    this.usuarios.push(usuario);
    console.log('teste ok');
    this.storage.set('usuario', this.usuarios);
    console.log(this.storage.get('usuario'));
  }

  editar(usuarioEditar: Usuario){
    for(let usuario of this.usuarios){
      if(usuario.id == usuarioEditar.id){
        usuario.nome = usuarioEditar.nome;
      }
    }
    console.log(this.usuarios)
    this.storage.set('usuario', this.usuarios)
  }

  deletar(indice: number){
    this.usuarios.splice(indice -1, 1)
    console.log(this.usuarios)
    this.atualizarOrdem()
    this.storage.set('usuarios', this.usuarios)
  }

  atualizarOrdem(){
    this.usuarios.forEach(usuario => usuario.id = this.usuarios.indexOf(usuario) + 1)
  }
}
