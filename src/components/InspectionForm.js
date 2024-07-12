import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux'
import { setFormData } from '../Slice/inspectionSlice';

const InspectionForm = () => {
  const navigate = useNavigate();
  const { handleSubmit ,control,register, setValue } = useForm();

  const dispatch = useDispatch();
  const currentFormData = useSelector((state) => state.inspection.currentFormData);
  const previousFormData = useSelector((state) => state.inspection.previousFormData);

  const onSubmit = (data) => {
    dispatch(setFormData(data));
    navigate("/report");
    console.log('Form data:', data);
  };

  const handleImageChange = async (event) => {
    const files = event.target.files;
    const fileArray = await Promise.all(
      Array.from(files).map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    );
    setValue('InspectionImages1', fileArray);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Inspection Form</h1>
      
      <label>Client:</label>
      <Controller
        name="client"
        control={control}
        render={({ field }) => <input {...field} />}
      />

      <label>Item Descriptions:</label>
      <Controller
        name="itemDescriptions"
        control={control}
        render={({ field }) => <input {...field} />}
      />

      <label>SKU:</label>
      <Controller
        name="sku"
        control={control}
        render={({ field }) => <input {...field} />}
      />

      <label>PO No.:</label>
      <Controller
        name="poNo"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>Qty.:</label>
      <Controller
        name="qty"
        control={control}
        render={({ field }) => <input {...field} />}
      />

      <label>Factory:</label>
      <Controller
        name="factory"
        control={control}
        render={({ field }) => <input {...field} />}
      />

      <label>Inspected By:</label>
      <Controller
        name="inspectedBy"
        control={control}
        render={({ field }) => <input {...field} />}
      />

      <label>Date of Inspection:</label>
      <Controller
        name="dateOfInspection"
        control={control}
        render={({ field }) => <input type="date" {...field} />}
      />

      <label>Inspection Result:</label>
      <Controller
        name="inspectionResult"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="pass">Pass</option>
            <option value="failed">Failed</option>
          </select>
        )}
      />

      {/* image code */}
      <h2>Final Inspection</h2>
      
      <label htmlFor="InspectionImages1">Upload Images:</label>
      <input
        type="file"
        name="InspectionImages1"
        multiple
        onChange={handleImageChange}
        // ref={register}
      />

      <label>Comment related to images:</label>
      <textarea
        {...register('ImageComments1')}
        defaultValue={currentFormData?.ImageComments1 || ''}
      />

      <h2>CONSTRUCTION, AESTHETIC, FINISHING & PRODUCT LABELLING</h2>

      <label>1. Construction of the item was made according to 'Approved Sample'?</label>
      <Controller
        name="constructionApprovedSample"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>2. The materials of the item are all according to the client's approved specifications.</label>
      <Controller
        name="materialsApproved"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>3. Colors/finish of the bulk production is as per the approved finish Swatch.</label>
      <Controller
        name="colorsApproved"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>4. Aesthetic, distressing, and antiquing finished are as per the approved sample & finish swatch?</label>
      <Controller
        name="aestheticApproved"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>5. Color/finish of the production units are even and consistent.</label>
      <Controller
        name="colorConsistency"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>6. Gloss/Sheen finished off the production units are per the approved finish swatch?</label>
      <Controller
        name="glossConsistency"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>7. Have you gathered all the SKUs/styles of the collection and compared overall color and gloss finish; to ensure color and gloss are even and consistent?</label>
      <Controller
        name="skuComparison"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>8. The format and statement content of the Warning, Cautionary, and Regulatory labels are as per the client's approval?</label>
      <Controller
        name="labelApproval"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

      <label>9. Have you performed the moisture check on the wooden parts of the item?</label>
      <Controller
        name="moistureCheck"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />
    
    <h3>Picture of Good offered for Inspection</h3>
      <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages2")}
        />
        <label>Comment related to images:</label>
        <textarea{...register("ImageComments2")}/>


        <h3>Pictures of products for overall Construction</h3>

        <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages3")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments3")}/>

          <h3>Pictures of products Diameter and Height</h3>

          <h5>Diameter</h5>
          <label>Upload Images:</label>
          <input 
            type='file' multiple
            {...register("InspectionImages4")}
        />  

        <label>Comment related to images:</label>
        <textarea{...register("ImageComments4")}/>

        <h5>Height</h5>
        <label>Upload Images:</label>
          <input 
            type='file' multiple
            {...register("InspectionImages5")}
        />  

        <label>Comment related to images:</label>
        <textarea{...register("ImageComments5")}/>
        

        <h2>Assembly Instruction and Product Assembly of Knock-Down Item </h2>

        <label>1. Assembly of the production units matches the "step-by-step" AI of the item?</label>
      <Controller
        name="ProductionItems"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />
      
      <label>2. Item can be fully assembled by several persons indicated as per AI? </label>
      <Controller
        name="Itemassembled"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>3. Assembly steps are not confusing and easy to understand.</label>
      <Controller
        name="Itemassembled2"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>4. Verbiage and format of the AI; as per the client's approved version?</label>
      <Controller
        name="Itemassembled3"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>5. Tools, fittings, and accessories of the hardware pack matched with AI?</label>
      <Controller
        name="Itemassembled4"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>6. All parts, fittings, hardware, and accessories fit together well.</label>
      <Controller
        name="Itemassembled5"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>7. Parts are lettered/numbered and matched with assembly instructions?</label>
      <Controller
        name="Itemassembled6"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>8. All hardware is packaged together and easy to locate in the carton. </label>
      <Controller
        name="Itemassembled7"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>9. Material Quality of the Hardware, fittings, and accessories of the item are acceptable? (Not 
  easily bend, deform, and broken during and after assembly)</label>
      <Controller
        name="Itemassembled8"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>10. Does the item require an anti-tip kit? </label>
      <Controller
        name="Itemassembled9"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>11. Does a pre-drilled hole required for the item; to secure the tip-kit?</label>
      <Controller
        name="Itemassembled10"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
          </select>
        )}
      />

<label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages6")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments6")}/>

      <h2>Master & Inner Carton (Details & Labeling)</h2>

      <label>1. SKU #</label>
      <Controller
        name="SKUhash"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="skucomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>2. PO #</label>
      <Controller
        name="pohash"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="pocomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>3. Item Description</label>
      <Controller
        name="itemdescription"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="itemdescriptioncomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>4. Gross Weight</label>
      <Controller
        name="GrossWeight"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="GrossWeightcomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>5. Net Weight</label>
      <Controller
        name="netweight"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="netweightcomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>6. Carton Measurement</label>
      <Controller
        name="carton"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="cartoncomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>7. Total Carton</label>
      <Controller
        name="TotalCarton"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="TotalCartoncomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>8. Regulatory Label</label>
      <Controller
        name="Label"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="Labelcomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>9. Shipping Mark</label>
      <Controller
        name="ShippingMark"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="ShippingMarkcomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />

      
<label>10. Country of Origin</label>
      <Controller
        name="Country"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />
      <Controller
        name="countrycomments"
        control={control}
        render={({ field }) => <input type='text' {...field} />}
      />
      
      <h5>Have you checked and verified the packaging details?</h5>
      
      <label>1. Does a transit test require for the item?</label>
      <Controller
        name="packagingdetails"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />

<label>1.1. If yes, please mention Test report no.</label>
      <Controller
        name="packagingdetails1"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />

<label>2. Packing methods as per the test report?</label>
      <Controller
        name="packagingdetails2"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />

<label>3. Polybag as per the client's standard?</label>
      <Controller
        name="packagingdetails3"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />

<label>4. Warning or cautionary Statement if required?</label>
      <Controller
        name="packagingdetails4"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />

<label>5. Silica /Gel pack as per the client’s standard?</label>
      <Controller
        name="packagingdetails5"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />

<label>6. Labeling, ticketing, and hang tag of the item are as per client approval?</label>
      <Controller
        name="packagingdetails6"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="n/a">N/A</option>
            </select>
            
        )}
      />

      <h3>Carton marking pictures</h3>
      <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages7")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments7")}/>

          <h3>Interal Packaging Picture</h3>

          <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages8")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments8")}/>

        <h3>Carton Length Picture</h3>

        <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages9")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments9")}/>

          <h3>Carton Width Picture</h3>
          <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages10")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments10")}/>

        <h3>Carton Height Picture</h3>
        <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages11")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments11")}/>

        <h3>Gross Weight Picture</h3>
        <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages12")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments12")}/>

        <h3>Net Weight picture</h3>
        <label>Upload Images:</label>
        <input 
          type='file' multiple
          {...register("InspectionImages13")}
        />
          <label>Comment related to images:</label>
          <textarea{...register("ImageComments13")}/>

          <div id='Current'>
        <h2>Current Form Data</h2>
        <pre>{JSON.stringify(currentFormData, null, 2)}</pre>
      </div>

      <div id='Previous'>
        <h2>Previous Form Data</h2>
        <pre>{JSON.stringify(previousFormData, null, 2)}</pre>
      </div>



    <button type="submit">Submit</button>
    </form>
  );
};

export default InspectionForm;
