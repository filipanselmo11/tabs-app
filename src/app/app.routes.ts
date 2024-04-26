import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    // children: [
    //   {
    //     path: 'tab1',
    //     loadChildren: () => import('./tab1/tab1.page').then(m => m.Tab1Page),
    //   },
    //   {
    //     path: 'tab2',
    //     loadChildren: () => import('./tab2/tab2.page').then(m => m.Tab2Page),
    //   },
    //   {
    //     path: 'tab3',
    //     loadChildren: () => import('./tab3/tab3.page').then(m => m.Tab3Page),
    //   },
    //   {
    //     path: 'tabs',
    //     redirectTo: '/tabs/tab1',
    //     pathMatch: 'full'
    //   },
    // ],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
];
