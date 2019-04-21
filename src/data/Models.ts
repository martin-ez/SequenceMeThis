import GraphicEngine from './Engines/GraphicEngine';

export interface SoundModule {
  sound: string;
  ChangeSound(newSound: string): void;
  Play(note: Step): void;
}

// Sequencer interface
export interface Step {
  note: number;
  velocity: number;
}

// Sequencer descriptor interface
export interface SequencerDescriptor {
  name: string;
  description: string;
  attributes: string[];
}

export interface SequencerGallery {
  gallery: {[key: string]: typeof Sequencer};
  GetList(): SequencerDescriptor[];
  GetSequencer(type: string): Sequencer;
}

// Sequencer class
export class Sequencer {
  public name: string = '';
  public description: string = '';
  public attributes: string[] = [];
  private sequence: Step[] = [];
  public GetDescriptor(): SequencerDescriptor {
    return {
      name: this.name,
      description: this.description,
      attributes: this.attributes,
    };
  }
  // sound: SoundModule;
  // graphics: GraphicModule;
}

// Session interface
export interface Session {
  playing: boolean;
  tempo: number;
  currentTab: number;
  sequencers: Array<Sequencer | null>;
  gallery: SequencerGallery;
  graphics: GraphicEngine;
}
