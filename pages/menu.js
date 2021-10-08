/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import React, { useState } from "react";
import { Modal } from "react-native";

import {
  Container,
  InstructionsButton,
  InstructionsButtonText,
  InstructionsText,
  ModalBox,
  ModalCloseButton,
  ModalContainer,
  StarGameButton,
  StartGameButtonText,
  Strong,
  TextStyle,
} from "../styles/menuStyles";

function Menu({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  function handleInstructions() {
    return setShowModal((prev) => !prev);
  }

  return (
    <Container>
      <TextStyle>
        <Strong>Poke</Strong>Quiz
      </TextStyle>
      <StarGameButton>
        <StartGameButtonText onPress={() => navigation.navigate("Game")}>
          Iniciar Jogo
        </StartGameButtonText>
      </StarGameButton>
      <InstructionsButton onPress={() => setShowModal(true)}>
        <InstructionsButtonText>Instruções</InstructionsButtonText>
      </InstructionsButton>
      {showModal && (
        <Modal>
          <ModalContainer>
            <ModalBox>
              <ModalCloseButton onPress={handleInstructions}>
                X
              </ModalCloseButton>
              <InstructionsText>
                O objetivo do jogo é simples, tente acertar o máximo de pokemons
                que conseguir dentro do tempo limite de 30 segundos!
              </InstructionsText>
            </ModalBox>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}

export default Menu;
