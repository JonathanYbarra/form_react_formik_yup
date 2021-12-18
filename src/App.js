import { Form } from "./components/Form";

export const App = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-center mb-5">Use formik and YUP</h1>

        <div className="row justify-content-center">
          <div className="col col-md-4">
            <div className="card p-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
