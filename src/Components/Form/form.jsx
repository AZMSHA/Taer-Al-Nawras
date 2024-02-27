import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

  export default function Form() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader textAlign={"center"} fontSize={"2rem"} color={'goldenrod'}>Get a Quote</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>

            </ModalBody>
            <ModalFooter justifyContent={"center"} width={"auto"}>
              <Button colorScheme='blue' mr={3}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }