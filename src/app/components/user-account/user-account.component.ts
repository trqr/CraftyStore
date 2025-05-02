import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order.model';
import { DecimalPipe } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from '../header/header.component';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-user-account',
  imports: [MatPaginatorModule, MatTableModule, DecimalPipe, MatTabsModule, HeaderComponent, MatButtonModule, MatButton, MatProgressBarModule],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.scss'
})
export class UserAccountComponent implements OnInit {
  constructor(private orderService: OrdersService, private usersService: UsersService){}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource! : Order[];

  userData! : User;
  totalFidelityPoints : number = 0;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(orders => {
      this.dataSource = orders;
    });
    this.usersService.getUserInfo().subscribe(userInfo => {
      this.userData = userInfo;
    })
  }

  getTotalFidelityPoints(){
    this.totalFidelityPoints = 0;
    this.dataSource.map(order => this.totalFidelityPoints += order.price);
    this.totalFidelityPoints *= 10;
    return this.totalFidelityPoints;
  } 
}



// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
