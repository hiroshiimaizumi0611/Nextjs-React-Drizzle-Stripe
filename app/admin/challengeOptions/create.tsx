import {
  SimpleForm,
  required,
  TextInput,
  Create,
  ReferenceInput,
  BooleanInput,
} from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" label="Corect option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" validate={[required()]} label="ImageSrc" />
        <TextInput source="audioSrc" validate={[required()]} label="AudioSrc" />
      </SimpleForm>
    </Create>
  );
};

export default ChallengeOptionCreate;
