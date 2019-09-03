import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent implements OnInit {

  category = {
    name: '',
    active: true
  };

  _categoryId: number;

  @ViewChild(ModalComponent, {static: false})
  modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  submit() {
    console.log('onSubmit');
    const token = window.localStorage.getItem('token');
    this.http.put(`http://localhost:8000/api/categories/${this._categoryId}`, this.category, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .subscribe((category) => {
        this.onSuccess.emit(category);
        this.modal.hide();
      },  error => this.onError.emit(error) );
  }

  @Input()
  set categoryId(value) {
    if(!value){
      return
    }
    this._categoryId = value;
    const token = window.localStorage.getItem('token');
    this.http.get<{ data: any }>(`http://localhost:8000/api/categories/${value}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .subscribe((response) => {
        console.log(response.data);
        this.category = response.data
      })
  }

  showModal() {
    this.modal.show();
  }

  hideModal($event) {
    console.log($event);
  }

}
