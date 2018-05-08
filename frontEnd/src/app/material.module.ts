/**Import all required material modules here and export them*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule,
        MatInputModule],
    exports: [MatButtonModule],
})
export class MaterialModule { }