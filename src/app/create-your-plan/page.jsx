import Link from "next/link";
import Button from "../components/Button";
import Input from "../components/Input";

export default function CreateYourPlan(){
    return(
        <main className="flex justify-center mt-16 w-full h-auto">
            <div className="w-3/4 md:w-1/4 justify-center">
                <h1 className="text-center font-bold my-4 text-2xl">Create your plan</h1>

                <h3 className="font-medium mb-4 text-xl">Input your macros</h3>
                <section>
                    <div className="my-8">
                        <label className="inline-block">Proteins</label>
                        <div className="flex">
                            <Input placeholder=""/>
                            <p className="block text-center">gr</p>
                        </div>
                    </div>
                    <div className="my-8">
                        <label>Fats</label>
                        <div className="flex">
                            <Input placeholder=""/>
                            <p className="block text-center">gr</p>
                        </div>
                    </div>
                    <div className="my-8">
                        <label>Carbs</label>
                        <div className="flex">
                            <Input placeholder=""/>
                            <p className="block text-center">gr</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <Link href={'/result'}>
                            <Button text="Continue"/>                       
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}