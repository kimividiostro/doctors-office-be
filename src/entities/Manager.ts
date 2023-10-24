import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("manager")
export class Manager extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  userName: string;

  @Column({select: false})
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({
    unique: true,
  })
  email: string;
}
