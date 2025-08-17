import { useState } from 'react';

import { languages } from '../build/languages';

import config from '../../config/userConfig.json';
import type { Language } from '../types/language';

export default function LanguageBtn() {

    const [languageMenu, setLanguageMenu] = useState<boolean>(false);

    const changeLanguage = (language: Language) => {
        return ;
    }

    return (
        <>
            <div className='relative font-satochi text-neutral-400/80 cursor-pointer hover:text-neutral-300'
                onClick={() => setLanguageMenu(true)}
                onMouseLeave={() => setLanguageMenu(false)}
            >
                {languages.map((language) => language.typo === config.language && language.typo)}
                {languageMenu && (
                    <div className='absolute flex flex-col items-start justify-start z-20 left-1/2 -translate-x-1/2'>
                        {languages.map((language) => (
                            <div 
                                className='bg-neutral-200 text-neutral-700 w-full px-2'
                                onClick={() => changeLanguage(language)}
                            >
                                {language.language}
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    )
}