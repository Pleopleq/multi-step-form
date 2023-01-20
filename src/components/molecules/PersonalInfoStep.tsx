import FieldInput from "../atoms/FieldInput";
import Button from "../atoms/Button";

type PersonalInfoProps = {
  title: string;
  description: string;
};

const PersonalInfoStep = ({ title, description }: PersonalInfoProps) => {
  return (
    <section>
      <div>
        <h1>{title}</h1>
        <p>{description} </p>
      </div>

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

      <div>
        <Button onClick={() => {}}>Next Step</Button>
      </div>
    </section>
  );
};

export default PersonalInfoStep;
