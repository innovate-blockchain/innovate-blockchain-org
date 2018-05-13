/**Import all required material modules here and export them*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule,
        MatInputModule, MatTabsModule, MatDialogModule, MatCardModule],
    exports: [MatButtonModule, MatFormFieldModule,
        MatInputModule, MatTabsModule, MatDialogModule, MatCardModule]
})
export class MaterialModule { }