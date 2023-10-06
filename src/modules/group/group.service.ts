// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { FindOptionsWhere, ILike, Repository } from 'typeorm';

// import { Group } from './group.entity';
// import { CreateGroupDto, UpdateGroupDto } from './dto';

// Injectable();
// export class GroupService {
//   constructor(
//     @InjectRepository(Group)
//     private readonly userRepository: Repository<Group>,
//   ) {}

//   async getAll() {
//     return this.userRepository.find();
//   }

//   async getOne(id: string) {
//     const data = await this.userRepository.findOne({
//       where: { id },
//     });

//     if (!data) {
//       throw new HttpException('Data not found', HttpStatus.NOT_FOUND);
//     }

//     return data;
//   }

//   async getUsersByName(name: string) {
//     const data = await this.userRepository.find({
//       where: {
//         name: ILike(`%${name}%`),
//       },
//     });
//     return data;
//   }

//   async getUserByName(name: string) {
//     const data = await this.userRepository.findOne({ where: { name } });
//     if (!data) {
//       return false;
//     }
//     return data;
//   }

//   async remove(id: string) {
//     const response = await this.userRepository.delete(id);
//     return response;
//   }

//   async change(value: UpdateGroupDto, id: string) {
//     const response = await this.userRepository
//       .createQueryBuilder()
//       .update()
//       .set(value as unknown as User)
//       .where('id = :id', { id })
//       .execute();
//     return response;
//   }

//   async create(data: CreateGroupDto) {
//     const response = this.userRepository.create(data);
//     return await this.userRepository.save(response);
//   }


// }
