import { Aircraft } from './Aircraft';

export class F16 extends Aircraft {
  name: string;
  maxAmmo: number;
  baseDamage: number;
  ammo: number;

  constructor(
    name: string = 'F16',
    maxAmmo: number = 8,
    baseDamage: number = 30,
    ammo: number = 0
  ) {
    super(name, maxAmmo, baseDamage);
    this.ammo = ammo;
  }
}
