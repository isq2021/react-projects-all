import { Carousel } from "bootstrap";
import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Row } from "reactstrap";
import CarouselPage from "./CarouselPage";

class ModalPage extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: true,
    };
  }

  handlerToggle = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    this.props.handalModal(!this.state.modalIsOpen);
  };
  render() {
    const { modalIsOpen } = this.state;
    const { name, profile_path, popularity, known_for } =
      this.props.dataActor[0];
    console.log(this.props.dataActor[0]);
    return (
      <Modal isOpen={modalIsOpen} toggle={this.handlerToggle}>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>
          <img
            src={"https://image.tmdb.org/t/p/w185/" + profile_path}
            alt="name"
            className="image-pop-up"
          />
          <h3> Popularity :{parseInt(popularity.toFixed(2))} </h3>
        </ModalBody>

        <ModalFooter>
          <h3>Known for</h3>
          <Row style={{ width: "100%" }}>
            <CarouselPage singleActor={this.props.dataActor[0]} />
          </Row>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ModalPage;

/* 

 {known_for.map((movie) => {
              return (
                <img
                  src={"https://image.tmdb.org/t/p/w185/" + movie.backdrop_path}
                  alt="bla "
                />
              );
            })}
*/
