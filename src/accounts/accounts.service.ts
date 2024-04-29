import { Injectable, NotFoundException } from "@nestjs/common";
import { Accountdto } from "./new-account.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "./account.entity";
import { Repository } from "typeorm";


@Injectable()
export class AccountsService{
    constructor(
        @InjectRepository(Account) private readonly accountRepostory : Repository<Account>
    ){}


    async newAccount(data :Accountdto){

        console.log(data);

        const account = new Account();
        account.accountnumber =  data.accountnumber ;
        account.accountprice = data.accountprice;

        await this.accountRepostory.save(account);

        return account;
    }

    async accountPriceChanced(data: Accountdto): Promise<Account> {
        const account = await this.accountRepostory.findOne({
          where: { accountnumber: data.accountnumber },
        });
    
        if (!account) {
          throw new NotFoundException(`Account with number ${data.accountnumber} not found.`);
        }
    
        account.accountprice = data.accountprice; 
    
        console.log(account);
        
   
        await this.accountRepostory.save(account);  
    
        return account;  
      }
}