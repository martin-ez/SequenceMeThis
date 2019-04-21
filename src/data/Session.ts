import Vue from 'vue';
import { Session } from './Models';
import SeqGallery from './SequencerGallery';
import GraphicEngine from './Engines/GraphicEngine';

const globalState: Session = {
  playing: true,
  tempo: 120,
  currentTab: 0,
  sequencers: [
    null,
    null,
    null,
    null,
  ],
  gallery: SeqGallery,
  graphics: new GraphicEngine(),
};

const getters = {
  currentTab: (state: Session) => state.currentTab,
  currentSequencer: (state: Session) => state.sequencers[state.currentTab],
  sequencers: (state: Session) => state.sequencers,
  sequencerGallery: (state: Session) => state.gallery.GetList(),
};

const actions = {
  changeCurrentTab({ commit }: any, i: number): void {
    commit('setCurrentTab', i);
  },
  changeCurrentSequencer({ commit }: any, newSequencer: string): void {
    commit('setCurrentSequencer', newSequencer);
  },
};

const mutations = {
  setCurrentTab(state: Session, i: number): void {
    state.currentTab = i;
  },
  setCurrentSequencer(state: Session, sequencer: string): void {
    Vue.set(state.sequencers, state.currentTab, state.gallery.GetSequencer(sequencer));
  },
};

export default {
  state: globalState,
  getters,
  actions,
  mutations,
};
