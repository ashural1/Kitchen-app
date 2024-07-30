import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useEffect, useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { IoLogoGoogle } from "react-icons/io5";
import { useLogin } from "../hooks/useLogin";
import { useGoogle } from "../hooks/useGoogle";
export let action = async ({ request }) => {
  let formData = await request.formData();
  let password = formData.get("password");
  let email = formData.get("email");
  return { email, password };
};
function Login() {
  let data = useActionData();
  let { isPending, chekInput, error } = useLogin();
  let [sendEmail, setSendEmail] = useState(true);

  useEffect(() => {
    if (data) {
      chekInput(data);
    }
  }, [data]);

  let { handleGoogle } = useGoogle();


return (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    <div className="bg-[url('https://picsum.photos/1000/1200')] bg-center bg-cover lg:block bg-no-repeat md:hidden"></div>
    <div className=" bg-[url('https://picsum.photos/1000/1200')] bg-center bg-cover bg-no-repeat lg:bg-none grid place-items-center min-h-screen">
    <div className="aligen-content flex items-center justify-center h-screen place-items-center scroll-smooth  ">
        <div className=" flex flex-col items-center justify-center gap-5 card glass  sm:py-5 sm:px-16 px-5 py-2 ">
          <h1 className=" font-bold text-4xl uppercase">Login</h1>
          <Form
            method="post"
            className=" flex items-center justify-center flex-col  w-72"
          >
            <FormInput
              type="email"
              lebal="Email"
            
              name="email"
              size={error.email}
            />
            {sendEmail && (
              <FormInput
                type="password"
                lebal="Password"
                name="password"
                
                size={error.password}
              />
            )}
            {sendEmail ? (
              isPending ? (
                <button disabled className="btn btn-disabled w-full mt-5">
                  Loading...
                </button>
              ) : (
                <button className="btn btn-primary w-full mt-5 ">
                  <LuLogIn />
                  Login
                </button>
              )
            ) : (
              <button className="btn btn-primary w-full mt-5 ">
                <LuLogIn />
                Send password
              </button>
            )}
          </Form>
          {sendEmail && (
            <button
              onClick={() => {
                handleGoogle();
              }}
              className="btn btn-primary w-72"
            >
              <IoLogoGoogle />
              Google
            </button>
          )}
          <p>
            Don't have an account?
            <Link
              className="link
             link-primary"
              to="/registor"
            >
              Registor
            </Link>
          </p>
          <p>
            Forgot your password?
            <button
              onClick={() => {
                setSendEmail(!sendEmail);
              }}
              className=" link link-info"
            >
              {" "}
              {sendEmail ? "Send Password" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;
