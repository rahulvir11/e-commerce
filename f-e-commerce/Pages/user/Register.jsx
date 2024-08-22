import React,{ useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const API= import.meta.env.VITE_APP_URL_API;
const Register = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    dob:"2222-04-12",
    password: "",
    cpassword: "",
  });
  const handleInput = (e) => {
    //console.log(e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const response = await fetch(`${API}/api/v1/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        setUser({
          name: "",
          email: "",
          gender: "",
          password: "",
          cpassword: "",
        });
        navigate("/login");
        toast.success("sign-up successfull");
        
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log("internal server error",error);
    }
  };
  return (
    <section className=" h-[112vh] bg-gray-50 dark:bg-gray-900 box-border ">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-1 md:space-y-2" >
              {/* gmail */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              {/* name */}
              <div>
                <label
                  htmlFor="uname"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="uname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
              {/* gender */}
              <div>
                <h3 className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </h3>
                <div className="flex items-center gap-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <div className="flex items-center cursor-pointer">
                    <input
                      id="default-radio-1"
                      type="radio"
                      checked={user.gender==="male"}
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      value={"male"}
                      onChange={handleInput}
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                    >
                      male
                    </label>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <input
                      checked={user.gender==="female"}
                      id="default-radio-2"
                      type="radio"
                      name="gender"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      value={"female"}
                      onChange={handleInput}

                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                    >
                      female
                    </label>
                  </div>
                </div>
              </div>
              {/* dob */}
              <div>
              <label
                  htmlFor="dob"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dob
                </label>
                <input type="date"  id="dob" name="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={user.dob}
                onChange={handleInput}
                />
              </div>
              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={user.password}
                  autoComplete="off"
                  onChange={handleInput}
                  required
                />
              </div>
              {/*comfirm password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="cpassword"
                  id="confirm-password"
                  autoComplete="off"
                  placeholder="enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={user.cpassword}
                  onChange={handleInput}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handlSubmit}
              >
                create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <NavLink
                  to={"/login"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
