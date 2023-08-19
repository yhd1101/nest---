import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('create')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const newProduct = await this.productService.productCreate(
      createProductDto,
    );
    return newProduct;
  }

  @Get()
  async getAllProducts() {
    const products = await this.productService.productGetAll();
    return products;
  }
}
