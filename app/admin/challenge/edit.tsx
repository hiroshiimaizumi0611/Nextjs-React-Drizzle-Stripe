import { SimpleForm, required, TextInput, ReferenceInput, NumberInput, Edit, SelectInput } from "react-admin";

export const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="question" validate={[required()]} label="Question" />
        <ReferenceInput source="lessonId" reference="lessons" />
        <SelectInput
          source="type"
          choices={[
            { id: "SELECT", name: "SELECT" },
            { id: "ASSIST", name: "ASSIST" },
          ]}
          validate={[required()]}
        />
        <NumberInput source={"order"} validate={[required()]} label="order" />
      </SimpleForm>
    </Edit>
  );
};

export default ChallengeEdit;
