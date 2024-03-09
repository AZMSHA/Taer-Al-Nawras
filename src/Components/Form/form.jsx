import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Spinner,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import MyButton from "../Button/button";
import * as Yup from "yup";
import "./form.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string().max(50, "Too Long!").required("Required"),
  lastName: Yup.string().max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .notRequired()
    .matches(/^(\+)?(\d{10,12})$/, "Invalid phone number"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "too short")
    .max(2000, "too long, max characters: 2000"),
});

const FieldWrapper = ({ label, name, required, helpText, ...rest }) => (
  <Field name={name}>
    {({ field, form }) =>
      required ? (
        <FormControl
          isRequired
          mb={4}
          isInvalid={form.errors[name] && form.touched[name]}
        >
          <FormLabel style={{ color: "black" }} htmlFor={name}>
            {label}
          </FormLabel>
          {name === "message" ? (
            <Textarea
              {...field}
              {...rest}
              id={name}
              maxHeight="20rem"
              resize="vertical"
            />
          ) : (
            <Input {...field} {...rest} id={name} />
          )}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          <FormHelperText>{helpText}</FormHelperText>
        </FormControl>
      ) : (
        <FormControl mb={4} isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel style={{ color: "black" }} htmlFor={name}>
            {label}
          </FormLabel>
          {name === "message" ? (
            <Textarea
              {...field}
              {...rest}
              id={name}
              maxHeight="20rem"
              resize="vertical"
            />
          ) : (
            <Input {...field} {...rest} id={name} />
          )}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          <FormHelperText>{helpText}</FormHelperText>
        </FormControl>
      )
    }
  </Field>
);

FieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  helpText: PropTypes.string,
};

export default function ModalForm({ isOpen, onClose }) {
  const toast = useToast({
    duration: 5000,
    containerStyle: {
      minWidth: "27rem",
      width: "30vw",
      maxWidth: "40vw",
    },
    isClosable: true,
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
          fetch("form-handler.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(values).toString(),
          })
            .then((response) => {
              const toastPromise = new Promise((resolve, reject) => {
                if (response.ok) {
                  resolve(response.status);
                } else {
                  reject(response.status);
                }
              });

              toast.promise(toastPromise, {
                success: {
                  title: "Message Sent!",
                  description: "We'll get in touch with you soon.",
                },
                loading: {
                  title: "Please wait",
                  description: "We're processing your request",
                },
                error: {
                  title: "Oh no!",
                  description: `Looks like we've run into a problem: ${response.json()}, contact us on our phone number instead.`,
                },
              });

              if (response.ok) {
                return response.statusText;
              } else {
                throw new Error(response.json());
              }
            })
            .then((data) => {
              setStatus(data);
              setSubmitting(false);
              resetForm();
            })
            .catch(({ message }) => {
              setStatus(message);
              setSubmitting(false);
            });
        }}
      >
        {(formik) => {
          return (
            <Modal
              id={"modalForm"}
              blockScrollOnMount={false}
              closeOnOverlayClick={false}
              isCentered
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalContent>
                <ModalHeader
                  textAlign={"center"}
                  fontSize={"2rem"}
                  color={"goldenrod"}
                >
                  Get a Quote
                </ModalHeader>
                <ModalCloseButton onClick={formik.resetForm} />
                <ModalBody pb={6}>
                  <Form>
                    <FieldWrapper
                      required={true}
                      label="Name"
                      name="name"
                      placeholder="Enter first name"
                    />
                    <FieldWrapper
                      required={true}
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      helpText={
                        "We will use this email to get in touch with you."
                      }
                    />
                    <FieldWrapper
                      helpText={"Don't use spaces or hyphens ' - ' "}
                      required={false}
                      label="Phone Number"
                      name="phoneNumber"
                      placeholder="Enter phone number"
                    />
                    <FieldWrapper
                      required={true}
                      label="Message"
                      name="message"
                      as={Textarea}
                      placeholder="Enter message"
                      helpText={`${formik.values.message.length}/2000`}
                    />
                    <ModalFooter justifyContent={"center"} width={"98%"}>
                      <MyButton
                        disabled={formik.isSubmitting}
                        Class={"btn-pri"}
                        style={{
                          marginTop: "1rem",
                          color: "black",
                          position: "relative",
                        }}
                        type="submit"
                      >
                        <span style={{ opacity: formik.isSubmitting ? 0 : 1 }}>
                          Submit
                        </span>
                        {formik.isSubmitting ? <Spinner /> : false}
                      </MyButton>
                    </ModalFooter>
                  </Form>
                </ModalBody>
              </ModalContent>
            </Modal>
          );
        }}
      </Formik>
    </>
  );
}

ModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
