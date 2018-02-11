
import { NgModule } from '@angular/core';
import {MatButtonModule,MatInputModule,MatCardModule,MatCheckboxModule,MatIconModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatInputModule,MatCardModule,MatCheckboxModule,MatIconModule],
  exports: [MatButtonModule,MatInputModule,MatCardModule,MatCheckboxModule,MatIconModule],
})
export class MaterialModule { }