import { useContext, useRef, useState } from "react";
import { ShoppingCardContext } from "../components/Context";
import Layout from "../components/layout";

function MyAccount() {
  const context = useContext(ShoppingCardContext);
  const [view, setView] = useState("user-info");
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      password: formData.get("password"),
      email: formData.get("email")
    };

    const stringifiedSingOut = JSON.stringify(data);
    localStorage.setItem("account", stringifiedSingOut);
    context.setAccount(data);
  };

  const renderUserInfo = () => {
    return (
      <div className="text-sm flex flex-col w-80">
        <p>
          <span className="text-sm">Nombre:</span>
          <span>{parsedAccount?.name}</span>
        </p>

        <p>
          <span className="text-sm">Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>

        <button
          className="bg-color7 rounded-lg mt-6 py-3"
          onClick={() => setView("edit-user-info")}
        >
          Editar
        </button>
      </div>
    );
  };

  const renderEdtiUserInfo = () => {
    <form ref={form} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm">
          Nombres:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={parsedAccount.name}
          placeholder="Andres"
          className="rounded-lg border boreder-color6 placeholder:text-sm-color6/20 focus:outline-none py-2 px-4"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="andresterraza.at@gmail.com" className="text-sm">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue={parsedAccount.email}
          placeholder="andresterraza.at@gmail.com"
          className="rounded-lg border boreder-color6 placeholder:text-sm-color6/20 focus:outline-none py-2 px-4"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm">
          password:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          defaultValue={parsedAccount.password}
          placeholder="******"
          className="rounded-lg border boreder-color6 placeholder:text-sm-color6/20 focus:outline-none py-2 px-4"
        />
      </div>
    </form>;
  };

  const renderView = () =>
    view === "edit-user-info" ? renderEdtiUserInfo() : renderUserInfo();

  return (
    <Layout>
      <div className="border border-color6 mt-20 rounded-lg px-4 py-4">
        <h1 className="font-display text-xl text-center w-80 ">Bienvenido</h1>
        {renderView()}
      </div>
    </Layout>
  );
  // return <Layout>My Account</Layout>;
}

export default MyAccount;
