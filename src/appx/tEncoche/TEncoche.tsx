import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import LanguageBtn from './components/LanguageBtn';
import ModeBtn from './components/ModeBtn';

import { externalSections } from './build/externalSections';

export default function TEncoche(){
    return (
        <>
            <div className="grid grid-rows-10 h-full w-full border-b border-b-neutral-800 bg-neutral-950 px-12 selection:bg-neutral-300 selection:text-neutral-900">
                
                {/* Main encoche */}
                <div className="row-span-6 border-b border-dashed border-b-neutral-800 h-full w-full">
                    {/* Splitter top */}
                    <div className="grid grid-cols-12 h-full w-full">
                        {/* Icon */}
                        <div className="col-span-3 col-start-1 h-full w-full">
                            <div className="flex flex-row items-center justify-start text-neutral-300 h-full w-full font-satoshi">
                                #TOFILL
                            </div>
                        </div>
                        {/* Search center */}
                        <div className="col-span-4 col-start-5 h-full w-full">
                            <div className="flex flex-row items-center justify-between py-4 gap-2 text-sm font-satoshi h-full w-full">
                                {/* Search - Ctrl/Cmd K */}
                                <div className="flex flex-row items-center justify-start h-full w-full border border-neutral-800 rounded-md px-4 gap-2 text-neutral-400/80 text-nowrap hover:border-neutral-700 hover:bg-neutral-800/50">
                                    <div>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </div>
                                    <div className='flex flex-row items-center justify-between w-full h-full'>
                                        <div>
                                            Search...
                                        </div>
                                        <div className='text-xs font-semibold'>
                                            Ctrl K
                                        </div>
                                    </div>
                                </div>
                                {/* askLoana - Ctrl/Cmd I */}
                                <div className='flex flex-row items-center justify-start h-full border border-neutral-800 rounded-md px-4 gap-2 text-neutral-400/80 text-nowrap hover:border-neutral-700 hover:bg-neutral-800/50'>
                                    &#123; askLoana &#125;
                                </div>
                            </div>
                        </div>
                        {/* Dashboard */}
                        <div className='col-span-4 col-start-9 h-full w-full'>
                            <div className='flex flex-row items-center justify-end h-full w-full gap-4'>
                                {/* Language */}
                                <LanguageBtn />
                                {/* Mode */}
                                <ModeBtn />
                                {/* Login / Register */}
                                <div className='font-satochi text-neutral-400/80 cursor-pointer hover:text-neutral-300'>
                                    Login / Register
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Encoche sections */}
                <div className='row-span-4 row-start-7 h-full w-full'>
                    <div className='flex flex-row items-center justify-start h-full w-full gap-4 text-neutral-400/80'>
                        {/* Section interne actuelle */}
                        <div className='flex flex-row items-center justify-start h-full gap-4'>
                            <div className='flex flex-row items-center justify-start border-b border-b-neutral-300 h-full text-neutral-300'>
                                &#123;&nbsp;Dashboard&nbsp;&#125;
                            </div>
                            <div className='py-2 h-full'>
                                <div className='border-l border-l-neutral-900 h-full'/>
                            </div>
                        </div>
                        {/* Sections externes */}
                        {externalSections.map((extSection, index) => (
                            <div key={index}
                                className='cursor-pointer hover:text-neutral-300'
                            >   
                                {extSection.name}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}