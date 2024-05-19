import { ConflictException, Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentsService } from 'src/adapters/applications/services/payments.service';

@ApiTags('Pagamentos')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get(':id')
  async getByID(@Param('id') id: number) {
    try {
      const payments = await this.paymentsService.getById(Number(id));
      return payments;
    } catch (err) {
      throw new ConflictException('Payments could not be list');
    }
  }
}
