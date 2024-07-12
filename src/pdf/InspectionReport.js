import React from "react";
import {
  Document,
  Page,
  Image,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const TableRow = ({ label, data }) => (
  <View style={styles.table}>
    <Text style={styles.tableLabel}>{label}</Text>
    <Text style={styles.tableData}>{data}</Text>
  </View>
);

const MyPdfComponent = () => {
  const currentFormData = useSelector(
    (state) => state.inspection.currentFormData
  );
  const previousFormData = useSelector(
    (state) => state.inspection.previousFormData
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={styles.headingText}>INSPECTION FORM</Text>
          <View style={styles.headingContainer}>
          

<Text style={styles.headingText}>Current Form Data</Text>
          </View>
        </View>
        <View >
          <TableRow label="Client:" data={currentFormData?.client} />
          <TableRow
            label="Item Descriptions:"
            data={currentFormData?.itemDescriptions}
          />
          <TableRow label="SKU:" data={currentFormData?.sku} />
          <TableRow label="PO No.:" data={currentFormData?.poNo} />
          <TableRow label="Qty.:" data={currentFormData?.qty} />
          <TableRow label="Factory:" data={currentFormData?.factory} />
          <TableRow label="Inspected By:" data={currentFormData?.inspectedBy} />
          <TableRow
            label="Date of Inspection:"
            data={currentFormData?.dateOfInspection}
          />
          <TableRow
            label="Inspection Result:"
            data={currentFormData?.inspectionResult}
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Previous Form Data</Text> </View>
        <View >
          
          <TableRow label="Client:" data={previousFormData?.client} />
          <TableRow
            label="Item Descriptions:"
            data={previousFormData?.itemDescriptions}
          />
          <TableRow label="SKU:" data={previousFormData?.sku} />
          <TableRow label="PO No.:" data={previousFormData?.poNo} />
          <TableRow label="Qty.:" data={previousFormData?.qty} />
          <TableRow label="Factory:" data={previousFormData?.factory} />
          <TableRow
            label="Inspected By:"
            data={previousFormData?.inspectedBy}
          />
          <TableRow
            label="Date of Inspection:"
            data={previousFormData?.dateOfInspection}
          />
          <TableRow
            label="Inspection Result:"
            data={previousFormData?.inspectionResult}
          />
        </View>
        <View style={styles.imageContainer}>
         
          {currentFormData?.InspectionImages1 &&
            currentFormData.InspectionImages1.map((src, index) => {
              console.log(src, "id24");
              return <Image key={index} style={styles.image} src={src} />;
            })}
        </View>
        
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            CONSTRUCTION, AESTHETIC, FINISHING & PRODUCT LABELLING
          </Text>
        </View>
        <Text style={styles.headingText}>Current Data</Text>
        <View style={styles.tableData}>
          <TableRow
            label="1. Construction of the item was made according to 'Approved Sample'?:"
            data={currentFormData?.constructionApprovedSample}
          />

          <TableRow
            label="2. The materials of the item are all according to the client's approved specifications.:"
            data={currentFormData?.materialsApproved}
          />

          <TableRow
            label="3. Colors/finish of the bulk production is as per the approved finish Swatch.:"
            data={currentFormData?.colorsApproved}
          />

          <TableRow
            label="4. Aesthetic, distressing, and antiquing finished are as per the approved sample & finish swatch?"
            data={currentFormData?.aestheticApproved}
          />

          <TableRow
            label="5. Color/finish of the production units are even and consistent:"
            data={currentFormData?.colorConsistency}
          />

          <TableRow
            label="6. Gloss/Sheen finished off the production units are per the approved finish swatch?"
            data={currentFormData?.glossConsistency}
          />

          <TableRow
            label="7. Have you gathered all the SKUs/styles of the collection and compared overall color and gloss finish; to ensure color and gloss are even and consistent?"
            data={currentFormData?.skuComparison}
          />

          <TableRow
            label="8. The format and statement content of the Warning, Cautionary, and Regulatory labels are as per the client's approval?"
            data={currentFormData?.labelApproval}
          />

          <TableRow
            label="9. Have you performed the moisture check on the wooden parts of the item?"
            data={currentFormData?.moistureCheck}
          />
        </View>
       
        <Text style={styles.headingText}>Previous Data</Text>
        
        <View style={styles.tableData}>
          <TableRow
            label="1. Construction of the item was made according to 'Approved Sample'?:"
            data={previousFormData?.constructionApprovedSample}
          />

          <TableRow
            label="2. The materials of the item are all according to the client's approved specifications.:"
            data={previousFormData?.materialsApproved}
          />

          <TableRow
            label="3. Colors/finish of the bulk production is as per the approved finish Swatch.:"
            data={previousFormData?.colorsApproved}
          />

          <TableRow
            label="4. Aesthetic, distressing, and antiquing finished are as per the approved sample & finish swatch?"
            data={previousFormData?.aestheticApproved}
          />

          <TableRow
            label="5. Color/finish of the production units are even and consistent:"
            data={previousFormData?.colorConsistency}
          />

          <TableRow
            label="6. Gloss/Sheen finished off the production units are per the approved finish swatch?"
            data={previousFormData?.glossConsistency}
          />

          <TableRow
            label="7. Have you gathered all the SKUs/styles of the collection and compared overall color and gloss finish; to ensure color and gloss are even and consistent?"
            data={previousFormData?.skuComparison}
          />

          <TableRow
            label="8. The format and statement content of the Warning, Cautionary, and Regulatory labels are as per the client's approval?"
            data={previousFormData?.labelApproval}
          />

          <TableRow
            label="9. Have you performed the moisture check on the wooden parts of the item?"
            data={previousFormData?.moistureCheck}
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            Picture of Good offered for Inspection
          </Text>
        </View>
        <View style={styles.imageContainer}>
          
          <Image style={styles.image} src={currentFormData?.ImageComments1} />
        </View>
        <TableRow label="Upload Images:" data="" /> 
        <TableRow label="Comment related to images:" data="" />
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            Pictures of products Diameter and Height
          </Text>
        </View>
        <View style={styles.imageContainer}>
          
          <Image style={styles.image} src={currentFormData?.ImageComments1} />
        </View>
        <TableRow label="Upload Images for Diameter:" data="" />
        
        <TableRow label="Comment related to images:" data="" />
        <View style={styles.imageContainer}>
          
          
          <Image style={styles.image} src={currentFormData?.ImageComments1} />
        </View>
        <TableRow label="Upload Images for Height:" data="" />
        
        <TableRow label="Comment related to images:" data="" />
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            Assembly Instruction and Product Assembly of Knock-Down Item
          </Text>
        </View>
        <View style={styles.tableData}>
          <TableRow
            label="1. Assembly of the production units matches the step-by-step AI of the item?"
            data={currentFormData?.ProductionItems}
          />

          <TableRow
            label="2. Item can be fully assembled by several persons indicated as per AI?"
            data={currentFormData?.Itemassembled}
          />

          <TableRow
            label="3. Assembly steps are not confusing and easy to understand."
            data={currentFormData?.Itemassembled2}
          />

          <TableRow
            label="4. Verbiage and format of the AI; as per the client's approved version?"
            data={currentFormData?.Itemassembled3}
          />

          <TableRow
            label="5. Tools, fittings, and accessories of the hardware pack matched with AI"
            data={currentFormData?.Itemassembled4}
          />

          <TableRow
            label="6. All parts, fittings, hardware, and accessories fit together well."
            data={currentFormData?.Itemassembled5}
          />

          <TableRow
            label="7.Parts are lettered/numbered and matched with assembly instructions?"
            data={currentFormData?.Itemassembled6}
          />

          <TableRow
            label="8. All hardware is packaged together and easy to locate in the carton."
            data={currentFormData?.Itemassembled7}
          />

          <TableRow
            label="9. Material Quality of the Hardware, fittings, and accessories of the item are acceptable?"
            data={currentFormData?.Itemassembled8}
          />

          <TableRow
            label="10. Does the item require an anti-tip kit?"
            data={currentFormData?.Itemassembled9}
          />

          <TableRow
            label="11. Does a pre-drilled hole required for the item; to secure the tip-kit?"
            data={currentFormData?.Itemassembled10}
          />
        </View>
        



          
        
      </Page>
    </Document>
  );
};
export default MyPdfComponent;


const styles = StyleSheet.create({
  page: {
    padding: 20,
    borderWidth: 2,
    borderColor: "blue", 
    borderRadius: 10, 
    fontFamily: "sans-serif",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center", 
    marginBottom: 3, 
    padding: 10,
    backgroundColor:"#ADD8E6" , 
    borderRadius: 5, 
  },
  headingText: {
    fontSize: 22, 
    color: "#4a90e2",
    fontWeight: "bold",
    textAlign: "center", 
    width: "100%", 
    fontFamily: "Cursive",
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black", 
    marginBottom: 7, 
    borderRadius: 5,
    fontFamily: "sans-serif",
    padding: 4,
    letterSpacing:0.5,
    margin: 2
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#fff", 
    justifyContent: "center", 
    alignItems: "center", 
  },
  
  tableData: {
    flex: 1,
    padding: 4, 
    fontSize: 15, 
    
    borderRightWidth: 1,
    
    fontFamily: "Cursive",
  },
  tableLabel: {
    fontWeight: "bold", 
    backgroundColor: "#e9ecef", 
    borderRightWidth: 1,
    borderRightColor: "black", 
    textAlign: "center", 
    paddingRight: 2,
    fontSize:13,
   fontFamily: "sans-serif",
  },
  imageContainer: {
    width: "40%", 
    marginLeft: 10, 
    marginBottom: 4, 
  },
  image: {
    width: "100%", 
    height: "auto", 
    borderWidth: 1,
    borderColor: "#ddd", 
    borderRadius: 5, 
  },
  comment: {
    marginTop: 4,
    fontSize: 2002,
    padding: 10,
    backgroundColor: "#fff", 
    borderWidth: 1,
    borderColor: "#ddd", 
    borderRadius: 5, 
    textAlign: "center", 
    fontFamily: "sans-serif",
  },
});




