import { useFormik } from 'formik';
import { InputGroup } from './InputGroup';
import * as Yup from 'yup';

export const Form = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(6, 'Must be 6 characters or less')
                .required('Required Field'),
            lastName: Yup.string()
                .max(6, 'Must be 6 characters or less')
                .required('Required Field'),
            email: Yup.string().email('Invalid email address').required('Required Field'),
        }),
        onSubmit: values => {
            console.log("VALUES", values);
        },

    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <InputGroup
                    label="First Name"
                    name="firstName"
                    inputType="text"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.firstName}
                    error={formik.errors.firstName}
                />
            </div>

            <div className="mb-3">
                <InputGroup
                    label="Last Name"
                    name="lastName"
                    inputType="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.lastName}
                    error={formik.errors.lastName}
                />
            </div>

            <div className="mb-3">
                <InputGroup
                    label="Email Address"
                    name="email"
                    inputType="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    touched={formik.touched.email}
                    error={formik.errors.email}
                />
            </div>

            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-secondary">
                    Send Form
                </button>
            </div>
        </form>
    )
}
