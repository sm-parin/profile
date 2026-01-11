import { defy } from "./defy";
import { deloitte } from "./deloitte";
import { fbDevC } from "./fb-devc";
import { goDutch } from "./go-dutch";
import { itlh } from "./itlh";
import { makermela } from "./makermela";
import { mentza } from "./mentza";
import { riidlAcademy } from "./riidl-academy";
import { utec } from "./utec";

export const work = {
  deloitte: { ...deloitte, priority: 1 },
  itlh: { ...itlh, priority: 3 },
  utec: { ...utec, priority: 2 },
  "fb-devc": { ...fbDevC, priority: 8 },
  defy: { ...defy, priority: 4 },
  mentza: { ...mentza, priority: 5 },
  makermela: { ...makermela, priority: 7 },
  "riidl-academy": { ...riidlAcademy, priority: 9 },
  "go-dutch": { ...goDutch, priority: 6 },
};
