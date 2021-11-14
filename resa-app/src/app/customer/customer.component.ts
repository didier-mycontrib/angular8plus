import { Component, OnInit } from '@angular/core';
import { Customer, CustomerAccount } from '../common/data/customer';
import { AccountService } from '../common/service/account.service';
import { CustomerService } from '../common/service/customer.service';
import { UserSessionService } from '../common/service/user-session.service';

type MODE = "newAccount" | "existingAccount" | "notSelected";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
 
  customer : Customer = new Customer();
  customerAccount : CustomerAccount = new CustomerAccount();
  customerId : string|null = null;
  mode : MODE = "notSelected";

  constructor(private _userSessionService :UserSessionService,
              private _customerService : CustomerService,
              private _accountService : AccountService) {
    this.customerId = this._userSessionService.bsCustomerId$.value;
   }
  onSelectMode(mode : MODE){
    this.mode = mode;
  }


  ngOnInit(): void {
  }

  onLogin(){

  }

  onNewAccount(){

  }

}
