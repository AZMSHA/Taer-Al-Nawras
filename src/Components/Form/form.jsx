import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel, Input,
    FormErrorMessage,
    Textarea,
    FormHelperText
  } from '@chakra-ui/react'
  import { Field, Form, Formik } from 'formik'
  import * as Yup from 'yup';
  import "./form.scss"

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().notRequired().matches(/^(\+)?(\d{10,12})$/, 'Invalid phone number'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters long'),
  });

  const FieldWrapper = ({ label, name, required, helpText, ...rest }) => (
    <Field name={name}>
      {({ field, form }) => (
        required?
        (<FormControl isRequired mb={4} isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel style={{color:"black"}} htmlFor={name}>{label}</FormLabel>
          {name === 'message' ? (
          <Textarea {...field} {...rest} id={name} resize="none" maxWidth="100%" />
        ) : (
          <Input {...field} {...rest} id={name} />
        )}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          <FormHelperText>{helpText}</FormHelperText>
        </FormControl>):(<FormControl mb={4} isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel style={{color:"black"}} htmlFor={name}>{label}</FormLabel>
          {name === 'message' ? (
          <Textarea {...field} {...rest} id={name} resize="none" maxWidth="100%" />
        ) : (
          <Input {...field} {...rest} id={name} />
        )}
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          <FormHelperText>{helpText}</FormHelperText>
        </FormControl>)
      )}
    </Field>
  );

  export default function modalForm({ isOpen, onClose }) {
    return (
        <>
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}>
                {(formik) => (
                    <Modal blockScrollOnMount={false} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                    <ModalContent >
                    <ModalHeader textAlign={"center"} fontSize={"2rem"} color={'goldenrod'}>Get a Quote</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                    <Form>
                    <FieldWrapper required={true} label="First Name" name="firstName" placeholder="Enter first name" />
                    <FieldWrapper  label="Last Name" name="lastName" placeholder="Enter last name" />
                    <FieldWrapper required={true} label="Email" name="email" type="email" placeholder="Enter email" />
                    <FieldWrapper helpText={"Don't use spaces or dashes '-'"} required={false} label="Phone Number" name="phoneNumber" placeholder="Enter phone number" />
                    <FieldWrapper required={true} label="Message" name="message" as={Textarea} placeholder="Enter message" />
                    <ModalFooter justifyContent={"center"} width={"98%"}>
                    <Button style={{marginTop:"1rem",color:'black'}} class={"btn-pri"} isLoading={formik.isSubmitting} type="submit">
                        Submit
                    </Button>
                    </ModalFooter>
                    </Form>
                    </ModalBody>
                    </ModalContent>
                    </Modal>
                )}
            </Formik>
        </>
    )
  }