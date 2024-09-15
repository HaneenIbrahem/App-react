import {useFormik} from 'formik';
import axios from 'axios';
export default function Register() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: RegisterUser
  });
  async function RegisterUser() {
    const {data} = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`, formik.values);
    console.log(data);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder=""
            onChange={formik.handleChange}
            name='userName'
            value={formik.userName}
          />
        </div>

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
          />
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
          />
        </div>

        <button type="submit" className="btn btn-ouline-info">
          {" "}
          Register{" "}
        </button>
      </form>
    </div>
  );
}
