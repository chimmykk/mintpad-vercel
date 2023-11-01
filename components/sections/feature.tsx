import BlockchainInfo from "./blockchainInfo";
import Capabilities from "./capabilities";
import Description from "./description";
import Description2 from "./description2";
import HowItWorks from "./howItWorks";

export default function Feature(){
    return(
        <main
         className="bg-bgDark flex flex-col overflow-hidden rounded-t-[56px] feature-main z-50"
         >
            <Description />
            <Description2 />
            <HowItWorks />
            <BlockchainInfo />
            <Capabilities />
        </main>
    )
}