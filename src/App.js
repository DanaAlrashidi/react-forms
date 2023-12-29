import logo from "./logo.svg";
import "./App.css";
import { Field, Formik, Form } from "formik";
const init = {
  username: "Dana",
  password: "123",
};
function App() {
  function x(values) {
    console.log(values);
  }
  return (
    <div className="App">
      <Formik initialValues={init} onSubmit={x}>
        <Form>
          <div>
            <label>Name</label>
            <Field type="email" name="username" />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
          </div>
          <button>Login</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
