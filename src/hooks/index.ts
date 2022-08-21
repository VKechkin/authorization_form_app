import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
  const navigate = useNavigate();

  const goAuthorization = () => navigate("/");
  const goProfile = () => navigate("/profile");

  return { goAuthorization, goProfile };
};

export { useAppNavigation };
