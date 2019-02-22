import React from 'react';
import { Formik, FormikProps, Field, ErrorMessage } from 'formik';
import { Input, Button,Form,Select } from 'antd';

export class Area extends React.Component {
  
  handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => {
     
    console.log(values);
    alert('Form Submitted');
    setSubmitting(false);
    return;
  };
   
  render(){
     
    return(
      <Formik
        initialValues={{
           first_name: '',
           email_address: '',
           gender: ''
        }}
        validate={(values) => {
          let errors = [];
      
          if(!values.email)
             errors.email = "Email Address Required";
              
             //check if my values have errors
             return errors;
        }}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return(
            <Form.Item>
              <Field 
                 type="text" 
                 name="first_name" 
                 placeholder="First Name" 
               /> 
              <ErrorMessage name="first_name" />
                
              <Field 
                  type="text" 
                  name="email" 
                  placeholder="Email address" 
			        /> 
              <ErrorMessage name="email" />
              <Select
              
                  name="gender" 
                  component="select" 
                  placeholder="Your Gender"
                  style={{width:120}}>   
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
              
              </Select>
		            <ErrorMessage name="gender" />

                          
                <Button 
                    type="danger"
                    disabled={formProps.isSubmitting}>
                    Submit Form
                 </Button>
                 
            </Form.Item>
           );
        }}
     />);
   }
    
};
export default Area;