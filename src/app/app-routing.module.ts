import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DocumentationModule } from './documentation/documentation.module';

const routes: Routes = [
  {
    path:'documentation',
    // loadChildren: () => DocumentationModule  //we can do it this way as well
    loadChildren: ()=>
      import('./documentation/documentation.module').then(
        mod => mod.DocumentationModule
      ),
      //canActivate:[AuthGuard]   //we will use it after creating the service
    },
    // {
    //   path: 'documentation/page/:pageTitle', // Dynamic parameter ":pageTitle"
    //   loadChildren: () =>
    //     import('./documentation/documentation.module').then(
    //       (mod) => mod.DocumentationModule
    //     ),
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
