import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@optio-nx-presentation/material';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
})
export class UiToolbarModule {}
