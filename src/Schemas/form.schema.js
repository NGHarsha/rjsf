export const jsonSchema = {
  type: "object",
  title: "Apply with Resume",
  properties: {
    firstName: {
      type: "string",
      title: "First Name",
    },
    lastName: {
      type: "string",
      title: "Last Name",
    },
    experience: {
      type: "array",
      title: "Experience",
      items: {
        type: "object",
        properties: {
          company: {
            type: "string",
            title: "Company",
          },
          startDate: {
            type: "string",
            format: "date",
            title: "From",
          },
          current: {
            type: "boolean",
            enum: [true, false],
            default: false,
            title: "current",
          },
        },
        required: ["company", "startDate"],
        dependencies: {
          current: {
            oneOf: [
              {
                properties: {
                  current: {
                    enum: [false],
                  },
                  endDate: {
                    type: "string",
                    format: "date",
                    title: "To",
                  },
                },
                required: ["endDate"],
              },
              {
                properties: {
                  current: {
                    enum: [true],
                  },
                },
              },
            ],
          },
        },
      },
    },
    education: {
      type: "array",
      title: "Education",
      items: {
        type: "object",
        properties: {
          college: {
            type: "string",
            title: "College",
          },
          startDate: {
            type: "string",
            format: "date",
            title: "From",
          },
          current: {
            type: "boolean",
            enum: [true, false],
            title: "current",
            default: false,
          },
        },
        required: ["college", "startDate"],
        dependencies: {
          current: {
            oneOf: [
              {
                properties: {
                  current: {
                    enum: [false],
                  },
                  endDate: {
                    type: "string",
                    format: "date",
                    title: "To",
                  },
                },
                required: ["endDate"],
              },
              {
                properties: {
                  current: {
                    enum: [true],
                  },
                },
              },
            ],
          },
        },
      },
    },
    resume: {
      type: "string",
      format: "data-url",
      title: "Upload Resume",
    },
  },
  required: ["firstName", "lastName"],
};
