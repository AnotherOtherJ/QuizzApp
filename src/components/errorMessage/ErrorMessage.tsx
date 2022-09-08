import { useNavigate } from "react-router-dom";

import Button, { ButtonLink } from "../button/Button.style";
import StyledErrorWrapper, { StyledErrorNavigation } from "./ErrorMessage.style";

type Props = {
  errorContent: string;
};

const ErrorMessage = ({ errorContent }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledErrorWrapper>
      {errorContent}
      <StyledErrorNavigation>
        <Button onClick={() => navigate(-1)}>Try to go back</Button>
        <ButtonLink to="/">Go to the main page</ButtonLink>
      </StyledErrorNavigation>
    </StyledErrorWrapper>
  );
};

export default ErrorMessage;
