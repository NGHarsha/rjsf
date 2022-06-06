import ExperienceArrayTemplate from "../components/ExperienceArrayTemplate";
import ExperienceObjectTemplate from "../components/ExperienceObjectTemplate";
import FormTemplate from "../components/FormTemplate";

export const uiSchema = {
  // firstName: {
  //   "ui:FieldTemplate": CustomField,
  // },
  // lastName: {
  //   "ui:FieldTemplate": CustomField,
  // },
  "ui:ObjectFieldTemplate": FormTemplate,
  experience: {
    "ui:ArrayFieldTemplate": ExperienceArrayTemplate,
    items: {
      "ui:ObjectFieldTemplate": ExperienceObjectTemplate,
    },
  },
  education: {
    "ui:ArrayFieldTemplate": ExperienceArrayTemplate,
    items: {
      "ui:ObjectFieldTemplate": ExperienceObjectTemplate,
    },
  },
  resume: {
    "ui:field": "fileField",
    "ui:options": {
      url: "someurl",
    },
  },
};
