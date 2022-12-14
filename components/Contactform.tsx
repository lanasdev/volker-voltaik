import { useForm, ValidationError } from "@formspree/react";
import cn from "classnames";

const Contactform = () => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE || "xwkzrzwy"
  );
  if (state.succeeded) {
    return (
      <div>
        <span className="underline decoration-amber-500 underline-offset-1">
          Vielen Dank für Ihre Nachricht!
        </span>{" "}
        Wir melden uns bei Ihnen.
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-[2]">
        <div className=" md:gap-8 ">
          <fieldset className="flex flex-col gap-4 pt-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Ihr Name"
              autoComplete="name"
              className="form-input my-2 rounded-md px-4 py-3 text-black invalid:ring-red-500 placeholder:focus:italic focus:valid:ring-green-400"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </fieldset>
          <fieldset className="flex flex-col gap-4 pt-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ihre Email"
              autoComplete="email"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className="form-input my-2  rounded-md px-4 py-3 text-black  invalid:ring-red-500 placeholder:focus:italic focus:valid:ring-green-400"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </fieldset>
        </div>
        <fieldset className="flex flex-col gap-4 pt-6">
          <label htmlFor="type">Projekttyp</label>
          <select
            name="type"
            id="type"
            className="form-select rounded text-black"
          >
            <option value="Photovoltaik">Photovoltaik</option>
            <option value="Energiespeicher">Energiespeicher</option>
            <option value="Elektrik">Elektrik</option>
            <option value="Wallbox">Wallbox</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
          <ValidationError prefix="Type" field="type" errors={state.errors} />
        </fieldset>

        <fieldset className="flex flex-col gap-4 pt-6">
          <label htmlFor="message">Nachricht</label>
          <textarea
            name="message"
            placeholder="Ihre Nachricht an uns"
            minLength={4}
            className="form-textarea mt-2 mb-4 rounded-md pt-3 pb-12 text-black placeholder:focus:italic focus:valid:ring-green-400 focus:invalid:ring-red-500"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </fieldset>
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-8 rounded bg-yellow py-2 px-4 font-bold hover:bg-darkYellow"
        >
          {state.submitting ? "Sendet..." : "Anfragen"}
        </button>
      </form>
    </>
  );
};

export default Contactform;
