import PropTypes from "prop-types";
import { Button } from "./LoadMore.styled";

export const LoadMore = ({ onClick }) => {
  return <Button onClick={onClick}>Load more</Button>;
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
