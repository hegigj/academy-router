import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

const MATERIAL_THIRD_PARTY_LIBS: any[] = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [
    ...MATERIAL_THIRD_PARTY_LIBS
  ],
  exports: [
    ...MATERIAL_THIRD_PARTY_LIBS
  ]
})
export class MaterialModule {}
