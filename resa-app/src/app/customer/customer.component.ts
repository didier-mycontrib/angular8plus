import { Component, OnInit } from '@angular/core';
import { Customer, CustomerAccount, ResLogin } from '../common/data/customer';
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
  lastStatus : "success"|"fail"|"" = "";
  message : string = ""
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
    this.lastStatus=""; this.message=""
    //1. poster customerAccount (username,password) à verifier (login)
    this._accountService.postLogin$(this.customerAccount)
        .subscribe((resLogin : ResLogin)=>{
                        this.lastStatus="success";
                        this.message=resLogin.message;
                        this.getCustomerFromCheckedUsername(resLogin.username)
                     },
                    (err)=>{console.log(err);
                            this.lastStatus="fail";
                            this.message = "login fail " + err})
    
  }

  getCustomerFromCheckedUsername(username:string){
    //2 recuperer infos "customer" selon username
    this._customerService.getCustomerByUsername$(username)
              .subscribe((customers)=>{
                             this.customer = customers[0];
                             this.customerId = this.customer.id;
                           },
                          (err)=>{console.log(err);
                            this.message = "cannot retreive customer" }
                  )
  }

  onNewAccount(){
          this.lastStatus=""; this.message=""
          //1 poster newAccount (username,password) et tester si ok
          this._accountService.postNewAccount$(this.customerAccount)
              .subscribe((savedCustomerAccount)=>{
                              this.lastStatus="success";
                              this.message="new account successfuly saved"
                              this.postNewCustomer(savedCustomerAccount.username);
                           },
                          (err)=>{console.log(err);
                                  this.lastStatus="fail";
                                  this.message = "cannot save new account"})
          
  }

  postNewCustomer(username:string){
    //2 si ok poster newCustomer avec meme username
    this.customer.username=username;
    this._customerService.postNewCustomer$(this.customer)
              .subscribe((savedCustomer)=>{
                             this.message = "new customer successfuly saved" 
                           },
                          (err)=>{console.log(err);
                            this.message = "cannot save new customer" }
                  )
  }

  lastStatusClasses(){
    return {
      success : this.lastStatus == "success" , 
      failure : this.lastStatus == "fail" 
    }
  }

}
