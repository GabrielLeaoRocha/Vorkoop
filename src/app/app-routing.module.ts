import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadstro',
    loadChildren: () => import('./cadstro/cadstro.module').then( m => m.CadstroPageModule)
  },
  {
    path: 'tela-inicial/:nome',
    loadChildren: () => import('./tela-inicial/tela-inicial.module').then( m => m.TelaInicialPageModule)
  },
  {
    path: 'tela-inicial',
    loadChildren: () => import('./tela-inicial/tela-inicial.module').then( m => m.TelaInicialPageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./cadastro-produto/cadastro-produto.module').then( m => m.CadastroProdutoPageModule)
  },
  {
    path: 'confifm-cadastro-user',
    loadChildren: () => import('./confifm-cadastro-user/confifm-cadastro-user.module').then( m => m.ConfifmCadastroUserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
