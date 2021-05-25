import React, { useState } from 'react';
import {
  Card, CardBody, CardLink,
  CardTitle, CardSubtitle,
  Tooltip,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { ImBooks } from 'react-icons/im';
import { IoIosBookmarks } from 'react-icons/io';

const TooltipAddBook = (props) => {
  // const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span>
      <IoIosBookmarks className="icon" id="Tooltip-add" />
      <Tooltip
        // placement={item.placement}
        isOpen={tooltipOpen}
        target="Tooltip-add"
        toggle={toggle}
      >
        Add book to Wishlist/Currently Reading
      </Tooltip>
    </span>
  );
};

/* TooltipAddBook.propTypes = {
  item: PropTypes.string,
  id: PropTypes.string
}; */

const TooltipFinishBook = (props) => {
  // const { item, id } = props;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <span>
      <ImBooks className="icon" id="Tooltip-finished" />
      <Tooltip
        // placement={item.placement}
        isOpen={tooltipOpen}
        target="Tooltip-finished"
        toggle={toggle}
      >
        Add book to Finished Reading List
      </Tooltip>
    </span>
  );
};

const MainInfo = (props) => {
  const { data } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{`${data[0]}: ${data[1]}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{`by ${data[2]}`}</CardSubtitle>
        </CardBody>
        <img width="10%" src={data[3]} alt="Book cover image" />
        <CardBody>
          <CardLink href="#">Buy This Book</CardLink>
        </CardBody>
      </Card>
      <TooltipFinishBook item={{ text: 'this is text' }} id="finished" />
      <TooltipAddBook item={{ text: 'this is text' }} id="add" />
    </div>
  );
};

const myPropTypes = {
  data: PropTypes.array,

}

export default MainInfo;
