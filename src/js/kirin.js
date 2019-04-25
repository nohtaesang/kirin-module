import KirinButton from './button';
import KirinSlider from './slider';
import { noConflict } from './utils';

let Kirin;

window.Kirin = Kirin = Kirin || {};

Kirin.Button = KirinButton;
Kirin.Slider = KirinSlider;

Kirin.noConflict = noConflict;
