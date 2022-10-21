import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: ()=> import('../avatar/avatar.module').then(m=>m.AvatarPageModule)
      },
      {
        path: 'ListLis-reorder',
        loadChildren: ()=> import('../list-reorder/list-reorder.module').then(n=>n.ListReorderPageModule)
      },
      {
        path: 'InfinitScroll',
        loadChildren: ()=>import('../infinite/infinite.module').then(c=>c.InfinitePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
