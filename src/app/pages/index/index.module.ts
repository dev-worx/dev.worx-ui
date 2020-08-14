import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectListService } from './services/project-list.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ProjectListService],
  imports: [CommonModule, HttpClientModule, IndexRoutingModule, SharedModule],
})
export class IndexModule {}
