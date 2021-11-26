import { Injectable } from '@angular/core';
import { Customer } from '../data/customer';
import { Session } from '../data/session';

//Simple cache <id,Entity> (in memory map (v1))

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private mapSessions = new Map<string,Session>();
  private mapCustomers = new Map<string,Customer>();

  public storeSessionInCache(session: Session){
    this.mapSessions.set(session.id,session);
  }

  public getSessionFromCache(sessionId :string){
    return this.mapSessions.get(sessionId);
  }

  public storeCustomerInCache(customer: Customer){
    this.mapCustomers.set(<string>customer.id,customer);
  }

  public getCustomerFromCache(customerId :string){
    return this.mapCustomers.get(customerId);
  }

  constructor() { }
}
