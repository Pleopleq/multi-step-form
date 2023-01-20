import FieldInput from "../atoms/FieldInput";

const PersonalInfoStep = () => {
  return (
    <section className='step-container'>
      <form>
        <FieldInput
          label='Name'
          labelFor='name'
          required
          handleInputChange={() => {}}
          placeholder='e.g. Stephen King'
          inputValue=''></FieldInput>

        <FieldInput
          label='Email Address'
          labelFor='email address'
          required
          handleInputChange={() => {}}
          placeholder='e.g. stephenking@lorem.com'
          inputValue=''></FieldInput>

        <FieldInput
          label='Phone Number'
          labelFor='phone'
          required
          handleInputChange={() => {}}
          placeholder='e.g. +1 234 567 890'
          inputValue=''></FieldInput>
      </form>
    </section>
  );
};

export default PersonalInfoStep;
