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
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import MyButton from "../Button/button";
import { useEffect } from "react";
import * as Yup from "yup";
import "./form.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string().max(50, "Too Long!").required("Required"),
  lastName: Yup.string().max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .notRequired()
    .matches(/^(\+)?(\d{10,12})$/, "Invalid phone number"),
  message: Yup.string().required("Message is required").min(10, "too short"),
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
              maxHeight="10rem"
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
              maxHeight="10rem"
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

export default function modalForm({ isOpen, onClose }) {
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          useEffect(() => {
            const timeoutId = setTimeout(() => {
              formik.setSubmitting(false);
            }, 5000);
            return () => clearTimeout(timeoutId);
          }, [formik.isSubmitting]);
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
