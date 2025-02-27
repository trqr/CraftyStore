import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Order } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';
import { HeaderComponent } from "../header/header.component";
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-orders-list',
  imports: [MatTableModule, HeaderComponent, DecimalPipe],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent {

  displayedColumns: string[] = ['orderId', 'customerMail', 'deliveryAddress', 'Cart', 'price', 'deliveryOption'];
  dataSource: Order[] = [];

  constructor(private OrdersService: OrdersService){
    this.dataSource = this.OrdersService.getOrders();
  }

}
