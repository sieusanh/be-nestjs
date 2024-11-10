import { SchemaFactory } from '@nestjs/mongoose';
import { Account } from './accounts.model';

export const AccountSchema = SchemaFactory.createForClass(Account);

AccountSchema.pre<Account>('save', async function (next) {
    // this.constructor.findOne();
    const doc = Account;
    const a = 
    // const count = await doc.fin
    doc.id = 'a';
    next();
});
