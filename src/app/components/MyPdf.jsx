"use client"
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export default function MyPDF() {
    return (
        <Document>
            <Page size="A4" style={styles.page} pageMode='fullScreen'>
                <View style={styles.section}>
                    <Text>Contenido del PDF</Text>
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
    },
    page: {
        flexDirection: 'column',
        margin: 5,
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 5,
        padding: 5,
        flexGrow: 1,
        width: '100%'
    },
});
