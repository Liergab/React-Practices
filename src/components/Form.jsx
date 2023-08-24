// Making  form Using react-hook-form yup & hookform resolver
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const Form = () => {


    // schema of form using yup
    const schema = yup.object().shape({
        fullname: yup.string()
                  .required('Name is required!'),

        email : yup.string()
                .email()
                .required('Email is required!'),

        age : yup.number()
                .positive('Age must be a positive number')
                .integer('Age must be an integer')
                .min(18)
                .transform((value) => Number.isNaN(value) ? null : value )
                .required('Age is required!'),

        password: yup.string()
                    .min(4).max(20)
                    .required(),

        confirmPassword : yup.string()
                    .oneOf([yup.ref("password"), null ] ,'Password does not match')
                    .required('Incorrect password')
    });

   
    const {register, handleSubmit,formState: {errors}} = useForm({
        // This is the time i used the package hookform resolver we put schema inside of it
        resolver:yupResolver(schema) 
        
    });
    
    // this part of code where we going top store the data from from
    const onSubmit = (data,e) => {
          console.log(data)
            e.target.reset();
         
        }
   
    return (
   <>
   <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text"  placeholder="Fullname ..." {...register('fullname')} /> <br />
    {errors.fullname && <p>{errors.fullname.message}</p>}
    <input type="text"  placeholder="Email ..."  {...register('email')}/> <br />
    {errors.email && <p>{errors.email.message}</p>}
    <input type="number"  placeholder="Age ..."  {...register('age')}/> <br />
    {errors.age && <p>{errors.age.message}</p>}
    <input type="password"  placeholder="Password ..."   {...register('password')}/> <br />
    {errors.password && <p>{errors.password.message}</p>}
    <input type="password"  placeholder="Confirm Password ..."  {...register('confirmPassword')}/> <br />
    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
    <input type="submit"  /><br />
   </form>
   <br />
   
   </>
  )
}

export default Form
