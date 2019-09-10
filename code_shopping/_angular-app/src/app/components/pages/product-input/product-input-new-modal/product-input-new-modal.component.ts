import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductInputHttpService} from "../../../../services/http/product-input-http.service";
import productInputFieldOptions from "../product-input-form/product-input-field-options";

@Component({
  selector: 'product-input-new-modal',
  templateUrl: './product-input-new-modal.component.html',
  styleUrls: ['./product-input-new-modal.component.css']
})
export class ProductInputNewModalComponent implements OnInit {

  form: FormGroup;
  errors = {};
  @ViewChild(ModalComponent, {static: false}) modal: ModalComponent;
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public inputHttp: ProductInputHttpService, private formBuilder: FormBuilder) {
    const maxLength = productInputFieldOptions.name.validationMessage.maxLength;
    this.form = this.formBuilder.group({
      // name: ['', [Validators.required, Validators.maxLength(maxLength)]],
      name: [''],
      active: true
    });
  }

  ngOnInit() {
  }

  submit() {
    this.inputHttp
      .create(this.form.value)
      .subscribe((input) => {
        this.form.reset({
          name: '',
          active: true
        });
        this.onSuccess.emit(input);
        this.modal.hide();
      }, responseError => {
        if(responseError.status === 422){
          this.errors = responseError.error.errors
        }
        this.onError.emit(responseError)
      });
  }

  showModal() {
    this.modal.show();
  }

  showErrors(){
    return Object.keys(this.errors).length != 0;
  }

  hideModal($event) {
    console.log($event);
  }

}
