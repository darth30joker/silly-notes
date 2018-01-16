import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

const MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
