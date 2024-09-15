import {useFormik} from 'formik';
import axios from 'axios';
export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: LoginUser,
    validate: values => {
        let errors = {}

        if(values.email.length < 10)
            errors.email = "Email is required !"
        if(values.password.length < 6)
            errors.password = "Password is required !"
        // if(values.email.indexOf('@') === -1)
        //     errors.email = "Invalid email format !"
        // if(values.password.indexOf('!') === -1)
        //     errors.password = "Password must contain at least one special character (!)!"
        // if(values.password.indexOf(' ')!== -1)
        //     errors.password = "Password cannot contain spaces !"

        return errors
    }
  });
  async function LoginUser() {
    const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`, formik.values);
    console.log(data);
  }
  console.log(formik.errors);

  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={formik.handleSubmit}>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            User Email
          </label>
          
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder=""
            onChange={formik.handleChange}
            name='email'
            value={formik.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <div className="alert alert-danger" classN>{formik.errors.email}</div>:null}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            User Password
          </label>
          
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder=""
            onChange={formik.handleChange}
            name='password'
            value={formik.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <div className="alert alert-danger" classN>{formik.errors.password}</div>:null}
          </div>

        <button type="submit" className="btn btn-ouline-info">
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
}
