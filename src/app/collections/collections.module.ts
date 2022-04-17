import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TablesComponent } from './tables/tables.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule, 
    SharedModule
  ], 
})
export class CollectionsModule { }
