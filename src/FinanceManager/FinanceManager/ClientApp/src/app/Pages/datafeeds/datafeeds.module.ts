import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatafeedsRoutingModule } from './datafeeds-routing.module';
import { DatafeedsComponent } from './datafeeds.component';
import { MaterialModule } from 'src/app/Components/material.module';
import { DatafeedTruelayerComponent } from './datafeed-truelayer/datafeed-truelayer.component';
import { DatafeedsService } from '../../Services/datafeeds.service';
import { DatafeedsListComponent } from './datafeeds-list/datafeeds-list.component';

@NgModule({
  declarations: [
    DatafeedsComponent,
    DatafeedTruelayerComponent,
    DatafeedsListComponent,
  ],
  imports: [CommonModule, DatafeedsRoutingModule, MaterialModule],
  providers: [DatafeedsService],
})
export class DatafeedsModule {}
