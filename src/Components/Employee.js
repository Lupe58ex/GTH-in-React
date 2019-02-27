import React, { Component }  from 'react';
import axios from 'axios';
import {
    Form, Input,  Select, Row, Col, Checkbox, 
    Button,Card
  } from 'antd';
import '../Styles/Forms.css';


class Employee extends Component { 
  
    constructor(){
        super();
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            identificationTypes : []
         
            /*name:'',
            lastname_father:,
            lastname_mother:,
            identity_number:,
            identification_type_id:,
            gender:',
            birthdate',
            district',
            province',
            department',
            via_id',
            address',
            address_reference',
            address_sketch',
            email_main',
            email_alternative',
            enabled',
            role_id',
            phone_number01',
            phone_number02',
            phone_number03',
            phone_type1_id',
            phone_type2_id',
            phone_type3_id',
            phone_operator1_id',
            phone_operator2_id',
            phone_operator3_id',
            phone_notes01',
            phone_notes02',
            phone_notes03',
            photo',
            date_update_photo',
            admission_date',
            hire_date',
            planning_date',
            contract_term',
            contract_type_id',
            contract_file',
            real_end_hiredate',
            job_type_id',
            work_modality',
            projected_number_time',
            projected_unity_time',
            date_cessation',
            reason_cessation',
            salary_advance_allowed',
            salary',
            payrollsalary',
            marital_status',
            home_condition',
            number_of_children',
            registerphoto_date',
            availability_travel',
            area_id',
            clothing_size',
            newsletter',
            linkedln',
            medical_status',

            driver_license_number',
            date_expedition_driver_license',
            sellbydate_driver_license',
            type_driver_license',

            file_schedule',
            date_update_schedule',
            cuspp',
            bank_account_number',
            payment_type',
            financial_entity_id',

            bank_account',
            student_children*/
        };
    }
    
    componentDidMount() {
        
        axios.get('http://localhost:8000/api/employee/Create')
        .then(json => {
            this.setState({ identificationTypes : json.data.identificationTypes})
        })
        .catch(err => {
            console.log(err)
        })
        /*
        axios.get('http://localhost:8000/api/identificationType/Show/1')
        .then(res => {
            //console.log(res.data.identificacionTypes)
        })
        .catch(err => {
            console.log(err)
        })*/
    }

    onChangeName(e){
        this.setState ({
            name: e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const employee = {
            name: this.state.name
        }
        axios.post('http://localhost:8000/api/employee/Store',employee)
        .then(res=>console.log(res.data))
        .catch(err => console.log(err));
    }
    
    render() {
        return (

            <Form onSubmit={this.onSubmit}>
             <Card title="Datos Personales" bordered={false} style={{ width: 1000}}>
                <Form.Item className = 'form-group'>
                <Row>
                    <Col span={6}>
                        <p>Nombre: </p>
                    </Col>
                    <Col span={12} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <p>Apellido Paterno:</p>
                    </Col>
                    <Col span={12} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <p>Apellido Materno:</p>
                    </Col>
                    <Col span={12} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} >
                        <p>Documento de identificación</p>
                    </Col>
                    <Col span={6} >
                    <Select
                        component="select" 
                        placeholder="Elige el documento de identificacion"
                        style={{width:120}}
                        >                   
                        {
                            this.state.identificationTypes.map((Object,id) => {
                            return <option value={id}>{Object.name_short}</option>}
                            )
                        }
                    </Select>
                    </Col>
                
                    <Col span={6}>
                        <p>Numero de identificación: </p>
                    </Col>
                    <Col span={6} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <p>Género: </p>
                    </Col>
                    <Col span={6} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                    <Col span={6}>
                        <p>Fecha de nacimiento: </p>
                    </Col>
                    <Col span={6} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <p>Distrito: </p>
                    </Col>
                    <Col span={4} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                    <Col span={4}>
                        <p>Provincia: </p>
                    </Col>
                    <Col span={4} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                    <Col span={4}>
                        <p>Departamento: </p>
                    </Col>
                    <Col span={4} >
                        <Input type='email' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                    
                </Row>
                <Row>
                    <Col span={4}>
                        <p>Via: </p>
                    </Col>
                    <Col span={4} >
                        <Input type='text' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                    <Col span={4}>
                        <p>Dirección: </p>
                    </Col>
                    <Col span={4} >
                        <Input type='text' message='The input is not valid E-mail!' required='true' ></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <p>Referencia de Dirección: </p>
                    </Col>
                    <Col span={12} >
                        <Input type='text' message='' required='true' ></Input>
                    </Col>
                </Row>
                </Form.Item>
                
            <Button type='submit' className='btn'>Enviar</Button>
            </Card>
            </Form>

        );
    }
}
export default Employee;