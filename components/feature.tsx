import Description from "./description";
import Description2 from "./description2";

export default function Feature(){
    return(
        <main className="bg-[#030E13] min-h-screen flex flex-col overflow-hidden rounded-t-[56px] absolute top-[1000px] left-0 right-0 z-20">
            <Description />
            <Description2 />
        </main>
    )
}