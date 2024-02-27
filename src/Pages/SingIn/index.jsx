import { Link } from "react-router-dom";
import Layout from "../components/layout";

function SingIn() {
  return (
    <Layout>
      <div className="border border-color6  mt-20 rounded-lg px-4 py-4">
        <h1 className="font-display text-xl text-center mb-6 w-80 ">
          Bienvenido
        </h1>
        <div>
          <p className="mb-3">
            <span className="font-light text-sm">Email: </span>
            <span className="text-sm">andresterraza.at@gamil.com</span>
          </p>
          <p>
            <span className="font-light text-sm">Contraseña: </span>
            <span className="text-sm">**********</span>
          </p>
          <Link to="/">
            <button className="border border-color6 hover:border-color7 hover:bg-color7 bg-color-7 text-color6 w-full rounded-lg py-3 mt-4 -mb-1">
              Log In
            </button>
          </Link>
          <div className="text-center mt-3">
            <a className="hover:text-color11 text-xs underline underline-offset-4" href="/">
              Olvidaste tu contraseña
            </a>
          </div>
          <button className="border border-color6 hover:border-color7 hover:bg-color7 bg-color-7 text-color6 w-full rounded-lg py-3 mt-4 -mb-1">
            Sign In
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default SingIn;
