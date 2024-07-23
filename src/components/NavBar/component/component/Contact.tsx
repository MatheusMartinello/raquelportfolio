import { Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <div>
      <button
        onClick={() => {
          window.open("https://wa.me/message/D47343AJPSTPG1");
        }}
      >
        <Text
          fontFamily={"Poppins"}
          fontSize="1rem"
          color="#111111"
          fontWeight={400}
          className="text-decoration"
        >
          Contato
        </Text>
      </button>
    </div>
  );
};
export default Contact;
