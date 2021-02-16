import { Aquarium } from './aquarium';

let aquarium = new Aquarium();
aquarium.getStatus();
aquarium.addFish(`Clownfish`, `Nemo`, 6, `orange`);
aquarium.addFish(`Tang`, `Dory`, 9, `purple`);
aquarium.addFish(`Kong`, `King`, 10, `gold`);
aquarium.getStatus();
aquarium.feed();
aquarium.getStatus();
aquarium.removeFish();
aquarium.getStatus();