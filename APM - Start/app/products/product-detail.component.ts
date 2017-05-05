import { Component, OnInit } from '@angular/core'
import { IProduct } from './Product'
import {ActivatedRoute, Router} from '@angular/router'
import {ProductService} from './produuct.service';

@Component({
    moduleId:module.id,
    templateUrl:'product-detail.component.html'
})
export class ProductDetailComponent{
    pageTitle:string = 'Product Details';
    product:IProduct;
    errorMassage:string;

    constructor(private _route: ActivatedRoute,
                    private _router: Router, 
                    private _productService:ProductService){}

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        this._productService.getProduct(id).subscribe(
            product=>this.product = product,
             error => this.errorMassage = <any>error
        );

        this.pageTitle += ` :${id}`
    }

    onBack():void{
        this._router.navigate(['/products'])
    }
}