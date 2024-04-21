import { SimpleForm, required, TextInput, Edit } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit mutationMode="pessimistic">
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="Id" />
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="imageSrc" validate={[required()]} label="image" />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
