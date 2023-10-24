import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('session')
class Session extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    userId: number

    @Column()
    userRole: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column({ type: 'timestamp' })
    expiresAt: Date
}

export default Session