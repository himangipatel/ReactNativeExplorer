import {I18nManager} from 'react-native';
import {I18n} from 'i18n-js';
import {Language} from '../../src/redux/slices/languageSlice';
import useLocalize from '../../src/hooks/useLocalize';
import {TRANSLATION_KEYS} from '../../src/utils/translations';

jest.mock('react-native', () => ({
  I18nManager: {
    forceRTL: jest.fn(),
  },
}));

describe('useLocalize', () => {
  test('setI18nConfig updates language configuration correctly', () => {
    const {setI18nConfig} = useLocalize();

    setI18nConfig(Language.ARABIC);

    expect(I18nManager.forceRTL).toHaveBeenCalledWith(true);
  });

  // test('translate returns correct translation', () => {
  //   const { translate } = useLocalize();

  //   // Assuming you have translations for 'hello' key in your translations object
  //   expect(translate(TRANSLATION_KEYS.APP_TITLE)).toBe('Bonjour'); // Replace 'Bonjour' with expected translation
  // });

  // test('translate returns correct translation with config', () => {
  //   const { translate } = useLocalize();

  //   // Assuming you have translations for 'hello' key with a placeholder in your translations object
  //   expect(translate('hello', { name: 'John' })).toBe('Bonjour, John'); // Replace 'Bonjour, John' with expected translation
  // });
});
