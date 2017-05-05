import { Component, OnInit } from '@angular/core'
import { IProduct } from './Product'
import {ProductService} from './produuct.service';

@Component({
    // selector:'pm-products',
    moduleId:module.id,
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit{
   
    pageTitle:string = "Product List *"
    imageWidth:number=50
    imageMargin:number=2
    showImage:boolean = false;
    listFilter:string='cart';
    products: IProduct[];
    errorMassage:string;
                 
    constructor(private _productService:ProductService){
        
    }

    toggleImage():void{
        this.showImage = !this.showImage;
    }
    ngOnInit():void{
        this._productService.getProducts()
            .subscribe(products => this.products = products , 
                       error => this.errorMassage = <any>error );
        console.log("In OnInit")
    }

    onRratingClicked(massage: string):void{
        this.pageTitle = 'Product List:' + massage;
    }

}