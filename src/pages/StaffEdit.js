import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Staffmodel from '../models/Staffmodel';

const createSchema = Yup.object().shape({
    code: Yup.string().required("Vui lòng điền"),
    name: Yup.string()
      .required("Vui lòng điền"),
    age: Yup.number()
      .required("Vui lòng điền"),
    salary: Yup.number().min(0, "Salary cannot be negative").required("Vui lòng điền"),
    branch: Yup.string().required("Vui lòng điền"),
  });
  

function StaffEdit(props) {
    let navigate = useNavigate();
    let { id } = useParams();
    const [form, setForm] = useState({
        id: 0,
        code: "",
        name: "",
        age: "",
        salary: "",
        branch: "",
    });

    useEffect(() => {
        Staffmodel.find(id).then(function (data) {
            setForm(data.data);
        }).catch(function (error) {

        });
    }, [id]);

    const handleSubmit = (values) => {
        console.log(values);
        Staffmodel.update(id, values).then(function (data) {
            alert('Sửa thành công');
            navigate('/');
        }).catch(function (error) {
            alert('Sủa không thành công');
        });
    };

    return (
        <div>
            <Link to={'/'}> Back </Link>
            <h1> Edit </h1>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={createSchema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="code">Code</label>
                                    </td>
                                    <td>
                                        <Field name="code" placeholder="Enter code" />
                                        <ErrorMessage name="code" component="div" style={{ color: "red" }} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="name">Name</label>
                                    </td>
                                    <td>
                                        <Field name="name" placeholder="Enter name" />
                                        <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="age">Age</label>
                                    </td>
                                    <td>
                                        <Field name="age" placeholder="Enter age" />
                                        <ErrorMessage name="age" component="div" style={{ color: "red" }} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="salary">Salary</label>
                                    </td>
                                    <td>
                                        <Field name="salary" placeholder="Enter salary" />
                                        <ErrorMessage name="salary" component="div" style={{ color: "red" }} />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label htmlFor="branch">Branch</label>
                                    </td>
                                    <td>
                                        <Field as="select" name="branch">
                                            <option value="">Select Branch</option>
                                            <option value="IT">IT</option>
                                            <option value="KD">KD</option>
                                            <option value="MKT">MKT</option>
                                        </Field>
                                        <ErrorMessage name="branch" component="div" style={{ color: "red" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default StaffEdit;