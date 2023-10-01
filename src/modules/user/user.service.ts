import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

Injectable();
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll() {
    return this.userRepository.find();
  }

  async getOne(id: string) {
    const data = await this.userRepository.findOne({
      where: { id },
    });

    if (!data) {
      throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
    }

    return data;
  }

  async getUsersByName(name: string) {
    const data = await this.userRepository.find({
      where: {
        name: ILike(`%${name}%`),
      },
    });
    return data;
  }

  async getByLogin(login: string) {
    const data = await this.userRepository.findOne({
      where: {
        login,
      },
    });
    return data;
  }

  async getUserByName(name: string) {
    const data = await this.userRepository.findOne({ where: { name } });
    if (!data) {
      return false;
    }
    return data;
  }

  async remove(id: string) {
    const response = await this.userRepository.delete(id);
    return response;
  }

  async change(value: UpdateUserDto, id: string) {
    const response = await this.userRepository
      .createQueryBuilder()
      .update()
      .set(value as unknown as User)
      .where('id = :id', { id })
      .execute();
    return response;
  }

  async create(data: CreateUserDto) {
    const response = this.userRepository.create(data);
    return await this.userRepository.save(response);
  }

  async userLogin(data: CreateUserDto) {
    const user = await this.getUserByName(data.name);
    if (!user) {
      const newUser = await this.create(data);
      return newUser;
    }
    return user;
  }
}
