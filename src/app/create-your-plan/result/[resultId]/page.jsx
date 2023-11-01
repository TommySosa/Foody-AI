"use client"
import MyPdf from '@/app/components/MyPdf';
import { PDFViewer } from '@react-pdf/renderer';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Result({ params }) {
    const [recipe, setRecipe] = useState();

    const fetchRecipes = () => {
        axios.get(`http://localhost:3000/api/recipes/${params.resultId}`)
            .then((res) => {
                setRecipe(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className="flex justify-center mt-16 w-full h-auto">
            <div className="w-3/4 md:w-1/4 justify-center">
                {recipe ? (
                    <>
                        <h1 className="text-center font-bold my-4 text-2xl">Awesome!</h1>
                        <h3 className="font-medium mb-4 text-xl">Foody make these recipes for you!</h3>

                        <div className="flex justify-center">
                            <PDFViewer style={{ width: "100%", height: "100vh" }}>
                                <MyPdf recipe={recipe} />
                            </PDFViewer>
                        </div>
                    </>) : <h3>Recipe Not found</h3>
                }
            </div>
        </main>
    )
}