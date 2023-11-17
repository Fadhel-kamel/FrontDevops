import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = 'http://localhost:8089/api/skier';

  constructor(private httpClient: HttpClient) { }
  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/all`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/add`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/modify-produit`, product)
  }
  deleteProduct(numSkier : number){
    return  this.httpClient.delete(`${this.API_URL}/delete/${numSkier}`)
  }

}
