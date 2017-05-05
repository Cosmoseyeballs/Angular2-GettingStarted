import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/do';
import  'rxjs/add/operator/map';


import { IProduct } from './Product'


@Injectable()
export class ProductService{
    private _producUrl = 'api/products/products.json'
    
    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]>{
        return this._http.get(this._producUrl)
                            .map((response:Response)=>
                                <IProduct[]>response.json())
                                .do(data=> console.log('All: '+ JSON.stringify(data)))
                                .catch(this.handelError);
    }

    getProduct(id:number):Observable<IProduct>{
       let product = this._http.get(this._producUrl)
                        .map((response:Response) => {
                            let p =  <IProduct[]>response.json()
                            return p.find(i=>i.productId == id);
                        })
                        .do(data=> console.log('All: '+ JSON.stringify(data)))
                        .catch(this.handelError)
                       
        return product;

            //     return this.getProducts()
            // .map((products: IProduct[]) => products.find(p => p.productId === id));
   
    }

    private handelError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}