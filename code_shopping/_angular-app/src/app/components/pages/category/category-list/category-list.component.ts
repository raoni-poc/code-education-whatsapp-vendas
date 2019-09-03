import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

declare let $;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Array<Category> = [];

  @ViewChild(CategoryNewModalComponent, {static: false})
  categoryNewModal: CategoryNewModalComponent;

  @ViewChild(CategoryEditModalComponent, {static: false})
  categoryEditModal: CategoryEditModalComponent;

  @ViewChild(CategoryDeleteModalComponent, {static: false})
  categoryDeleteModal: CategoryDeleteModalComponent;

  categoryId: number;

  constructor(public categoryHttp: CategoryHttpService) {
  };

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.categoryHttp.list().subscribe(response => {
      this.categories = response.data
    })
  }

  showModalInsert(){
    this.categoryNewModal.showModal();
  }

  showModalEdit(categoryId: number){
    this.categoryId = categoryId;
    this.categoryEditModal.showModal();
  }

  showModalDelete(categoryId: number){
    this.categoryId = categoryId;
    this.categoryDeleteModal.showModal();
  }

  onInsertSuccess($event: any) {
    console.log($event);
    this.getCategories();
  }

  onInsertError($event: HttpErrorResponse) {
    console.log($event);
  }

  onEditSuccess($event: any) {
    console.log($event);
    this.getCategories();
  }

  onEditError($event: HttpErrorResponse) {
    console.log($event);
  }

  onDeleteSuccess($event: any) {
    console.log($event);
    this.getCategories();
  }

  onDeleteError($event: HttpErrorResponse) {
    console.log($event);
  }
}
