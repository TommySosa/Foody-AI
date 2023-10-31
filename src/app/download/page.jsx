"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";


export default function Download() {
  const name = "Fernando";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=3&offset=0"
        );
        const result = await response.json();
        console.log(result); // Verifica los datos en la consola
        const pokemonData = result.results;
        setData(pokemonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex justify-center mt-16">
      <div className="w-95 md:w-1/2 justify-center mt-5">
        <p className="font-bold text-xl mb-2">Hola {name}</p>
        <h2 className="text-center font-bold my-4 text-2xl">
          Check your history!
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-5 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-5 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-5">
                    <a
                      href={item.url}
                      target="_blank"
                      className="flex items-center space-x-2 hover:text-primary"
                    >
                      <span>Download</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-file-earmark-arrow-down inline-block"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
                        <Button text="back" className=""/>
                    </div>
        </div>
      </div>
    </main>
  );
}
