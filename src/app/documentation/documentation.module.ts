import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { IndexComponent } from './components/index/index.component';
import { PageComponent } from './components/page/page.component';
import { PageListingComponent } from './components/page-listing/page-listing.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    IndexComponent,
    PageComponent,
    PageListingComponent,
    MainContentComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
