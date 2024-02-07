import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-listing',
  templateUrl: './page-listing.component.html',
  styleUrls: ['./page-listing.component.scss']
})
export class PageListingComponent implements OnInit {

  pages=[{
    id:1,
    title:'About this demo',
    alias: 'About-this-demo'
  },
  {
    id:2,
    title:'Codex Docs',
    alias: 'Codex-Docs'
  },
  {
    id:3,
    title:'Features',
    alias: 'Features'
  },
  {
    id:4,
    title:'Terminology',
    alias: 'Terminology'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
