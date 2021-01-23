export class Aircraft {
  name: string;
  maxAmmo: number;
  baseDamage: number;
  ammo: number;

  constructor(name: string, maxAmmo: number, baseDamage: number) {
    this.name = name;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammo = 0;
  }

  fight(): number {
    let damage: number = this.ammo * this.baseDamage;
    return damage;
  }

  refill(amount: number): number {
    if (this.ammo + amount <= this.maxAmmo) {
      this.ammo += amount;
    } else {
      let getAmmo: number = this.maxAmmo - this.ammo;
      return amount - getAmmo;
    }
  }

  getType(): string {
    return this.name;
  }

  getStatus(): void {
    console.log(
      `Type: ${this.name} (\n) Ammo: ${this.ammo} (\n) Base damage: ${
        this.baseDamage
      } (\n) All damage: ${this.baseDamage * this.ammo}`
    );
  }

  isPriority(): boolean {
    return this.name === 'F35' ? true : false;
  }
}
