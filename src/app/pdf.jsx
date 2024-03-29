
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
page: {
flexDirection: "column",
padding: 10,
},
section: {
margin: 10,
padding: 10,
flexGrow: 1,
},
});

export const PDFDocument = ({ formData }) => (
<Document>
<Page size="A4" style={styles.page}>
<View style={styles.section}>
<Text>ID: {formData.id}</Text>
<Text>Nombre: {formData.nombre}</Text>
<Text>Código Postal (CP): {formData.cp}</Text>
<Text>Manzana: {formData.manzana}</Text>
<Text>Lote: {formData.lote}</Text>
<Text>Colonias: {formData.colonias}</Text>
<Text>Edad: {formData.edad}</Text>
</View>
</Page>
</Document>
);