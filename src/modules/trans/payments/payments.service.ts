import { Injectable } from '@nestjs/common';
import { PaymentDto } from './payments.dto';
import { Payment } from './payments.model';
import { PaymentsRepository } from './payments.repository';
import { ModuleServiceFactory, ID } from 'src/common';

@Injectable()
export class PaymentsService {

    constructor(
        protected repository: PaymentsRepository,

        protected moduleServiceFactory: 
            ModuleServiceFactory<PaymentDto, Payment>,

    ) {}

    isExistedEmail(email: string) {
        return false;
    }

    insertOne(paymentDto: PaymentDto): Promise<PaymentDto> {

        const payment: Payment = 
            this.moduleServiceFactory.convertDtoToModel(paymentDto);
        const result = this.repository.insertOne(payment);

        return result;
    }

    async findById(id: ID): Promise<PaymentDto> {

        const model: Payment 
            = await this.repository.findById(id);
        
        const dto: PaymentDto = this.moduleServiceFactory.convertModelToDto(model);
        return dto;
    }
}

