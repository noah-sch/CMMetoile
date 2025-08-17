import type { mode } from "../types/mode";

import { useState } from "react";

import config from '../../config/userConfig.json';

export default function ModeBtn() {

    const [mode, setMode] = useState<mode>(config.mode as mode);

    const modeRotater = (mode: mode) => {
        setMode(mode === 'dark' ? 'light' : 'dark') ;
    }

    return(
        <>
            <div className="font-satochi text-neutral-400/80 cursor-pointer hover:text-neutral-300"
                onClick={() => modeRotater(mode)}
            >
                [ {mode.toLowerCase()} ]
            </div>
        </>
    )
}