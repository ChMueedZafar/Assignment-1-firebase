// Login.js
import React, { useState, useContext, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from "../AppContext/AppContext";
import { auth, onAuthStateChanged } from "../Firebase/Firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { signInWithGoogle, loginWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
      setLoading(false);
    });
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Must be at least 6 characters long")
        .matches(/^[a-zA-Z]+$/, "Password can only contain letters"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      try {
        await loginWithEmailAndPassword(values.email, values.password);
        navigate("/");
      } catch (error) {
        setError("Login failed. Check your credentials.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="grid grid-cols-1 h-screen justify-items-center items-center">
      <Card className="w-96">
        <CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">LOGIN</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form onSubmit={formik.handleSubmit}>
            <Input
              name="email"
              type="email"
              label="Email"
              size="lg"
              {...formik.getFieldProps("email")}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              size="lg"
              {...formik.getFieldProps("password")}
            />
            <Button variant="gradient" fullWidth type="submit">
              Login
            </Button>
            {error && (
              <Typography variant="small" color="red" className="mt-2">
                {error}
              </Typography>
            )}
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => signInWithGoogle().catch(() => setError("Google sign-in failed"))}
          >
            Sign In with Google
          </Button>
          <Link to="/reset">
            <Typography variant="small" color="blue" className="text-center">
              Reset Password
            </Typography>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
