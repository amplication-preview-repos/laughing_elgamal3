import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const QrCodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="scan_count" source="scanCount" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
