// react-router-doms
import { Form, Link, useActionData } from "react-router-dom";
//components
import FormInput from "../components/FormInput";
//react
import { useEffect } from "react";
//icons
import { IoLogoGoogle } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";
//custom Hooks
import { useRegister } from "../hooks/useRegister";
import { useGoogle } from "../hooks/useGoogle";
export let action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let password = formData.get("password");
  let email = formData.get("email");
  return { email, password, photoURL, displayName };
};
function Registor() {
  let userData = useActionData();
  let { isPending, register, chekInput, error } = useRegister();
  useEffect(() => {
    if (userData) {
      let { email, password, photoURL, displayName } = userData;
      if (email && password && photoURL && displayName) {
        register(userData);
        chekInput(userData);
      } else {
        chekInput(userData);
      }
    }
  }, [userData]);
  let { handleGoogle } = useGoogle();
return (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    <div className="bg-[url('https://picsum.photos/1000/1200')] bg-center bg-cover lg:block bg-no-repeat md:hidden"></div>
    <div className=" bg-[url('https://picsum.photos/1000/1200')] bg-center bg-cover bg-no-repeat lg:bg-none grid place-items-center min-h-screen">
    <div className="aligen-content flex items-center justify-center h-screen place-items-center scroll-smooth  ">
        <div className=" flex flex-col items-center justify-center gap-5 card glass sm:py-5 sm:px-16 px-5 py-2 ">
          <h1 className=" font-bold text-4xl uppercase">Registor</h1>
          <Form
            method="post"
            className=" flex items-center justify-center flex-col  w-72"
          >
            <FormInput
              type="text"
              name="displayName"
              lebal="Dispaly Name"
             
              size={error.displayName}
            />
            <FormInput
              type="url"
              lebal="Photo URL"
              
              name="photoURL"
              size={error.photoURL}
            />
            <FormInput
              type="email"
              lebal="Email"
            
              name="email"
              size={error.email}
            />
            <FormInput
              type="password"
              lebal="Password"
              name="password"
             
              size={error.password}
            />
            {!isPending ? (
              <button className="btn btn-primary w-full mt-5 ">
                <IoCreate /> Registor
              </button>
            ) : (
              <button disabled className=" w-full mt-5 ">
                <IoCreate /> Loading..
              </button>
            )}
          </Form>
          <button
            onClick={() => {
              handleGoogle();
            }}
            className="btn btn-accent w-72"
          >
            <IoLogoGoogle /> Google
          </button>
          <p>
            Do you have an account?
            <Link
              className="link
             link-primary"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Registor;
