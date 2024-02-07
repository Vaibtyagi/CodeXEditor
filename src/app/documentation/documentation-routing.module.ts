import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
{ path:'',
  component: IndexComponent,
  data: {
    title: 'Documentation'
  },
  children:[{
    path:':page',
    component: PageComponent,
    data: {
      title: 'page-Documentation'
    },
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
