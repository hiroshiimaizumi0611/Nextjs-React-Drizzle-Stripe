import { SimpleForm, required, TextInput, Create } from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="imageSrc" validate={[required()]} label="image" />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
