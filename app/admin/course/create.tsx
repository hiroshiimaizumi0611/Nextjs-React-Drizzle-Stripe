import { SimpleForm, List, required, TextInput } from "react-admin";

export const CourseCreate = () => {
  return (
    <List>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="imageSrc" validate={[required()]} label="image" />
      </SimpleForm>
    </List>
  );
};

export default CourseCreate;
