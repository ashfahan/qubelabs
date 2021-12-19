import React from "react";
import { CardBody, Collapse } from "reactstrap";
import PropTypes from "prop-types";

export class Accordion extends React.Component {
  state = {
    open: this.props.open,
  };

  toggleSection = (index) => () => {
    this.setState(({ open }) => ({ open: index === open ? undefined : index }));
  };

  render() {
    return (
      <div className="accordion this.props.className">
        {React.Children.map(this.props.children, (child, index) => {
          if (child.type !== AccordionItem) return null;
          return React.cloneElement(child, {
            isOpen: child.props.open || this.state.open === index,
            onClick: this.toggleSection(index),
          });
        })}
      </div>
    );
  }
}

Accordion.propTypes = {
  open: PropTypes.number,
};

const AccordionItem = ({ children, isOpen, onClick, className }) => (
  <div
    style={{ wordWrap: "break-word" }}
    className={`relative flex flex-col min-w-0 bg-white bg-clip-border ${className}`}
  >
    {React.Children.map(children, (child) => {
      if (child.type === AccordionHeader) {
        return React.cloneElement(child, { onClick, isOpen });
      }

      if (child.type === AccordionBody) {
        return React.cloneElement(child, { isOpen });
      }

      return null;
    })}
  </div>
);

const AccordionHeader = ({ children, onClick, className, isOpen }) => (
  <button
    className={"d-flex align-items-center " + className ?? "card-header btn shadow-none text-left"}
    onClick={onClick}
  >
    {children}

    <div className='ml-auto'>
      <svg
        className="ml-3 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        style={{
          transform: isOpen ? "rotateZ(270deg)" : "rotateZ(180deg)",
          transition: "transform .25s ease-in-out",
        }}
      >
        <g>
          <path
            className="fill-current"
            d="M9.994,14.324a1.657,1.657,0,0,0-.5-1.189L4.182,8,9.494,2.864A1.67,1.67,0,0,0,10,1.679,1.7,1.7,0,0,0,8.938.129,1.8,1.8,0,0,0,7.6.129a1.666,1.666,0,0,0-.556.364L.508,6.815a1.633,1.633,0,0,0,0,2.368l6.53,6.324a1.667,1.667,0,0,0,.556.364,1.8,1.8,0,0,0,1.338,0,1.667,1.667,0,0,0,.556-.364,1.647,1.647,0,0,0,.5-1.183"
          />
        </g>
      </svg>
    </div>
  </button>
);

const AccordionBody = ({ children, isOpen }) => (
  <Collapse isOpen={isOpen}>
    <CardBody>{children}</CardBody>
  </Collapse>
);

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
