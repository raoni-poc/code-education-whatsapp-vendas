import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import productInputFieldOptions from "./product-input-field-options";

@Component({
  selector: 'product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css']
})
export class ProductInputFormComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.changeRef.detectChanges();
  }

  get fieldOptions(): any{
    return productInputFieldOptions;
  }
}
