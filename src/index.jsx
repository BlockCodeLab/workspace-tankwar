import featureImage from './feature.png';
import { version } from '../package.json';

export default {
  version,
  sortIndex: 1001,
  image: featureImage,
  name: 'Tank War',
  description: 'Program your tank and go to battle!',
  collaborator: 'Yeqin Gong',
  blocksRequired: true,

  // l10n
  translations: {
    en: {
      name: 'Tank War',
      description: 'Program your tank and go to battle!',
      collaborator: 'Yeqin Gong',
    },
    'zh-Hans': {
      name: '坦克大战',
      description: '带上你的坦克，加入我们的战斗！',
      collaborator: '龚业勤',
    },
  },
};
