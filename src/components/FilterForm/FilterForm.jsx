import { useFormik } from 'formik';
import { Location } from 'components/Icons/Location';
export const FilterForm = () => {
  const initialValues = {
    airConditioner: false,
    transmission: 'automatic',
    kitchen: 1,
    tv: 1,
    toilet: 1,
    form: 'alcove',
  };
  const handleSubmit = values => {
    console.log(values);
  };

  const { airConditioner, transmission, kitchen, tv, toilet, form } = useFormik(
    {
      initialValues,
      onSubmit: handleSubmit,
    }
  );
  return (
    <>
      <p>Location</p>
      <div>
        <Location />
        <p>Kyiv, Ukraine</p>
      </div>
      <form>
        <p>Filters</p>
        <label>Vehicle equipment</label>
        <input type="checkbox" name="airConditioner" />
      </form>
    </>
  );
};
