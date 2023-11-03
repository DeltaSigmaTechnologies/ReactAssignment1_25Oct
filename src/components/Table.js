import React from 'react'
import  {Formik } from 'formik'
import * as yup from 'yup';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"; 
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

const Table = () => {
    const handleFormSubmit =()=>{
        console.log("Done")
    }
    const isNonMobile = useMediaQuery("(min-width:600px)");
  return (

    <>
    <Box sx={{ width: '50%', marginTop:"5%", marginLeft:'25%' }}></Box>
    <Formik
 onSubmit={handleFormSubmit}
 initialValues={initialValues}
 validationSchema={checkoutSchema}
>
{({
   values,
   errors,
   touched,
   handleBlur,
   handleChange,
   handleSubmit,
}) => (
    <form onSubmit={handleSubmit}>
<Box>
    <TextField
    type="text"
    label="fullname"
    name="name"
    onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.name && !!errors.name}
        helperText={touched.name && errors.name}
        sx={{padding:"2%"}}
    />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Date" onChange= {handleChange}
     />
     </LocalizationProvider>


    <br />
    <TextField
    type="text"
    label="Contact"
    name="Contact"
    onBlur={handleBlur}
        onChange={handleChange}
        error={!!touched.name && !!errors.name}
        helperText={touched.name && errors.name}
        sx={{padding:"2%"}}
        
    />
   
</Box>

</form>
)}
</Formik>
    </>
  )}

  const initialValues={
    name:"",
    email:"",
    contact:"",
    status:""
  }
  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required*"),
    email: yup.string().required("required*"),
    contact: yup.string().required("required*"),
    status: yup.string().required("required*"),
    });
export default Table
