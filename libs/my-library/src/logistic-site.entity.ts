import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('logistic_site')
export class LogisticSite {
  @PrimaryColumn({ name: 'id', type: 'uuid' })
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;
}
