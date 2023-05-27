import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query
} from '@nestjs/common';
import { LiteraryCategoryService } from './literary-category.service';
import { ApiTags } from '@nestjs/swagger';
import { LiteraryCategory } from './entities/literary-category.entity';

@ApiTags('Categoria')
@Controller('literary-category')
export class LiteraryCategoryController {
  constructor(
    private readonly literaryCategoryService: LiteraryCategoryService,
  ) {}

  @Post()
  create(@Body() createLiteraryCategory: LiteraryCategory) {
    return this.literaryCategoryService.create(createLiteraryCategory);
  }

  @Put()
  update(@Body() updateCategory: LiteraryCategory) {
    return this.literaryCategoryService.update(updateCategory);
  }

  @Get()
  findAll() {
    return this.literaryCategoryService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.literaryCategoryService.findOne(id);
  // }
  @Get('search')
  findByName(@Query('description') description: string) {
    const response = this.literaryCategoryService.findBy(description);

    return response;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.literaryCategoryService.remove(id);
  }
}
