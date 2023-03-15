import FieldInput from "../atoms/FieldInput";

type PersonalInfoProps = {
  setName: (string: string) => void;
  setEmail: (string: string) => void;
  setPhone: (string: string) => void;
  name: string;
  phone: string;
  email: string;
};

const PersonalInfoStep = ({
  setName,
  setEmail,
  setPhone,
  name,
  phone,
  email,
}: PersonalInfoProps) => {
  return (
    <section>
      <FieldInput
        label='Name'
        labelFor='name'
        required
        handleInputChange={setName}
        placeholder='e.g. Stephen King'
        inputValue={name}></FieldInput>

      <FieldInput
        label='Email Address'
        labelFor='email address'
        required
        handleInputChange={setEmail}
        placeholder='e.g. stephenking@lorem.com'
        inputValue={email}></FieldInput>

      <FieldInput
        label='Phone Number'
        labelFor='phone'
        required
        handleInputChange={setPhone}
        placeholder='e.g. +1 234 567 890'
        inputValue={phone}></FieldInput>
    </section>
  );
};

export default PersonalInfoStep;
