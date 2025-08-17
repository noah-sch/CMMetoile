import TEncoche from "./tEncoche/TEncoche";

export default function Appx() {
    return (
        <>
            <div className="grid grid-rows-12 w-full h-full bg-neutral-900">
                <div className="row-span-2 row-start-1">
                    <TEncoche />
                </div>

            </div>
        </>
    )
}