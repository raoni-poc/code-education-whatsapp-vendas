import {ElementRef, Injectable} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {environment} from "../../../../../environments/environment";
import {AbstractControl} from "@angular/forms";

declare const $;

@Injectable({
  providedIn: 'root'
})
export class ProductIdFieldService {

  data;
  options: Select2Options;
  select2Element: ElementRef;
  formControl: AbstractControl;
  constructor(private authService: AuthService) {
  }

  get divModal() {
    const modalElement = this.select2Native.closest('modal');
    return modalElement.firstChild;
  }

  get select2Native() {
    return this.select2Element.nativeElement
  }

  make(select2Element: ElementRef, formControl: AbstractControl) {
    this.select2Element = select2Element;
    this.formControl = formControl;
    this.options = {
      minimumInputLength: 1,
      dropdownParent: $(this.divModal),
      theme: 'bootstrap4',
      ajax:{
        headers: {
          'Authorization': this.authService.authorizationHeader
        },
        url: `${environment.api.url}/products`,
        data(params){
          return {
            search: params.term
          }
        },
        processResults(data){
          return {
            results: data.data.map((product)=>{
              return {id: product.id, text: product.name}
            })
          }
        }
      }
    };
    this.data = [];
    this.onClosingDropdown();
    this.resetSelect2OnSetNull();
  }

  private onClosingDropdown(){
    $(this.select2Native).on('select2:closing', (e: Event) => {
      const element: HTMLInputElement = (<any>e.target);
      this.formControl.markAsTouched();
      this.formControl.setValue(element.value)
    });
  }

  private resetSelect2OnSetNull(){
    this.formControl.valueChanges.subscribe((value) =>{
      if(!value){
        const selectField = $(this.select2Native).find('select');
        selectField.val(null).trigger('change')
      }
    })
  }

  updateFormControl(value){
    this.formControl.setValue(value);
  }
}
