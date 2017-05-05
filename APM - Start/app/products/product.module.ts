import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { ProductListComponent }  from './product-list.component';
import { ProductDetailGuard }  from './Product-guard.service';
import { ProductDetailComponent }  from './product-detail.component';
import { ProductFilterPipe }  from './product-filter.pipe';
import { ProductService } from './produuct.service'

import { SharedModule } from '../shared/shared.module'


@NgModule({
    declarations:[
         ProductListComponent,
            ProductFilterPipe,
            ProductDetailComponent,
    ],
    imports:[
        SharedModule,
        RouterModule.forRoot([
                {path:'products', component: ProductListComponent},
                {path:'product/:id',
                    canActivate:[ProductDetailGuard],
                    component: ProductDetailComponent},
              ])
    ],
     providers:[ProductService, ProductDetailGuard],
})
export class ProductModule{}