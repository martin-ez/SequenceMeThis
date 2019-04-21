import { Sequencer } from '../Models';

export default class Tombola extends Sequencer {
  public name = 'Tombola';
  public description = 'Physics based sequencer';
  public attributes = [
    'Physics',
    'Random',
  ];
}
