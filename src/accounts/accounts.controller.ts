import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AccountsService } from './accounts.service';
import { Account } from './account.entity';
import { Accountdto } from './new-account.dto';

@Controller('accounts')
export class AccountsController {

    constructor(private readonly accountService : AccountsService ){}

    @EventPattern('NewAccount')
    async newAccount(data : Accountdto){
      await this.accountService.newAccount(data);
    }

    @EventPattern('AccountPriceChaned')
    async  accountPriceChanced(data : Accountdto){
      await this.accountService.accountPriceChanced(data);
    }
}
