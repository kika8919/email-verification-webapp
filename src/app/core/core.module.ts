import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, AppService } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [ApiService, AppService],
  declarations: [],
})
export class CoreModule {}
