import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function BlockchainInfo() {
  return (
    <main className="bg-bgDark px-4 md:px-6 xl:px-28 2xl:px-64 py-4 flex flex-col md:flex-row gap-4 justify-between">
      <Card
        title="Constantly adding new blockchains"
        description={
          <>
            Publish on the blockchain of your choice, we support{" "}
            <span className=" text-Blue">more than 9+ blockchains.</span> We are constantly adding support for new blockchains.
          </>
        }
        buttonLabel="View Blockchains"
         buttonVariant="destructive"
        buttonSize="lg"
      />
      <Card
        title="You have complete ownership"
        description="Deployment of the smart contract must be done by you. Only you have the authority to make changes or manage the funds generated from the collection."
        buttonLabel="Create Collection"
        buttonVariant="destructive"
        buttonSize="lg"
      />
    </main>
  );
}

interface CardProps {
  title: string;
  description: string | JSX.Element ;
  buttonLabel: string;
  buttonVariant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  buttonSize: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
}


function Card({ title, description, buttonLabel, buttonVariant, buttonSize }: CardProps) {
  return (
    <div className="md:w-1/2 px-4">
      <h1 className=" text-[28px] md:text-[50px] font-semibold">{title}</h1>
      <p className="text-gray text-lg py-4 font-extralight">{description}</p>
      <Link href={'/'} className={buttonVariants({ variant: buttonVariant, size: buttonSize })}>
        {buttonLabel}
      </Link>
    </div>
  );
}
