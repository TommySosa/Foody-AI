"use client"

import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";

//ID traido de la session del usuario logeado actualmente
const userId = 1;

export default function CreateYourPlan() {
    const [formData, setFormData] = useState({
        proteins: "",
        fats: "",
        carbs: "",
        result: "Test",
        userId: userId,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const handleClick = async () => {
        const { proteins, fats, carbs, result, userId } = formData
        const res = await fetch('http://localhost:3000/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                proteins,
                fats,
                carbs,
                result,
                userId
            })
        })

        const dataResult = await res.json()
        console.log(dataResult)
        console.log(formData);
    }
    return (
        <main className="flex justify-center mt-16 w-full h-auto">
            <div className="w-3/4 md:w-1/4 justify-center">
                <h1 className="text-center font-bold my-4 text-2xl">Create your plan</h1>

                <h3 className="font-medium mb-4 text-xl">Input your macros</h3>
                <section>
                    <div className="my-8">
                        <label className="inline-block">Proteins</label>
                        <div className="flex">
                            <Input placeholder="" name="proteins" value={formData.proteins} onChange={handleChange} />
                            <p className="block text-center">gr</p>
                        </div>
                    </div>
                    <div className="my-8">
                        <label>Fats</label>
                        <div className="flex">
                            <Input placeholder="" name="fats" value={formData.fats} onChange={handleChange} />
                            <p className="block text-center">gr</p>
                        </div>
                    </div>
                    <div className="my-8">
                        <label>Carbs</label>
                        <div className="flex">
                            <Input placeholder="" name="carbs" value={formData.carbs} onChange={handleChange} />
                            <p className="block text-center">gr</p>
                        </div>
                    </div>

                    <div className="mt-16">
                        <Button text="Generate" onClick={handleClick} />
                    </div>
                </section>
            </div>
        </main>
    )
}