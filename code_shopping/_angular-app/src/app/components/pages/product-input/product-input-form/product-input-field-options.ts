import {FieldsOptions} from "../../../../common/fields-options";

const productInputFieldOptions: FieldsOptions = {
  name: {
    id: 'name',
    label: 'Nome',
    validationMessage: {
      maxLength: 255
    }
  },
  active: {
    id: 'active',
    label: 'Ativo'
  }
};

export default productInputFieldOptions;
