import { Component, OnInit } from '@angular/core';
import { Customer, CustomerAccount, ResLogin } from '../common/data/customer';
import { extractErrorMessage } from '../common/util/error';
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
  selectedSessionId:string="none"; //just for hyperlink proposal

  constructor(private _userSessionService :UserSessionService,
              private _customerService : CustomerService,
              private _accountService : AccountService) {
    this.customerId = this._userSessionService.bsCustomerId$.value;
    this.selectedSessionId = this._userSessionService.bsSelectedSessionId$.value;
   }

  onSelectMode(mode : MODE){
    this.mode = mode;
  }


  ngOnInit(): void {
    if(this.customerId){
      this._customerService.getCustomerById$(this.customerId)
              .subscribe((customer)=>{
                             this.customer = customer;
                           },
                          (err)=>{console.log(err);
                            this.message = "cannot retreive customer from id : " + extractErrorMessage(err) }
                  )
    }
  }

  onLogin(){
    this.lastStatus=""; this.message=""
    //1. poster customerAccount (username,password) à verifier (login)
    console.log("1. postLogin , login="+JSON.stringify(this.customerAccount));
    this._accountService.postLogin$(this.customerAccount)
        .subscribe((resLogin : ResLogin)=>{
                        this.lastStatus="success";
                        this.message=resLogin.message;
                        this.getCustomerFromCheckedUsername(resLogin.username)
                     },
                    (err)=>{console.log(err);
                            this.lastStatus="fail";
                            this.message = "login fail : " + extractErrorMessage(err)})
    
  }

  getCustomerFromCheckedUsername(username:string){
    //2 recuperer infos "customer" selon username
    console.log("2. getCustomerByUsername , username="+username);
    this._customerService.getCustomerByUsername$(username)
              .subscribe((customers)=>{
                             this.customer = customers[0];
                             console.log("3. authenticated customer ="+JSON.stringify(this.customer));
                             this.customerId = this.customer.id;
                             this._userSessionService.setCustomerId(this.customerId);
                           },
                          (err)=>{console.log(err);
                            this.message = "cannot retreive customer from username : " + extractErrorMessage(err) }
                  )
  }

  onLogout(){
    this.lastStatus="success"; this.message="logout/disconnected"
    this.customerId = null;
    this._userSessionService.setCustomerId(this.customerId);
    this.customer = new Customer();
    this.customerAccount = new CustomerAccount();
    sessionStorage.removeItem("access_token");
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
                                  this.message = "cannot save new account : " + + extractErrorMessage(err)})
          
  }

  postNewCustomer(username:string){
    //2 si ok poster newCustomer avec meme username
    this.customer.username=username;
    this._customerService.postNewCustomer$(this.customer)
              .subscribe((savedCustomer)=>{
                             this.message = "new customer successfuly saved , ready for login" ;
                             this.mode ="existingAccount"; //pour inviter a se loger
                           },
                          (err)=>{console.log(err);
                            this.message = "cannot save new customer : " + extractErrorMessage(err) }
                  )
  }

  lastStatusClasses(){
    return {
      success : this.lastStatus == "success" , 
      failure : this.lastStatus == "fail" 
    }
  }

}
