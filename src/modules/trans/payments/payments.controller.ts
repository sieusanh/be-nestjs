import {
    Get, Post, Put, Delete,
    Controller, Body, Query,
    Req, Res,
    Header,
    HttpCode, HttpStatus, Param, Redirect,
    HttpException,
} from '@nestjs/common';
import { ApiOperation, ApiBody, ApiHeader, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ID, QueryParams, QueryParser, PathParams, HttpErrorMessage } from 'src/common';

import { PaymentsService } from './payments.service';
import { PaymentDto } from './payments.dto';
import { Payment } from './payments.model';
import { SWAGGER_TAG_PAYMENT } from './payments.constant';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'common/guards';
import { Roles } from 'common/decorator';
import { FindManyOptions } from 'typeorm';


@Controller()
@UseGuards(RolesGuard)
@ApiTags(SWAGGER_TAG_PAYMENT)
@ApiHeader({
    name: 'X-MyHeader',
    description: 'Custom header'
})
@ApiBearerAuth()
export class PaymentsController {

    private queryParser: QueryParser;

    constructor(
        protected paymentsService: PaymentsService,
    ) { 
        this.queryParser = new QueryParser();
    } 
    
    @Post()
    @Roles(['admin'])
    @HttpCode(HttpStatus.CREATED)

    @ApiOperation({ summary: `Create` })
    @ApiBody({
        description: 'Body',
        // examples: this?.['apiBodyExample'],
        examples: {
            // 'Case 1': {
            //     value: {
            //         prop1: 'val1',
            //         prop2: 'val2'
            //     }
            // },
            'Case 2': {
                // value: getSchemaPath(this?.['apiBodyExample']!)
                value: undefined
            }
        }
    })
    async create(
        // @Body(new ValidationPipe())
        @Body()
        paymentDto: PaymentDto,

        // @Res() res: Response
    ): Promise<PaymentDto> {
        try {

            const result = this.paymentsService
                .insertOne(paymentDto);

            return result;
            // res.status(HttpStatus.CREATED).json(data);
        } catch (error) {
            throw new HttpException(
                HttpErrorMessage.CREATE, 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: `findOne` })
    findById(
        @Param() pathParams: PathParams,
        // @Res({ passthrough: true }) res: Response
    ) {
        try {
            const { id } = pathParams;

            const data = this.paymentsService.findById(id!);

            return data;
            // res.status(HttpStatus.CREATED).json(data);

        } catch (error) {
            throw new HttpException(
                HttpErrorMessage.NOT_FOUND, 
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    // @Get()
    // @HttpCode(HttpStatus.OK)
    // @ApiOperation({ summary: `findAll` })
    // async findMany(
    //     @Query() query: QueryParams,
    // ) {
    //     try {
    //         const queryOptions: FindManyOptions
    //             = this.queryParser.parseFindManyQuery(query);

    //         const result = await this.paymentsService.findMany(queryOptions);

    //         return result;
    //     } catch (err) {

    //         throw new HttpException(
    //             HttpErrorMessage.INTERNAL_SERVER_ERROR, 
    //             HttpStatus.INTERNAL_SERVER_ERROR
    //         );
    //     }
    // }

    // @Put(':id')
    // @HttpCode(HttpStatus.NO_CONTENT)
    // @ApiOperation({ summary: `update` })
    // updateById(
    //     @Param('id') id: ID,
    //     @Body() paymentDto: PaymentDto,
    // ) {
    //     try {
    //         return this.paymentsService.updateById(id, paymentDto);

    //     } catch (error) {
    //         throw new HttpException(
    //             HttpErrorMessage.UPDATE, 
    //             HttpStatus.INTERNAL_SERVER_ERROR
    //         );
    //     }
    // }

}
