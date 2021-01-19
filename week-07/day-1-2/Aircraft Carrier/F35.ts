import { Aircraft } from './Aircraft';

export class F35 extends Aircraft {
  name: string;
  maxAmmo: number;
  baseDamage: number;
  ammo: number;

  constructor(
    name: string = 'F35',
    maxAmmo: number = 12,
    baseDamage: number = 50,
    ammo: number = 0
  ) {
    super(name, maxAmmo, baseDamage);
    this.ammo = ammo;
  }
}