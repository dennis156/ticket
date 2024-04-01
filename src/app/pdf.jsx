import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
  value: {
    fontSize: 12,
  },
});

const PDFDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Formulario de Datos</Text>
        <View style={styles.row}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{formData.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{formData.nombre}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Código Postal (CP):</Text>
          <Text style={styles.value}>{formData.cp}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Manzana:</Text>
          <Text style={styles.value}>{formData.manzana}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Lote:</Text>
          <Text style={styles.value}>{formData.lote}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Colonias:</Text>
          <Text style={styles.value}>{formData.colonias}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Edad:</Text>
          <Text style={styles.value}>{formData.edad}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;