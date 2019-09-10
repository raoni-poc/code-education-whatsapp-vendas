import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component.js";
import {HttpErrorResponse} from "@angular/common/http.js";
import {ProductPhotoHttpService} from "../../../../services/http/product-photo-http.service.js";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product-photo-delete-modal',
  templateUrl: './product-photo-delete-modal.component.html',
  styleUrls: ['./product-photo-delete-modal.component.css']
})
export class ProductPhotoDeleteModalComponent implements OnInit {

  errors = {};
  productId: number;
  @Input()
  photoId: number;

  @ViewChild(ModalComponent, {static: false}) modal: ModalComponent;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public productPhotoHttp: ProductPhotoHttpService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.product;
    });
  }

  destroy() {
    this.productPhotoHttp
      .destroy(this.productId, this.photoId)
      .subscribe(() => this.onSuccess.emit(true));
  }

  showModal() {
    this.modal.show();
  }

  hideModal() {
    this.modal.hide();
  }
}
