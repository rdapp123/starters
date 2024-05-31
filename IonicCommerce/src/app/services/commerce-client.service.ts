import { Injectable } from '@angular/core';
import Commerce from '@chec/commerce.js';
import { environment } from 'src/environments/environment';

import { CommerceClientService } from 'src/app/services/commerce-client.service';

OnInit() {
   this.loadProducts();
}

export class ProductsPage implements OnInit {
  constructor(private commerce: CommerceClientService) {}
}

@Injectable({
  providedIn: 'root'
})



export class CommerceClientService {

  private mClient: any;

  constructor() {
    this.mClient = new Commerce(
      environment.commerceApiKey,
      !environment.production,
    );
  }

  public products: any = [];

async loadProducts() {
    try {
      const { data: products } = await this.commerce.client.products.list();
      this.products = products
    } catch {
     // a network error occurred or something went wrong
    }
}

}



