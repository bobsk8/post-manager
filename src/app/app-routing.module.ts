import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
  { path: '**', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
