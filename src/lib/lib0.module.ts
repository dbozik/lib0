import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './component/demo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoComponent],
  exports: [DemoComponent]
})
export class Lib0Module {}
