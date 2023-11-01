import Image from "next/image"
import {motion} from "framer-motion"

export default function HowItWorks() {
    // Define an array of steps
    const steps = [
        {
            title: "Start your collection.",
            description: "Enter your collection name, and description, and choose the blockchain for your collection."
        },
        {
            title: "Set your mint phases.",
            description: "Choose a mint time and date. There is also an option to set a whitelist phase. Simply upload a list of wallets."
        },
        {
            title: "Upload your artwork.",
            description: "Upload your collection artwork. You can use our NFT generator to generate the collection metadata."
        },
        {
            title: "Get ready to mint.",
            description: "Generate a mint website or embed your mint on your website, and let your community mint your collection."
        }
    ];

    return (
        <main className="bg-bgDark px-4 md:px-6 xl:px-28 2xl:px-64 py-4 ">
            <motion.div
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5}}
                  variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 75 }
                  }}
                  viewport={{ once: true }}
                className="text-white"
             >
                <h1 className="uppercase text-xl text-Blue">How it works</h1>
                <h1 className="text-[50px] font-semibold">Launching a collection <br /> on Mintpad</h1>
                <p className="hidden md:block text-gray text-lg py-8 font-extralight">From the ability to design your own mint website, to the ease of embedding a mint <br /> button on any existing website, Mintpad provides a convenient and user-friendly <br /> experience for anyone looking to launch their own NFT collection.</p>
                <p className="md:hidden text-gray text-lg py-6 font-extralight">From the ability to design your own mint website, to the ease of embedding a mint button on any existing website, Mintpad provides a convenient and user-friendly experience for anyone looking to launch their own NFT collection.</p>
            </motion.div>
            <div>
                <div className="flex justify-between gap-3 items-center py-36">
                    <motion.div 
                        className="lg:w-1/2"
                          initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5}}
                  variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 75 }
                  }}
                  viewport={{ once: true }}
                    >
                        {steps.map((step, index) => (
                            <Step key={index} title={step.title} description={step.description} />
                        ))}
                    </motion.div>
                    <motion.div 
                        className="overflow-hidden hidden lg:block rounded-3xl"
                          initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5}}
                  variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 75 }
                  }}
                  viewport={{ once: true }}
                    >
                        <Image src="/images/mintNfts.webp" width="400" height="400" alt="pic" className="rounded-3xl h-[662px] w-[547px]" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

function Step({ title, description }: {title: string, description: string}) {
    return (
        <div className="py-2">
            <h1 className="text-white font-semibold text-[26px]">{title}</h1>
            <p className="text-gray text-lg py-4 font-extralight">{description}</p>
        </div>
    );
}
