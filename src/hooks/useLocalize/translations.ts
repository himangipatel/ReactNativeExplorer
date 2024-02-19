import {TRANSLATION_KEYS} from '../../utils/translations';
import {TranslationType} from './types';

export const translations: TranslationType = {
  en: {
    [TRANSLATION_KEYS.APP_TITLE]: 'MOST POPULAR MOVIES OF ALL TIME',
    [TRANSLATION_KEYS.LOGIN_TITLE]: 'tell us about your email and password',
    [TRANSLATION_KEYS.SIGN_IN]: 'Login and Continue',
    [TRANSLATION_KEYS.ENTER_EMAIL]: 'Enter Email ID',
    [TRANSLATION_KEYS.ENTER_PASSWORD]: 'Enter Password',
    [TRANSLATION_KEYS.MOST_POPULAR]: 'Most Popular Movies',
    [TRANSLATION_KEYS.ENGLISH]: 'ENGLISH',
    [TRANSLATION_KEYS.ARABIC]: 'ARABIC',
    [TRANSLATION_KEYS.ENTER_VALID_EMAIL]:'Please enter a valid email address.',
    [TRANSLATION_KEYS.ENTER_VALID_PASSWORD]:'Please enter a valid password containing Minimum length 8,Atleast one uppercase letter,At least one lowercase letter,Atleast one digit,'

  },
  ar: {
    [TRANSLATION_KEYS.APP_TITLE]: 'الأفلام الأكثر شعبية في كل العصور',
    [TRANSLATION_KEYS.LOGIN_TITLE]: 'أخبرنا عن بريدك الإلكتروني وكلمة المرور',
    [TRANSLATION_KEYS.SIGN_IN]: 'تسجيل الدخول والمتابعة',
    [TRANSLATION_KEYS.ENTER_EMAIL]: 'أدخل معرف البريد الإلكتروني',
    [TRANSLATION_KEYS.ENTER_PASSWORD]: 'أدخل كلمة المرور',
    [TRANSLATION_KEYS.MOST_POPULAR]: 'الأفلام الأكثر شعبية',
    [TRANSLATION_KEYS.ENGLISH]: 'إنجليزي',
    [TRANSLATION_KEYS.ARABIC]: 'عربي',
    [TRANSLATION_KEYS.ENTER_VALID_EMAIL]:'يرجى إدخال عنوان بريد إلكتروني صالح.',
    [TRANSLATION_KEYS.ENTER_VALID_PASSWORD]:`الرجاء إدخال كلمة مرور صالحة تحتوي على {'\n'}الحد الأدنى للطول 8{'\n'}At
    حرف كبير واحد على الأقل{'\n'}حرف صغير واحد على الأقل.{'\n'}At
    رقم واحد على الأقل {'\n'}`


  },
};
