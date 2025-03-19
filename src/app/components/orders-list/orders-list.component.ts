import { Component, OnInit } from '@angular/core';
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
export class OrdersListComponent implements OnInit {

  displayedColumns: string[] = ['orderId', 'customerName','customerMail','customerAddress', 'cartProducts', 'price', 'deliveryOption'];
  dataSource: Order[] = [];

  constructor(private OrdersService: OrdersService){
  }

  ngOnInit(): void {
    this.OrdersService.getOrders().subscribe(orders => {
      this.dataSource = orders;
      console.log(orders)
    });
  }
}
