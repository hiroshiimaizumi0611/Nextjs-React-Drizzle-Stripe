import { SimpleForm, required, TextInput, ReferenceInput, Edit, BooleanInput } from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" label="Corect option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" validate={[required()]} label="ImageSrc" />
        <TextInput source="audioSrc" validate={[required()]} label="AudioSrc" />
      </SimpleForm>
    </Edit>
  );
};

export default ChallengeOptionEdit;
