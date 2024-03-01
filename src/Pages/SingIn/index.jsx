import { useContext, useRef, useState } from "react";
import { ShoppingCardContext } from "../components/Context";
import { Link, Navigate } from "react-router-dom";
import Layout from "../components/layout";

function SignIn() {
  const context = useContext(ShoppingCardContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountLocalState;

  const handleSignIn = () => {
    const stringifiedSingOut = JSON.stringify(false);
    localStorage.setItem("sign-out", stringifiedSingOut);
    context.setSignOut(false);
    return <Navigate replace to={"/"} />;
  };

  const creatAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    };
    const stringifiedSingOut = JSON.stringify(data);
    localStorage.setItem("account", stringifiedSingOut);
    context.setSignOut(data);
    handleSignIn();
  };

  const renderLogin = () => {
    return (
      <div className="mt-5 rounded-lg px-4 py-4">
        <h1 className="font-display text-xl text-center mb-6 w-80 "></h1>
        <div>
          <p className="mb-3">
            <span className="font-light text-sm">Email: </span>
            <span className="text-sm text-color6/30">{parsedAccount?.email}</span>
          </p>
          <p>
            <span className="font-light text-sm">password: </span>
            <span className="text-sm text-color6/30">{parsedAccount?.password}</span>
          </p>
          <Link to="/">
            <button
              className="border border-color6 hover:border-color7 hover:bg-color7 bg-color-7 text-color6 w-full rounded-lg py-3 mt-4 -mb-1"
              onClick={() => handleSignIn()}
              disabled={!hasUserAnAccount}
            >
              Log In
            </button>
          </Link>
          <div className="text-center mt-3">
            <a
              className="hover:text-color11 text-xs underline underline-offset-4"
              href="/"
            >
              Olvidaste tu contraseña
            </a>
          </div>
          <button
            className="border border-color6 hover:border-color7 hover:bg-color7 bg-color-7 text-color6 w-full rounded-lg py-3 mt-4 -mb-1"
            disabled={hasUserAnAccount}
            onClick={() => setView("create-user-info")}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  };

  const renderCreatUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80 mt-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-ligth text-sm">
            Nombres:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount?.name}
            placeholder="Andres Terraza"
            className="rounded-lg border border-color6 placeholder:font-light placeholder:text-sm placeholder:text-color6/30 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-ligth text-sm">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="andresterraza.at@gmail.com"
            className="rounded-lg border border-color6 placeholder:font-light placeholder:text-sm placeholder:text-color6/30 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-ligth text-sm">
            Nombres:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="********"
            className="rounded-lg border border-color6 placeholder:font-light placeholder:text-sm placeholder:text-color6/30 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-color7 text-color6 w-full rounded-lg py-3"
            onClick={() => creatAnAccount()}
          >
            Crear Usuario
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () =>
    view === "create-user-info" ? renderCreatUserInfo() : renderLogin();

  return (
    <Layout>
      <div className="border border-color6 mt-20 rounded-lg px-4 py-4">
        <h1 className="font-display text-xl text-center w-80 ">Bienvenido</h1>
        {renderView()}
      </div>
    </Layout>
  );
}

export default SignIn;
