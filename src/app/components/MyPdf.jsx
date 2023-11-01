"use client"
import React from "react";
import { Document, Page, Text, View, Image} from "@react-pdf/renderer";

export default function MyPdf({ recipe }) {
    return (
            <Document>
                <Page
                    size="A4"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "white",
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            padding: 10,
                        }}
                    >
                        <Text style={{ color: "#3388af", fontSize: "42px" }}>
                            Recipe with 
                        </Text>
                        <Text>{recipe ? recipe.proteins + "gr" + " " + recipe.fats + "gr" + " " + recipe.carbs + "gr" : null}</Text>                        

                        <Text style={{ textAlign: "justify", marginTop: "22px" }}>
                            {recipe ? recipe.result : null}
                        </Text>
                    </View>
                </Page>
            </Document>
    );
};
