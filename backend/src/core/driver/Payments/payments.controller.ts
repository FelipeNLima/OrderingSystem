import { ConflictException, Controller, Get, Param } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { PaymentsService } from 'src/adapters/applications/services/payments.service';
import { Roles } from 'src/core/guard/decorators/roles.decorator';

@ApiTags('Pagamentos')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get(':id')
  @ApiHeader({
    name: 'user',
    description: 'ID do usuário ADMIN',
  })
  @Roles(['admin'])
  async getByID(@Param('id') id: number) {
    try {
      const payments = await this.paymentsService.getById(Number(id));
      return payments;
    } catch (err) {
      throw new ConflictException('Payments could not be list');
    }
  }
}
