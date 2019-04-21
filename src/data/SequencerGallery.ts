import { SequencerGallery } from './Models';

// Sequencers
import Tombola from './Sequencers/Tombola';

const SeqGallery: SequencerGallery = {
  gallery: {
    Tombola,
  },
  GetList() {
    return Object.values(this.gallery).map((seq) => new seq().GetDescriptor());
  },
  GetSequencer(type) {
    return new this.gallery[type]();
  },
};

export default SeqGallery;
