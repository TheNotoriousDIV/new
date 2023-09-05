import { Form, FormikProps, withFormik } from "formik";
import Input from "../../../component/shared/forms/input";
import * as yup from "yup";


interface RegisterFormValues {
    name: string,
    email: string,
    password: string
}


const innerregisterForm = (props : FormikProps<RegisterFormValues>)=> {
      return(
                    <Form className="space-y-6">
                    <div>
                    <Input name='name' type='name' label="name"  />
                        {/* <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <div className="mt-1">
                            <Field id="name" name="name" type="text" autoComplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div> */}
                    </div>

                    <div>
                        <Input name='email' type='email' label="email"  />
                    </div>

                    <div>
                    <Input name='password' type='password' label="password" />
                        {/* <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <Field id="password" name="password" type="password" autoComplete="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div> */}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </Form>          
      )              
}


interface RegisterFormProps {
      name? : string,              
}

const RegisterFormValidationSchema = yup

const RegisterForm = withFormik<RegisterFormProps , RegisterFormValues>({
     mapPropsToValues : props =>{
         return{
           name : props.name ?? '',
           email: '',
           password: ''         
         }           
     },
    //  validationSchema=
     handleSubmit : (values) => {
         console.log(values);           
     }               
})(innerregisterForm)


export default RegisterForm;