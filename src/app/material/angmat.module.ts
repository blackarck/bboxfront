import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatToolbarModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCheckboxModule,
        MatCardModule,
        MatDialogModule,
        MatTableModule,
        MatSelectModule

    ],
    exports:[
        FormsModule,
        CommonModule,
        MatToolbarModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCheckboxModule,
        MatCardModule,
        MatDialogModule,
        MatTableModule,
        MatSelectModule
    ]
})

export class AngmatModule { }
