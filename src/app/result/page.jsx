"use client"
import MyPDF from "../components/MyPdf";
import { PDFViewer, BlobProvider } from '@react-pdf/renderer'

export default function Result() {
    return (
        <main className="flex justify-center mt-16 w-full h-auto">
            <div className="w-3/4 md:w-1/4 justify-center">
                <h1 className="text-center font-bold my-4 text-2xl">Awesome!</h1>

                <h3 className="font-medium mb-4 text-xl">Foody make these recipes for you!</h3>

                <div className="flex justify-center">
                    <div>
                        <BlobProvider document={<MyPDF />}>
                            {({ blob, url, loading, error }) => {
                                if (loading) {
                                    return 'Loading...';
                                }
                                if (error) {
                                    return 'There was an error generating the PDF.';
                                }

                                return (
                                    <div className="flex justify-center my-8">
                                        <a href={url} download="archivo.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-full">
                                            Download PDF
                                        </a>
                                    </div>
                                );
                            }}
                        </BlobProvider>
                        <PDFViewer style={{ width: '100%', height: '500px' }}>
                            <MyPDF />
                        </PDFViewer>
                    </div>
                </div>

            </div>
        </main>
    )
}